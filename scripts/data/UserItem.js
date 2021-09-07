import { User } from "./User.js";

export const UserItem = (oneUser) => {
	let userHTML = "";
	//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
	for (const UserObject of oneUser) {
		//what is a UserObject?
		userHTML += User(UserObject)
	}
	return userHTML;
	
}