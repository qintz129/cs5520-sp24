import { collection, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";   
import {database} from "./firebaseSetup"

// Function to write data to the database
export async function writeToDB(data) 
{   
    try { 
        // await in front of a promise
        await addDoc(collection(database, "activities"), data);
    } 
    catch (err){ 
        console.log(err);
    }
}; 

// Function to delete data from the database
export async function deleteFROMDB(id) 
{   
    try { 
        // await in front of a promise
        await deleteDoc(doc(database, "activities",id));
    } 
    catch (err){ 
        console.log(err);
    }
} 

// Function to update data in the database
export async function updateToDB(id, updates) 
{   
    try { 

        const docRef = doc(database, "activities",id);
        await updateDoc(docRef, updates);
    } 
    catch (err){ 
        console.log(err);
    }
}