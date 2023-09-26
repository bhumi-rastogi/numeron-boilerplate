// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
// Get a reference to the play button element
const play = document.getElementById("play-button");
//Add a click event listerner to the play button.
play.onclick = () => {
    // Define the url of the page you want to navigate to
    location.href ="./game.html";
};
