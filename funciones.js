{
    let inner = function() {
        console.log('inner 1');
   }
   let outer = function(callback) {
        console.log('outer 1');
        callback();
        console.log('outer 2');
   }
   console.log('test 1');
   outer(inner);
   console.log('test 2');
}

{
    //Devoliciones de llamadas asincronas
    let inner = function() {
        console.log('inner 1');
        }
        let outer = function(callback) {
        console.log('outer 1');
        setTimeout(callback, 1000) /*ms*/;
        console.log('outer 2');
        }
        console.log('test 1');
        outer(inner);
        console.log('test 2');
        
}
{
    // Eventos de usuario y eventos de navegador al hacer clic
    window.addEventListener("click", function() {
        console.log("clicked!");
   });
}

{
    // Simplificción de flecha de funciones
    let add = (a, b) => a + b;
    console.log(add(10, 20)); // -> 30
}

{
    // optimizar funciones de flecha y anoniimas
    let numbers = [50, 10, 40, 30, 20];
    let sorted = numbers.sort((a, b) => a - b);
    console.log(sorted); // [10, 20, 30, 40, 50]

    let sortedDes = numbers.sort((a, b) => b - a);
    console.log(sortedDes); // [10, 20, 30, 40, 50]
}
{
    function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
    }

    function sub(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            return NaN;
        }
        return a - b;
    }

    function mult(a, b) {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            return NaN;
        }
        return a * b;
    }
    console.log(add(12, 10)); // -> 22
    console.log(mult(12, 10.1)); // -> NaN

}

{
    // funcion de flecha
    let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
    let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
    let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
    console.log(add(12, 10)); // -> 22
    console.log(mult(12, 10.1)); // -> NaN
}