console.log(!!0)      //false
console.log(!!"")     //false
console.log(!!null)   //false

//vetores truthy
console.log(!!1);        //true
console.log(!!"texto")   //true
console.log(!![]);       //true
console.log(!!{});       //true (objetos vazios são turthy)

