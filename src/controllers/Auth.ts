import express, { Request, Response } from "express";

class Auth {
  // async getAcess() {

  // }

  async teste(require: Request, response: Response) {
    return response.json({ message: "Hello, TypeScript!" });
  }
}

export default new Auth();
