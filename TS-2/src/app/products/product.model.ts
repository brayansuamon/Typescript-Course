//All declarations are here
import { BaseModel } from "../base.model"
import { Category } from "../categories/category.model"

//Created, id, and updated are not necessary because we extends from  BaseModel
//Type can not extend
export type Sizes = 'S' | 'M' | 'L' | 'XL'
export interface Product extends BaseModel {
  title: string
  image: string
  description: string
  stock: number
  size?: Sizes
  color: string
  price: number
  category: Category
  isNew: boolean
  tags: string[]
}

