const button = document.getElementById('btn');
const jokeContent = document.getElementById('Question');
const punchLine = document.getElementById('Answer');

button.onclick = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke').then(function(response) {
        button.textContent = "Next";
        jokeContent.textContent = response.data.setup;
        punchLine.textContent = "";  // Clear previous punchline
        setTimeout(function() {
            punchLine.textContent = response.data.punchline;  // Display new punchline
        }, 3000);
    })
    .catch(function(error) {
        console.log(error);
    });
};
