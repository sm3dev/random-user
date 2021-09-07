console.log("You look marvelous!")

import { getRandomUser } from "./data/UserDataManager.js"
import { UserItem } from "./data/UserItem.js";

const showRandomUser = () => {

    const postElement = document.querySelector(".user-info__block");
    getRandomUser().then((oneUser) => {
        postElement.innerHTML = UserItem(oneUser)
    });

};

showRandomUser();