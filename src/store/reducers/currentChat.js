import {CURRENT_CHAT} from '../actions/currentChat'

function currentChat(state = '', action) {
    switch(action.type) {
        case CURRENT_CHAT:

			return action.currentChat;
        
        default: return state;
    }
}

export default currentChat;