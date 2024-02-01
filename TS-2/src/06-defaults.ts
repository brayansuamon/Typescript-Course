export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
)=> {
  return {
    id,
    isNew,
    stock,
}
}

const p1 = createProduct(12, true)
console.log(p1);

const p2 = createProduct(5)
console.log(p2);

//For ||
// 0 === false
// '' === false
// false === false
//You must use ??

const p3 = createProduct(5, false, 0)
console.log(p3);

const p4 = createProduct(5, true, 100)
console.log(p4);
