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