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
let showContact = function(contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
      console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
  }
}

let addNewContact = function(contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
      contacts.push({
          name: name,
          phone: phone,
          email: email
      });
  }
  console.log("Nuevo contacto agregado: ", contacts[contacts.length - 1]);
}

const showAllContacts = (contactos, ordenarPor) => {
  if (!Array.isArray(contactos)) {
    console.error("Argumento inválido.");
    return;
  }

  let contactosOrdenados = [...contactos];
  switch (ordenarPor) {
    case "nombre":
      contactosOrdenados.sort((a, b) => {
        const nombreA = a.name || "";
        const nombreB = b.name || "";
        return nombreA.localeCompare(nombreB);
      });
      break;
    case "telefono":
      contactosOrdenados.sort((a, b) => {
        const telefonoA = a.phone || "";
        const telefonoB = b.phone || "";
        return telefonoA.localeCompare(telefonoB);
      });
      break;
    case "numero":
      contactosOrdenados.sort((a, b) => {
        const numeroA = a.email || "";
        const numeroB = b.email || "";
        return numeroA.localeCompare(numeroB);
      });
      break;
    default:
      console.error("Opción de ordenamiento inválida.");
      return;
  }

  contactosOrdenados.forEach(contacto =>
    console.log(`Nombre: ${contacto.name}`) ||
    console.log(`Teléfono: ${contacto.phone}`) ||
    console.log(`Número: ${contacto.email}`) ||
    console.log("---")
  );
};
/*
showContact(contacts, 0);
showAllContacts(contacts, "telefono");
addNewContact(contacts, "Ana", "789123456", "anna.com");
showAllContacts(contacts, "nombre");
*/
{
  let show = function () {
    console.log("test");
}
setTimeout(show, 2000);
  
}