package main

import (
	"context"
	"log"
	"net"
	"net/http"
	"os"

	cities "grpc-web-demo/pb"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
)

type RpcServer struct {
	Grpc        *grpc.Server
	WrappedGrpc *grpcweb.WrappedGrpcServer
}

func NewServer() *RpcServer {
	gs := grpc.NewServer()
	return &RpcServer{
		Grpc:        gs,
		WrappedGrpc: grpcweb.WrapServer(gs),
	}
}

func main() {
	if err := run(); err != nil {
		log.Printf("error: shutting down: %s", err)
		os.Exit(1)
	}
}

func run() error {
	port := map[string]string{"grpc": "9099", "web": "8099"}
	rpcServer := NewServer()
	cities.RegisterCitiesServiceServer(rpcServer.Grpc, &citiesServer{})

	err := make(chan error)
	go func() {
		err <- runRpcServer(port["grpc"], rpcServer)
	}()
	go func() {
		err <- runWebServer(port["web"], rpcServer)
	}()

	select {
	case e := <-err:
		if e != nil {
			return e
		}
	}

	return nil
}

func runRpcServer(port string, rpcServer *RpcServer) error {
	listener, err := net.Listen("tcp", ":"+port)
	if err != nil {
		return err
	}

	if err := rpcServer.Grpc.Serve(listener); err != nil {
		return err
	}
	return nil
}

func runWebServer(httpPort string, rpcServer *RpcServer) error {
	grpc := rpcServer.WrappedGrpc

	http.HandleFunc("/", func(resp http.ResponseWriter, req *http.Request) {
		allowCors(resp, req)
		if grpc.IsGrpcWebRequest(req) || grpc.IsAcceptableGrpcCorsRequest(req) {
			grpc.ServeHTTP(resp, req)
		}
	})

	err := http.ListenAndServe(":"+httpPort, nil)
	if err != nil {
		return err
	}

	return nil
}

func allowCors(resp http.ResponseWriter, req *http.Request) {
	resp.Header().Set("Access-Control-Allow-Origin", "*")
	resp.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	resp.Header().Set("Access-Control-Expose-Headers", "grpc-status, grpc-message")
	resp.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, XMLHttpRequest, x-user-agent, x-grpc-web, grpc-status, grpc-message")
}

type citiesServer struct{}

func (u *citiesServer) List(ctx context.Context, in *cities.EmptyMessage) (*cities.Cities, error) {
	list := &cities.Cities{}
	list.City = append(list.City,
		&cities.City{Id: 1, Name: "Jakarta"},
		&cities.City{Id: 2, Name: "Surabaya"},
		&cities.City{Id: 3, Name: "Denpasar"},
	)
	return list, nil
}
