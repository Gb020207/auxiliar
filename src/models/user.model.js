// import { sequelize } from "../config/db.js";
// import { DataTypes } from "sequelize";
// export const User = sequelize.define("User",{
//     username:{
//         type: DataTypes.STRING(),
//         unique:true,
//         allowNull:false,
//     },
//     email:{
//         type: DataTypes.STRING(),
//         unique:true,
//         allowNull:false,
//     },
//     password:{
//         type:DataTypes.STRING(),
//         allowNull:false
//     }
// })
import {ProfileSchema} from "./profile.model.js"
import {Schema, model} from "mongoose";
// hace el profile enbebido nomas
// sep, eso estoy hadiendo
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    profile: {ProfileSchema}
});


export const User = new model("Users", UserSchema);