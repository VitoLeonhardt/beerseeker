const punkUrl = "https://api.punkapi.com/v2/beers";

// params: page, per_page, beer_name, brewed_before, brewed_after
const punkUrlWithParams = (params) => {
    if (!params || params === {}) return punkUrl;
    let actualUrl = punkUrl + "?";
    return actualUrl + new URLSearchParams(params);
}

export const getBeers = async (params) => {
    const response = await fetch(punkUrlWithParams(params));
    return await response.json();
}