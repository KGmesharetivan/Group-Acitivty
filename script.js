// Async function to get a random joke
async function getRandomJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data.joke;
  } catch (error) {
    return "Failed to fetch joke";
  }
}

// Function to check if the number is odd or even and get a joke
function checkNumberAndFetchJoke() {
  const number = parseInt(document.getElementById("numberInput").value, 10);
  let result = "";
  if (isNaN(number)) {
    result = "Please enter a valid number.";
  } else {
    // Conditional (ternary) operator to check if the number is odd or even
    result = `The number is ${number % 2 === 0 ? "even" : "odd"}.`;
  }

  // Display the result
  document.getElementById("numberResult").innerText = result;

  // Fetch and display the joke
  getRandomJoke().then((joke) => {
    document.getElementById("jokeResult").innerText = joke;
  });
}
