import { sequelize } from "../config/db.js";
import {DataTypes} from "sequelize";
import { User } from "./user.model.js";

export const Profile = sequelize.define("Profile", {
    firstName:{
        type:DataTypes.STRING(),
        allowNull:false,
    },
    lastName:{
        type: DataTypes.STRING(),
        allowNull:false,

    },
})

Profile.belongsTo(User, {foreignKey: user_id, as:"user"});
User.hasOne(Profile, {foreignKey: user_id, as: "profile"})
