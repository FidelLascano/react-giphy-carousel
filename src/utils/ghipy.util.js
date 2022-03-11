export const giphy_key = '61FaaKh0HViXg62aPn4ODTtuL2q9qosR';
export const giphy_url_api = 'https://api.giphy.com/v1/gifs/search'
export const giphy_default_limit = 'limit=10'
export const giphy_fetch_base = `${giphy_url_api}?api_key=${giphy_key}&${giphy_default_limit}`

export const getGhipyImages = async (category) => 
{
    const giphy_fetch_base_find = `${giphy_fetch_base}&q=${decodeURI(category)}`;
    const fetchGhipy = await fetch(giphy_fetch_base_find);
    const {data:fetchGhipyJson}  = await fetchGhipy.json();
    const fetchGhipyJsonMap = fetchGhipyJson.map(dataJson=>({
        id: dataJson.id,
        shortImage:dataJson?.images?.fixed_width_small_still.url,
        largeImage:dataJson?.images?.downsized_large.url
    }));

    return fetchGhipyJsonMap;
}