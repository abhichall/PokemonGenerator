function fetchPoke() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    // Fetch the Pokémon data
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {         
            if (!response.ok) {
                throw new Error("Could not be found");
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => { 
            // Extract the Pokémon sprite URL
            const pokemonSprite = data.sprites.front_default;

            // Get the img element and update its attributes
            const imgElement = document.getElementById("pokemonSprite");
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        })
        .catch(error => console.error(error)); // Handle any errors
}
