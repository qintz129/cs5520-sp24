import { Timestamp } from 'firebase/firestore' 

// Function to format the date for the database
export const formatDbDate = (date) => {
    return date.toLocaleDateString('en-US', {
        weekday: 'short', // "short" for days of the week (e.g., "Tue")
        year: 'numeric', // "numeric" for year (e.g., "2024")
        month: 'short', // "short" for month name (e.g., "Jan")
        day: 'numeric', // "numeric" for day of the month
    }).replace(/,/g, ''); // Remove all commas
}; 

// Function to convert the timestamp to a date
export const convertTimestamp = (timestamp) => {
    const firestoreTimestamp = new Timestamp(timestamp.seconds, timestamp.nanoseconds);
    return firestoreTimestamp.toDate(); 
} 

// Function to validate the form
export const validateForm = (activity, date, duration) => { 
    const isPositiveNumeric = /^\d+(\.\d+)?$/.test(duration);   
    return !activity || !duration || !date || !isPositiveNumeric 
};