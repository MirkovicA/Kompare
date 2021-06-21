import * as actions from '../const/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actions.CREATE:
            return [...state, action.payload];
        case actions.GET_ALL:
            return action.payload;
        case actions.DELETE:
            return state.filter((user) => user._id !== action.payload);
        default:
            return state;

    }
};