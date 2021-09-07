console.log("You look marvelous!")

const showRandomUser = () => {

    return fetch("https://randomuser.me/api/").then(response => response.json()).then(parsedResponse => {
        console.log(parsedResponse);
    })
    // url: 'https://randomuser.me/api/',
    // dataType: 'json',
    // success: function(data) {
    //   console.log(data);
    // }
};

showRandomUser();
     