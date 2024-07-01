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

   // Función para mostrar un contacto
const showContacts = (contactos, indice) => 
    // Verificar si los argumentos son válidos
    Array.isArray(contactos)
      ? (typeof indice === "number" && indice >= 0 && indice < contactos.length
          ? console.log(`Nombre: ${contactos[indice].name}`)
            || console.log(`Teléfono: ${contactos[indice].phone}`)
            || console.log(`Email: ${contactos[indice].email}`)
          : console.error("El índice del contacto a mostrar no es válido."))
      : console.error("El primer argumento debe ser una matriz de contactos.");

  // Función para mostrar todos los contactos
  const showAllContacts = contactos =>
    Array.isArray(contactos)
      ? contactos.forEach(contacto =>
          console.log(`Nombre: ${contacto.name}`)
            || console.log(`Teléfono: ${contacto.phone}`)
            || console.log(`Email: ${contacto.email}`)
            || console.log("---")
        )
      : console.error("El argumento debe ser una matriz de contactos.");
  
  // Función para agregar un nuevo contacto
  const addNewContact = (contactos, nombre, telefono, correo) => 
    // Verificar si los argumentos son válidos
    Array.isArray(contactos) &&
    typeof nombre === "string" &&
    nombre.trim() !== "" &&
    typeof telefono === "string" &&
    telefono.trim() !== "" &&
    typeof correo === "string" &&
    correo.trim() !== ""
      ? (contactos.push({
          name: nombre.trim(),
          phone: telefono.trim(),
          email: correo.trim()
        }),
        console.log(`Nuevo contacto agregado.\n Name: ${contactos[contactos.length - 1].name}
            \n Phone: ${contactos[contactos.length - 1].phone}
            \n Email: ${contactos[contactos.length - 1].email}`)) 
      : console.error("Los datos del nuevo contacto no son válidos.");

showContacts(contacts, 2);
showAllContacts(contacts);
addNewContact(contacts, "Ana", "789123456", "anna.com");
