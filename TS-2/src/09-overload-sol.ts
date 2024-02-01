// Brayan => [b,r,a,y,a,n] => string => string[]
// [b,r,a,y,a,n] => Brayan => string[] => string

// ############## function overload (specify import and export) ##########
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

//Not for arrow  functions
//Export understand that only access this with import
export function parseStr(input:unknown): unknown {

  if (Array.isArray(input)) {
    return input.join('') //string
  } else if(typeof input === 'string'){
    return input.split('') //string[]
  } else if(typeof input === 'number'){
    return true //boolean
  }
}

//The overload helps to recognize the type of value
const rtaArray = parseStr('Brayan')
console.log('Array', 'Brayan =>', rtaArray);
rtaArray.reverse()


const rtaString = parseStr(['b','r','a','y','a','n'])
console.log('String', "['b','r','a','y','a','n'] =>", rtaString);
rtaString.toLocaleLowerCase()

const rtaBoolean = parseStr(24)
console.log('Boolean', "24 =>", rtaBoolean);
