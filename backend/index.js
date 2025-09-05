// Importo el archivo app.js
import app from './app.js';
import dotenv from "dotenv";

dotenv.config();

import {config} from "./src/config.js"

// Creo una función que se encarga de ejecutar el servidor
async function main(){
    //const port = ;
    app.listen(config.server.port);
    console.log("Server on port " + config.server.port);
}

//Ejecutamos todo
main();