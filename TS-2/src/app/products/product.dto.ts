import { Product } from "./product.model"

//Utility types
//Omit helps to omit id and createdAt from product interface
type CreateProductDto1 = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>

//Interface allow us to extend interfaces
//Omit helps to omit id and createdAt from product interface
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

//Pick says that take only id, createdAt, updatedAt and category from the interface
export interface CreateProduct extends Pick<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

//Interface to update Product DTO
//We are gonna use Partial, makes it all fields as optional

//type UpdateProductDto = Partial<Product>

//Interface allow us to extend
export interface UpdateProductDto extends Partial<CreateProductDto>{

}

//Requiered makes it all required  
type exampleRequired = Required<Product>


//Readonly makes all parameters only for read
// export interface FindProductDto extends Readonly<Partial<Product>>{}

//We are gonna edit the type of tags to add  readonly array and disable push and pull operations
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{

  //readonly is to disable mutation options
  //ReadonlyArray is to disable modification methods

  readonly tags?: ReadonlyArray<string>
}