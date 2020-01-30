import {REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED} from './actions';

export const initialState = {

};

// a reducer receives the current state, and an action
export const reducer = (state: any, action: any) => {
    // we check the type of each action and return an updated state object accordingly
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                isLoading: true,
            };
        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.data,
            };
        case REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };

        default:
            return state;
    }
};