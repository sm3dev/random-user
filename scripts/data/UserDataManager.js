// this function fetches the user data from the API

export const getRandomUser = () => {

    return fetch("https://randomuser.me/api/").then(response => response.json()).then(parsedResponse => {
        console.log(parsedResponse);
    })
    // url: 'https://randomuser.me/api/',
    // dataType: 'json',
    // success: function(data) {
    //   console.log(data);
    // }
};

let userHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const UserObject of allUsers) {
			//what is a UserObject?
			userHTML += User(UserObject)
		}
		return userHTML;