const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: "/api/auth",
      restaurant: "/api/restaurants",
      location: "/api/location",
      products: "/api/products",
      user: "/api/user",
      upload: "/api/upload",
      contacts: "/api/contacts"
    };

    //conectar a base de datos
    this.conectarDB();

    //MIDDLEWAWRES
    this.middlewares();

    //Rutas de mi app
    this.routes();
  }

  routes() {
    this.app.use(this.paths.user, require("../routes/user"));
    this.app.use(this.paths.restaurant, require("../routes/restaurants"));
    this.app.use(this.paths.location, require("../routes/location"));
    this.app.use(this.paths.products, require("../routes/products"));
    this.app.use(this.paths.auth,require('../routes/auth'));
    this.app.use(this.paths.upload,require('../routes/uploadFile'));
    this.app.use(this.paths.contacts,require('../routes/contacts'));
  }


  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    //body parser
    this.app.use(bodyParser.json());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Público
    this.app.use(express.static("public"));

    //Directorio para imagenes
    this.app.use("/images", express.static("images"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`La api esta corriendo en el port:`, this.port);
    });
  }
}

module.exports = Server;
