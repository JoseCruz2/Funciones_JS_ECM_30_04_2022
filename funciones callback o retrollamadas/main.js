let fnA = function(){
    return `Hola soy la funcion Y`;
}
let fnB = function(callback){
    console.log(callback());
    return `Hola soy la funcion Z`;
}


console.log(fnB(fnA));
