async function fetchInfo() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    //Get information from input, put it in lower case and search information in API.

    if (!response.ok) {
      //If the entered information does not exist in the API.
      const pokemonImage = document.getElementById("pokemonSprite");
      pokemonImage.style.display = "none"; //Do not display any image.

      const errorMessage = document.getElementById("missingPokemon");
      errorMessage.style.display = "flex"; //Show error message.

      throw new Error("Could not fetch resource");
    } else {
      //If the entered information exists.
      const errorMessage = document.getElementById("missingPokemon");
      errorMessage.style.display = "none"; //Hide error message

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const pokemonImage = document.getElementById("pokemonSprite");
      //Get data from API.

      pokemonImage.src = pokemonSprite;
      pokemonImage.style.display = "block";
      //Display Found information.
    }
  } catch (error) {
    console.error(error);
  }
}
