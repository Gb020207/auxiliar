// import { sequelize } from "../config/db.js";
// import {DataTypes} from "sequelize";
// import { User } from "./user.model.js";

import {Schema, model} from "mongoose";

export const ProfileSchema = new Schema({
    _id: false,
    firstName: {
        type: String,
        require: true
        
    },
    lastName: {
        type: String,
        require: true
    }
});






// export const Profile = sequelize.define("Profile", {
//     firstName:{
//         type:DataTypes.STRING(),
//         allowNull:false,
//     },
//     lastName:{
//         type: DataTypes.STRING(),
//         allowNull:false,

//     },
// })

// Profile.belongsTo(User, {foreignKey: user_id, as:"user"});
// User.hasOne(Profile, {foreignKey: user_id, as: "profile"})
