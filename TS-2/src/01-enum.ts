export enum ROLES {
  //Could be a number or string
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  username: string,
  role: ROLES
}


//Enum call the specific variables that I want to use
const nicoUser: User = {
  username: "brayan",
  role: ROLES.ADMIN
}
