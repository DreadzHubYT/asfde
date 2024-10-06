self.__uv$config = {
    prefix: '/static/tiw/',
    bare: {
        "versions": [
            "v1",
            "v2",
            "v3"
        ],
        "language": "NodeJS",
        "memoryUsage": 10.29,
        "maintainer": {
            "email": "ben@benrogo.net",
            "backend_id": "bare-02-201-8082"
        },
        "project": {
            "name": "bare-server-node",
            "description": "TOMPHTTP NodeJS Bare Server",
            "repository": "https://github.com/tomphttp/bare-server-node",
            "version": "2.0.4"
        }
    },
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
