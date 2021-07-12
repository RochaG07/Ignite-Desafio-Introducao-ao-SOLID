import { v4 as uuidV4, v4 } from "uuid";

class User {
  constructor(){
    this.id = v4();

    this.admin = false;

    this.created_at =  new Date();
    this.updated_at =  new Date();
  }

  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

export { User };
