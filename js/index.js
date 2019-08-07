window.onload = function() {

    // Random number function
    function genRandomNum(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // Color array
    let colors = ["red", "green", "blue"];

    // Grab button from DOM by ID.
    let button = document.getElementById("sub-button");

    // Set paragraph backgrounds.
    let paragraphs = document.getElementsByTagName("p");
    paragraphs[0].style.backgroundColor = "red";
    paragraphs[1].style.backgroundColor = "green";
    paragraphs[2].style.backgroundColor = "blue";

    // Add an event listener to button.
    button.addEventListener("click", () => {
        paragraphs[0].style.backgroundColor = colors[genRandomNum(3)];
        paragraphs[1].style.backgroundColor = colors[genRandomNum(3)];
        paragraphs[2].style.backgroundColor = colors[genRandomNum(3)];
    });
}