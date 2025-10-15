import { Router } from "express";
import {login, register, logout} from "../controllers/auth.controllers.js";



const authRouter = Router();


authRouter.post("/auth/register", register );
authRouter.post("/auth/login", login);
authRouter.post("/auth/logout", logout);



export default authRouter;
