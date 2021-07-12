import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    
    const emailAlreadyInUse = this.usersRepository.findByEmail(email);

    if(emailAlreadyInUse){
      throw new Error('Email já em uso');
    }
    

    const user = this.usersRepository.create({ email, name });

    return user;
  }
}

export { CreateUserUseCase };
