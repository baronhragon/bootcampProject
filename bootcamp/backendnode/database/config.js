const mssql = require('mssql');

const connectionString = {
    server: process.env.SERVER,
    port: 1433,
    database: "restaurants", //you should always save these values in environment variables
    user: "sa", //only for testing purposes you can also define the values here
    password: "bootcampMIND.",
    dialect: "mssql", //here you need to define the dialect of your databse, in my case it is Postgres
    options: {
      trustServerCertificate: true,
    },
  };

const dbConnection = async(Iquery) => {
  const poolGlobal = new mssql.ConnectionPool(connectionString);
  poolGlobal.on('error', (err)=> {
    //... error handler
    console.log('sql errors',err);
  });
    try {
        await poolGlobal.connect();
        let result = await poolGlobal.request().query(Iquery);
        return result;

    } catch (error) {
      console.log("error",error);
    }
  };

  module.exports = {
    dbConnection,
  }