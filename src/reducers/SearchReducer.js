import {
    FETCH_BOOKS_BEGIN,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from '../actions/SearchBook';

const initialState = {
    books: [],
    loading: false,
    error: null
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_BEGIN:
            return {
                ...state,
                loading: true
            };

        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: getBookData(action.payload)
            };

        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Error! Books couldn't be loaded.",
                books: []
            };

        default:
            return state;
    }
}

function getBookData(payload) {
    const { items } = payload;
    return items.map(item => (item))
}

export default searchReducer;