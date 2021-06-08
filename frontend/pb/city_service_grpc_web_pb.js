/**
 * @fileoverview gRPC-Web generated client stub for cities
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var city_message_pb = require('./city_message_pb.js')

var generic_message_pb = require('./generic_message_pb.js')
const proto = {};
proto.cities = require('./city_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cities.CitiesServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cities.CitiesServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cities.EmptyMessage,
 *   !proto.cities.Cities>}
 */
const methodDescriptor_CitiesService_List = new grpc.web.MethodDescriptor(
  '/cities.CitiesService/List',
  grpc.web.MethodType.UNARY,
  generic_message_pb.EmptyMessage,
  city_message_pb.Cities,
  /**
   * @param {!proto.cities.EmptyMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  city_message_pb.Cities.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cities.EmptyMessage,
 *   !proto.cities.Cities>}
 */
const methodInfo_CitiesService_List = new grpc.web.AbstractClientBase.MethodInfo(
  city_message_pb.Cities,
  /**
   * @param {!proto.cities.EmptyMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  city_message_pb.Cities.deserializeBinary
);


/**
 * @param {!proto.cities.EmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cities.Cities)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cities.Cities>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cities.CitiesServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cities.CitiesService/List',
      request,
      metadata || {},
      methodDescriptor_CitiesService_List,
      callback);
};


/**
 * @param {!proto.cities.EmptyMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cities.Cities>}
 *     Promise that resolves to the response
 */
proto.cities.CitiesServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cities.CitiesService/List',
      request,
      metadata || {},
      methodDescriptor_CitiesService_List);
};


module.exports = proto.cities;

