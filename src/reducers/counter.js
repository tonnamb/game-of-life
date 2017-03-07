import * as types from '../actions/types';

const counter = (state = 0, action) => {
    switch (action.type) {
        case types.PROPAGATE:
            return state+1;
        case types.CLEAR_BOARD:
            return 0;
        case types.RANDOMIZE:
            return 0;
        case types.CREATE_BLINKER:
            return 0;
        case types.CREATE_GLIDER:
            return 0;
        case types.CREATE_GOSPER:
            return 0;
        default:
            return state;
    }
}

export default counter;