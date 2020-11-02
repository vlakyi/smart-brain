import 'node-fetch';
import { fetchData } from './app.utils';

export const makePostUserRequest = async (url, payload, onSuccess, onReject) => {
    try {
        const user = await fetchData(url, payload, 'post');
        if (user.id)
            onSuccess(user);
        else
            onReject('no user id was returned');

    } catch (error) {
        console.log(error);
        onReject(error);
    }
}

export const onSuccess = (user, loadUser, history) => {
    loadUser(user);
    localStorage.setItem('smartbrain_user', JSON.stringify(user));
    history.push('/smartbrain/home');
}

export const onReject = (error, state, setState) => {
    console.log(error);
    setState({ ...state, isModalOpen: true });
}