import { hashPassword } from "../helpers/bcrypt.js";
import { User } from "../models/user.model.js";

export const register = async (req,res) => {
    const {username, email, password} = req.body;
    try {
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(500).json({
                msg:"e usuario ya esta registrado",
            })
        }
        if(!password){
            return res.status(500).json({
                msg:"La contraseña es obligatoria",
            })
            
        }
        const hashed = await hashPassword(password)
        const newUser = new User({
            username,
            email,
            password: hashed,
        })
        await newUser.save();
        res.status(200).json({
            msg: "Usuario creado",
            data: newUser,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "error del servidor"
        })
       
    }
    
}
export const login = async (req,res) => {
    const {email,password} = req.body;
    try {
        
    } catch (error) {
        
    }
    
}