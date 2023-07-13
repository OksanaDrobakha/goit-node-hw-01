const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");
const contactsFile = require(contactsPath);

async function listContacts() {
  try {
    const data = fs.readFileSync(contactsPath);
    const list = JSON.parse(data.toString());
    const result = [...list].sort((a, b) => a.name.localeCompare(b.name));
    console.table(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = fs.readFileSync(contactsPath);
    const contacts = JSON.parse(data.toString());

    const contactsFilter = contacts.filter(
      (contact) => contact.id === contactId
    );
    if (contactsFilter.length > 0) {
      console.table(contactsFilter);
      return;
    }

    console.log(`contact with id ${contactId} not found`);
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = fs.readFileSync(contactsPath);
    const contacts = JSON.parse(data.toString());

    const contactIndex = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactIndex !== -1) {
      contacts.splice(contactIndex, 1);
      await fs.promises.writeFile(contactsPath, JSON.stringify(contacts));
      console.log(`Contact with the id ${contactId} has been removed`);
    } else {
      console.log(`There is no contact with the id: ${contactId}.`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  if (name === undefined || email === undefined || phone === undefined) {
    console.log(
      "Please fill in all fields (name, email, phone) to add contact"
    );
    return;
  }

  const contact = {
    id: (Math.floor(Math.random() * 100000) + contactsFile.length).toString(),
    name,
    email,
    phone,
  };

  try {
    contactsFile.push(contact);
    const contactsUpdate = JSON.stringify(contactsFile);
    await fs.promises.writeFile(contactsPath, contactsUpdate);
    console.log(`${name} has been added to your contacts`);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
