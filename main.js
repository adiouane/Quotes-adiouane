// script random quote
const button = document.getElementById("newqoute");
button.addEventListener("click", getRandomQuote);

async function getRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        console.log(data);
        document.getElementById("quote").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
    } catch (error) {
      console.log(error);
    }
  }
  getRandomQuote();
  

  // loader

// Show the loading spinner
const boton = document.getElementById("newqoute");
boton.addEventListener("click", showLoader);


function showLoader() {
  document.getElementById("loader-container").style.display = "flex";
  setTimeout(hideLoader, 900);
}

// Hide the loading spinner
function hideLoader() {
  document.getElementById("loader-container").style.display = "none";
}

// Show the loading spinner
showLoader();
  
  
