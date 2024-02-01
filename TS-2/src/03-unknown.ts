let anyVar: any;
anyVar = true
anyVar = [99]
anyVar = null

//Any may be dangerous because I can assign this to another variables
//Last value of anyVar is null
let isNew: boolean = anyVar

//Any don't recognize a type
anyVar.doSomething();


//Unknown var
let unknownVar: unknown;
unknownVar = true
unknownVar = [99]
unknownVar = null

// let isNew: boolean = unknownVar;
//This force to verify types of variable
if (typeof unknownVar == 'boolean') {
    let isNew: boolean = unknownVar
}


//Unknown verify that the type and properties exist
//unknownVar.doSomething();
//This force to verify types of variable
if (typeof unknownVar == 'string') {
  unknownVar.toLocaleLowerCase()
}


//If you know what return, check the type with unknown
const parse = (str: string): unknown => {
  return JSON.parse(str)
}

