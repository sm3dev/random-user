// I need a function that takes a date string and converts it to a readable date format then outputs the new format

// const dateString = new Date(UserObject.dob.date);
// const formattedDate = dateString.toDateString();

export const convertTheDate = (oldDate) => {

     const startConversion = new Date(oldDate);
     const formattedDate = startConversion.toDateString();

     return formattedDate;

}

// To get current AGE -- I need a function that subtracts the user's birth date from the current year then outputs the difference as an integer