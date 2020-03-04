let a: string = 'hola';
let b: number = 10;
const num1 = 10;
const num2 = 20;
b = num1 + num2;
//reescribirla
a = "Holas";
// el dato tipo integer, no seria asignable a la variable q es string
a = 2;
// error, al asignar un string a una variable tipo number
b = a;

function suma(num1: number, num2: number): number{
  return num1 + num2;
}

//tipo any, no tiene un tipo de dato asignado
let anyValue: any = 10;
