import { comparePasswords, hashPassword } from "../helpers/bcrypt.js";
import { signToken } from "../helpers/jwt.js";
import { User } from "../models/user.model.js";


export const register = async (req,res) => {
    const {firstName,lastName,username, email, password} = req.body;
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
            // firstName,
            // lastName,
            username,
            email,
            password: hashed,
            profile:{
                lastName: lastName,
                firstName: firstName
            }
      
        });
        res.json({
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
        const user = await User.findOne({where:email});
        if(!user){
            return res.status(400).json({
                msg:"El email es incorrecto",
            })

        }
        const isMatch = await comparePasswords(password, user.password)
        if(!isMatch){
            return res.status(400).json({
                msg:"Contraseña incorrecta",
            })
        }
        const token = signToken({
            email: user.email,
        })
        res.cookie("token", token,{
            httpOnly:true,
            maxAge: 1000 * 60 * 60,
        });
        res.json({
            msg:"Usuario logeado",
            token,
            user:{
                id:user._id,
                username: user.username,
                email:user.email,
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Error del servidor",
        })
    }
    
};

export const logout = async () => {
    try {
        res.clearCookie("token");
        return res.status(200).json({
            msg:"sesion terminada"
        })
    } catch (error) {
        return res.status(500).json({
            msg:"error del servidor"
        })
    }
}