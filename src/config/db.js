import {Sequelize} from 'sequelize';
import mongoose from "mongoose";
//sequelize
// export const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: process.env.DB_DIALECT
//     }
// )
//mongoose 
export const initDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.sync()
    } catch (error) {
        console.log("conexion con la base de datos fallida");
    }
};
// export const initDB = async () => {
//     try {
//         sequelize.authenticate();
//         console.log("Se conecto a la base de datos");
//         sequelize.sync();
//     } catch (error) {
//      console.log(error,"No se pudo conectar a la base de datos")
//     }
    
// } 