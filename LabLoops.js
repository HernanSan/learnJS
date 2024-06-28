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

// bucle while
let action = "";
while (action !== "quit") {
    action = prompt("¿Qué quieres hacer? (first, last, all, new, quit)");
    switch (action) {
        case "first":
            console.log(contacts[0]);
            break;
        case "last":
            console.log(contacts[contacts.length - 1]);
            break;
        case "all":
            console.log(contacts);
            break;
        case "new":
            let name = prompt("Nombre");
            let phone = prompt("Teléfono");
            let email = prompt("Correo electrónico");
            contacts.push({
                name: name,
                phone: phone,
                email: email
            });
            break;
        case "quit":
            console.log("Saliendo...");
            break;
        default:
            console.log("Elige una opción válida");
            break;
    }
}