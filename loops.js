/*
{
    
    let n = 0;
    while(n < 91) {
        console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
        n += 10;
    }
    
}
{
    let isOver = false;
    let counter = 1;
    
    while (!isOver) {
        isOver = !confirm(`[${counter++}] Continue the loop?`);
    }
    
}
{
    // comprobar si el valor inicial sea mayor que el valor final
    let upperLimit = Number(prompt("Enter upper limit"));
    let lowerLimit = Number(prompt("Enter lower limit"));
    
    if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
        for (i = upperLimit; i >= lowerLimit; i -= 10) {
            console.log(i);
        }
    }
}
*/

{
    //
    let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
    for(number of numbers){
        console.log(number);
    }
    console.log('-------------------');
    // comprobar si los valores de numbers son pares
    for ( number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
    console.log('-------------------');
    for(number of numbers){
        if (number > 10 && number < 60) { 
            console.log(number);
        }
    }
}
{

}