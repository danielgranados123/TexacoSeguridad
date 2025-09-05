// Importo la libreria que acabo de instalar
import dotenv from "dotenv";

// Ejecuto "dotenv" que me ayudará a acceder al .env
dotenv.config();

export const config = {
    server: {
        port:
            process.env.PORT || 4000,
    },
    email: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    }
}