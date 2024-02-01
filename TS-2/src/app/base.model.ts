//To use some parameters in multiple interfaces
//If I want to change something in the interface, Only need  to apply the change here,
//and all extends receive this
export interface BaseModel {
  //Only can read the id, not overwrite inside functions
  readonly id: string
  readonly createdAt: Date
  updatedAt: Date
}
