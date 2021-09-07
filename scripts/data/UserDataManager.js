// this function fetches the user data from the API

export const getRandomUser = () => {
  return fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((parsedResponse) => {
      console.log(parsedResponse.results[0]);
      return parsedResponse.results[0];
    });
};
