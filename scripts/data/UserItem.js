import { User } from "./User.js";

export const UserItem = (oneUser) => {
	let userHTML = "";
	//no array to loop over, so invoke the User component which returns HTML representation
	
		userHTML += User(oneUser)
	
	return userHTML;
	
}