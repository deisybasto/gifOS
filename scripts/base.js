async function getResultsFromUrl(urlToFetch, callbackSuccess, callbackDestiny) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const results = await fetch(urlToFetch, requestOptions)
    .then(response => { return response.json() })
    .then(json => { callbackSuccess(json, callbackDestiny) })
    .catch(handleError);
};

const handleError = (error) => {
    console.log(error);
}