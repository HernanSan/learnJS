{
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
    /*
        intentemos modificar el programa para que el usuario pueda elegir qué quiere hacer con la lista. Tendrán la opción de:
        mostrando el primer contacto (primero)
        mostrando el último contacto (último)
        Agregar un nuevo contacto (nuevo)
    */
    let action = prompt("¿Qué quieres hacer? (primero, último, nuevo)");
    switch (action) {
        case "primero":
            console.log(contacts[0]);
            break;
        case "último":
            console.log(contacts[contacts.length - 1]);
            break;
        case "nuevo":
            let name = prompt("Nombre");
            let phone = prompt("Teléfono");
            let email = prompt("Correo electrónico");
            contacts.push({
                name: name,
                phone: phone,
                email: email
            });
            break;
        default:
            console.log("Elige una opción válida");
            break;

    // presentar en la alerta todos los contactos
    alert("Hecho! Revisa la consola para ver los cambios.", console.log(contacts));
    }
    
}