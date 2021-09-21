import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const user = user_id.toString();
    try {
      const users = this.listAllUsersUseCase.execute({ user_id: user });
      return response.send(users);
    } catch (err) {
      return response.status(400).send({ error: "Permision denied" });
    }
  }
}

export { ListAllUsersController };
