// I need a function that takes a date string and converts it to a readable date format then outputs the new format

// const dateString = new Date(UserObject.dob.date);
// const formattedDate = dateString.toDateString();

export const convertTheDate = (oldDate) => {

     const startConversion = new Date(oldDate);
     const formattedDate = startConversion.toDateString();

     return formattedDate;

}

// To get current AGE -- I need a function that subtracts the user's birth date from the current year then outputs the difference as an integer
// This function should be able to take any date and covert it's "age" by subtracting the given date from the current year

export const getAge = (startDate) => {

    //I need today's date
    // new Date() returns the date of right now in a millisecond integer format
    const dateRightNow = new Date();

    // I need the given date to be converted into millisecond integer format only
    const formattedStartDate = new Date(startDate);
    
    // 2) I need the difference of dateRightNow in a full year format and formattedStartDate date both formatted into a UTCFullYear format that will return a year format like "1975"
    // AudioScheduledSourceNode, I need to calculate the difference between the new numbers
    const calculateAge = dateRightNow.getUTCFullYear() - formattedStartDate.getUTCFullYear();

    // Bryan helped a lot

    return calculateAge;
}


// I might need a function that converts a phone number string to be only an integer
// OR the function can remove special characters from a phone number and return only the series of numbers (integer)