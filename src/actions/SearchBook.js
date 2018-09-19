export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const APIKEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
let input = 'flowers';
const apiurl = `https://www.googleapis.com/books/v1/volumes?q=${input}&printType=books&key=${APIKEY}`

export const fetchBooksBegin = () => ({
    type: FETCH_BOOKS_BEGIN
});

export const fetchBooksSuccess = books => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: { books }
});

export const fetchBooksFailure = error => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { error }
});

export function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksBegin());
        return fetch(apiurl)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchBooksSuccess(json.products));
                return json.products;
            })
            .catch(error => dispatch(fetchBooksFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}