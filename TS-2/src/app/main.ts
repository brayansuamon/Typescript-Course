//We use services here
import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct(
    {
      title: faker.commerce.productName(),
      stock: faker.datatype.number({min:10, max:100}),
      size: 'M',
      image: faker.image.imageUrl(),
      color: faker.color.human(),
      price: parseInt(faker.commerce.price(), 10),
      isNew: faker.datatype.boolean(),
      tags: ['laptop','iphone'],
      description: faker.commerce.productDescription(),
      categoryId: faker.datatype.uuid()
    }
  )

}


const product = products[0]
updateProduct(product.id, {
  title: 'New Title',
  stock: 30,
})

findProducts(
  {stock: 10,
  color: 'red'
})