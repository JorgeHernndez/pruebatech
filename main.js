const funciones=require('./funciones.js');
const os=require('os');

console.log(funciones.personas);
setTimeout(funciones.suma,2,10,30);
console.log(funciones.saludo());
console.log(os.platform());

console.log("Hola mundo");
console.warn("Esta es una advertencia");
console.assert("Hola"=="Hola","No son iguales");
console.error(new Error("Este es un error"));
console.table([1,2,3,4,5]);
setImmediate(funciones.suma,10,40);
console.table([{a:1,b:2},{a:3,b:4}]);
console.table(funciones.personas); 


/* //const funciones=require('./funciones.js');
const {saludo, personas}=require('./funciones.js');
//console.log(funciones);
//console.log(funciones.saludo());

saludo();

console.log(personas);
for(elementos of personas){
    console.log(elementos.nombre);
    console.log(elementos.edad);
    console.log(elementos.pais);
} */