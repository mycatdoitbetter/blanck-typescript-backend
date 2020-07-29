import { Request, Response } from "express";

class Controller {
  async Test(require: Request, response: Response) {
    try {
      response.json({ message: "Hello my friend!" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Controller();
