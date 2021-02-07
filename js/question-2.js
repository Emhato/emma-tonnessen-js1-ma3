// Question 2


const url = "https://cat-fact.herokuapp.com/facts";

const apiContainer = document.querySelector(".container");

async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        // const facts = data.all;

        apiContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].text);

            if (i === 8) {
                break;
            }

            apiContainer.innerHTML += `<div class="result"><p>Name: ${data[i].text}</p>
            <p>Rating: ${data[i].type}</p></div>`;
        }

    } catch (error) {
        console.log(error)
        console.log("An error occurred");
        apiContainer.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getGames()

