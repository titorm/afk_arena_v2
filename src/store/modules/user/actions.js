import { SET_USER } from './constants';

// eslint-disable-next-line import/prefer-default-export
export function setUser(payload) {
    return {
        type: SET_USER,
        payload,
    };
}
