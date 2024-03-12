function saludo(){
    console.log("Hola mundo");
}

function suma(a,b){
    console.log(a+b);
    return a+b;
}

const personas=[{nombre:"juan",edad:20,pais:"colombia"},{nombre:"ana",edad:15,pais:"chile"},{nombre:"pedro",edad:25,pais:"argentina"}]

/* module.exports.saludo = saludo;
module.exports.suma = suma; */
module.exports={saludo:saludo,
                suma:suma,
                personas:personas};
