import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from '../actions/getNews'
import {STATUSES} from '../../utils/constants';

const initialState = {news: [], error: {status: false, message: ''}, status: 'idle'};

function newsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_NEWS_REQUEST: return {...state, error: {...state.error, status: false}, status: STATUSES.REQUEST};
		
		case GET_NEWS_SUCCESS: return {...state, newsList: action.news, status: STATUSES.SUCCESS};
		
		case GET_NEWS_FAILURE: return {...state, error: {...state.error, status: true, message: action.errorMessage}, status: STATUSES.FAILURE};
		
        default: return state;
    }
}

export default newsReducer;