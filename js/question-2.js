// Question 2
// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

// const proxy = "https://noroffcors.herokuapp.com/" + url;

const apiContainer = document.querySelector(".container");

async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        // const facts = data.all;

        apiContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
            console.log(data[i].rating);

            if (i === 8) {
                break;
            }

            apiContainer.innerHTML += `<div class="result">${data[i].name}</div>`;
        }
    } catch (error) {
        console.log(error)
        console.log("An error occurred");
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getGames()

// const url = "https://cat-fact.herokuapp.com/facts";

// const apiContainer = document.querySelector(".container");

// async function getGames() {
//     try {
//         const response = await fetch(url);

//         const data = await response.json();

//         console.log(data);

//         // const facts = data.all;

//         apiContainer.innerHTML = "";

//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i].text);

//             if (i === 8) {
//                 break;
//             }

//             apiContainer.innerHTML += `<div class="result"><p>Name: ${data[i].text}</p>
//             <p>Rating: ${data[i].type}</p></div>`;
//         }
//         // apiContainer.innerHTML += "something";
//     } catch (error) {
//         console.log(error)
//         console.log("An error occurred");
//         apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
//     }

// }

// getGames()

// resultsContainer.innerHTML += `<div class="result">${data[i].text}</div>`;

// const urlb = "https://cat-fact.herokuapp.com/facts";

// const resultsContainer = document.querySelector(".results");

// async function getCats() {
//     try {
//         const response = await fetch(urlb);

//         const data = await response.json();

//         console.log(data);

//         // const facts = data.all;

//         resultsContainer.innerHTML = "";

//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i].text);

//             if (i === 10) {
//                 break;
//             }

//             resultsContainer.innerHTML += `<div class="result">${data[i].text}</div>`;
//         }
//     } catch (error) {
//         console.log(error);
//         resultsContainer.innerHTML = "An error occurred when calling the API";
//     }
// }

// getCats();