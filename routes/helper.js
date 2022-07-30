import { client } from "../index.js";
export async function createNewContacts(data) {
    return await client
    .db("Contacts")
    .collection("Contacts").
    insertMany([data]);
}

export async function getAllContacts(request) {
    return await client.db("Contacts")
    .collection("Contacts")
    .find(request.query).toArray();
}