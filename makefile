init:
	cd backend && go mod init grpc-web-demo

gen:
	protoc --proto_path=proto proto/*.proto --go_out=plugins=grpc:./backend/pb
	protoc --proto_path=proto proto/*.proto --js_out=import_style=commonjs:./frontend/pb --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/pb

frontend:
	cd frontend && npm run dev

server:
	cd backend && go run server.go

.PHONY: init gen frontend server