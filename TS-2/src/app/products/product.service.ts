//All elements that manipulate data
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto"
import { Product } from "./product.model"

export const products: Product[] = []

export const addProduct = (data: CreateProductDto): Product => {
  //Read Only allow to not overwrite the variable
  //data.id = 'lkdaslknklasnsdl'
  //data.createdAt = new Date(1099,1,1)
  const newProduct = {
    //Usually comes from databases
    ...data,
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: data.categoryId,
      name: 'Brayan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  }

  products.push(newProduct)
  return newProduct
}

// Product['id'] access to the tye of the id to avoid have mistakes if the type change with the time
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {

const index = products.findIndex(item => item.id === id);
const prevData = products[index]
products[index] = {
  ...prevData,
  ...changes
}

return products[index]

}


export  const findProducts = (dto: FindProductDto): Product[] => {

  //code
  //Readonly don't allow to modify the original array
  // dto.color = 'red'

  //Disabled with readonly array in ts
  // dto.tags?.pop()
  // dto.tags?.push()
  
  return products

}