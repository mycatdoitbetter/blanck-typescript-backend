import { Router } from "express";
import Auth from "./controllers/Auth";
const routes = Router();

routes.get("/", Auth.teste);

export default routes;
