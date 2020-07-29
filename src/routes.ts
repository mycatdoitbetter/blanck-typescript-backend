import { Router } from "express";
// import { ANYVAR } from "./utils/dotenv"; // is functional
import Controller from "./controllers/Controller";

const routes = Router();

routes.post("/", Controller.Test);

export default routes;
