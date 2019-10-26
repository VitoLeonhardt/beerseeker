const punkUrl = "https://api.punkapi.com/v2/beers";

export const getBeers = async () => {
    const response = await fetch(punkUrl);
    return await response.json();
}