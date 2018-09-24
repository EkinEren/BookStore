export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const APIKEY = process.env.REACT_APP_BOOKS_API_KEY;
const apiurl = `https://www.googleapis.com/books/v1/volumes?printType=books&filter=paid-ebooks&key=${APIKEY}`

//request
export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_BEGIN
});

export const fetchBooksSuccess = (payload) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload
});

export const fetchBooksFailure = () => ({
    type: FETCH_BOOKS_FAILURE
});


//Fetch url & dispatch
export function fetchBooksWithRedux(input) {
    return (dispatch) => {
        dispatch(fetchBooksRequest());
        return fetchBooks(input).then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchBooksSuccess(json))
            }
            else {
                dispatch(fetchBooksFailure())
            }
        })
    }
}

function fetchBooks(input) {
    let url = `${apiurl}&q=${input}`
    return fetch(url, { method: 'GET' })
        .then(response => Promise.all([response, response.json()]));
}