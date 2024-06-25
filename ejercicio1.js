{
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);
}
{
    // Ejercicios Objetos y Matrices
    /* 
    Pregunta 1: cree un objeto que describa un billete de tren y guárdelo en la variable billete. El objeto debe tener tres campos:
    estación de inicio (nombre clavede, indique como valor el nombre de la estación más cercana en su área);
    estación final (nombre de clavea, indique como valor cualquier otra estación dentro de un radio de 100 km);
    el precio del billete (nombre claveprecio, indica como valor la cantidad que te gustaría pagar por este billete).
    El objeto debe crearse utilizando llaves, en las que todos los campos creados se enumerarán inmediatamente. Luego muestre los valores de todos los campos del ticket en la consola.
        
    */
    let ticket = {
        from: "Madrid", 
        to: "Barcelona",
        price: 90
    };
    console.log(`Ticket from ${ticket.from} to ${ticket.to} costs ${ticket.price} euros`);

    /*
    Pregunta 2: Declare un objeto vacío y guárdelo en una variable de persona. Usando notación de 
    puntos, agregue elnombre y apellidocampos al objeto ingresando sus datos como valores. Intente 
    mostrar los campos individuales en la consola.
    */
    let person = {};
    person.name = "Alice";
    person.surname = "Smith";
    console.log(`My first name is ${person.name}, my second name is ${person.surname}`);  
    
    {
        let book = [{
            title: "Hablando Java Script",
            autor : "Axel Rauschmayer",
            pages : 460},
        {
            title: "Eloquent JavaScript",
            autor : "Marijn Haverbeke",
            pages : 472
        }]

        let newBook = {
            title: "JavaScript for Kids",
            autor : "Nick Morgan",
            pages : 336
        };
        book.push(newBook);
        console.log(newBook);
        console.log(book.length);
        console.log(book[0].title);
        console.log(book[1].title);
        console.log(book[2].title);
        
        // contar el número de paginas de todos los libros
        let total = 0;
        for (let i = 0; i < book.length; i++) {
            total += book[i].pages;
        }
        console.log(`El total de las paginas de los libros  es ${total}`);
    }
    /*
        cree la lista de contactos como una matriz, cada elemento del cual será un objeto que 
        describirá a un solo usuario. Entonces deberíamos obtener una matriz de tres elementos, 
        y cada objeto colocado en ella contendrá tres datos (nombre, teléfono y correo electrónico).
    */
    let contacts = [{
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
        }, {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
        }, {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }];
    console.log(contacts.length);
    contacts.push({name: "Tobias", phone: "123456789", email: "Tobi"});
    console.log(contacts.length);
    // presentar el primero y ultimo contacto
    console.log(contacts[0]);
    console.log(contacts[contacts.length - 1]);
    console.log(`El nombre de la persona es ${contacts[0].name} y su telefono es ${contacts[0].phone}`);
    console.log(`El nombre de la persona es ${contacts[contacts.length - 1].name} y su telefono es ${contacts[contacts.length - 1].phone}`);
}