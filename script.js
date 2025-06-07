async function getRandomGif() {
    const apiKey = 'Usx35ZNvkiFppl8mae3JyLLEkGGqE0pi';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    try {   
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('gif').src = data.data.images.original.url;
    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
}

