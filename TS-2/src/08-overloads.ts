// Brayan => [b,r,a,y,a,n] => string => string[]
// [b,r,a,y,a,n] => Brayan => string[] => string


//Not for arrow  functions
function parseStr(input: string | string[]): string | string[] {

  if (Array.isArray(input)) {
    return input.join('') //string
  } else {
    return input.split('') //string[]
  }

}

const rtaArray = parseStr('Brayan')
console.log('Array', 'Brayan =>', rtaArray);
// I need to validate if it's an array because ts don't know based on returned options
if (Array.isArray(rtaArray)){
  rtaArray.reverse()
}


const rtaString = parseStr(['b','r','a','y','a','n'])
console.log('String', "['b','r','a','y','a','n'] =>", rtaString);
// I need to specify the type I expect is returned.
if (typeof (rtaString) === 'string') {
  rtaString.toLocaleLowerCase()
}
