import { BaseModel } from "../base.model";

export enum ROLES {
  //Could be a number or string
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export interface User extends BaseModel {
  username: string,
  role: ROLES
}
