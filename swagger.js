const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Contacts Api'
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputfile = './swagger.json';
const endpointsFiles = ['./server.js' ];

swaggerAutogen(outputfile, endpointsFiles, doc);