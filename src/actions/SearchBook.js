export const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const APIKEY = process.env.REACT_APP_BOOKS_API_KEY;
const apiurl = `https://www.googleapis.com/books/v1/volumes?q=marktwain&printType=books&key=${APIKEY}`

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
export function fetchBooksWithRedux() {
    return (dispatch) => {
        dispatch(fetchBooksRequest());
        return fetchBooks().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchBooksSuccess(json))
            }
            else {
                dispatch(fetchBooksFailure())
            }
        })
    }
}

function fetchBooks() {
    return fetch(apiurl, { method: 'GET' })
        .then(response => Promise.all([response, response.json()]));
}