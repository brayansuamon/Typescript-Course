//To functions that never end
const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');

  }
}

const fail = (message: string) => {
 throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input == 'string') {
    return 'Es un string'
  } else if (Array.isArray(input)) {
    return 'Es un array'
  }
  return fail('no match')
}


console.log(example('Hola'));
console.log(example([1, 11, 1]));
console.log(example(3333333)); //The program stop or break
console.log(example('Hola despues del fail'));
