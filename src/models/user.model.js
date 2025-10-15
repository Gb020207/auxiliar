import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
export const User = sequelize.define("User",{
    username:{
        type: DataTypes.STRING(),
        unique:true,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING(),
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(),
        allowNull:false
    }
})