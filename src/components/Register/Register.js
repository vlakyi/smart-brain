import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal';

import {makePostUserRequest, onSuccess, onReject} from '../../utils/user.utils';

const Register = ({ loadUser }) => {
    const history = useHistory();

    const [registerState, setRegisterState] = useState({
        email: '',
        password: '',
        name: '',
        isModalOpen: false
    });

    const onNameChange = (event) => {
        setRegisterState({ ...registerState, name: event.target.value })
    }

    const onEmailChange = (event) => {
        setRegisterState({ ...registerState, email: event.target.value })
    }

    const onPasswordChange = (event) => {
        setRegisterState({ ...registerState, password: event.target.value })
    }

    const onSubmitSignIn = async () => {
        const { email, password, name } = registerState;
        if (email === '' || password === '' || name === '' || !email.includes('@') || !email.includes('.')) {
            setRegisterState({ ...registerState, isModalOpen: true });
            return;
        }

        const payload = {email, password, name};
        makePostUserRequest('https://secure-bastion-14247.herokuapp.com/register', payload, (user) => onSuccess(user, loadUser, history), (error) => onReject(error, registerState, setRegisterState));
    }

    const closeModal = () => {
        setRegisterState({ ...registerState, isModalOpen: false });
    }

    return (
        <React.Fragment>
            <Modal headerText='Wrong Credentials' mainText="Please, check your credentials and try again!" buttonText="Try Again" isModalOpen={registerState.isModalOpen} closeModal={closeModal} />
            <article className="br3 ba b--blalck-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 tl" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 tl" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 tl" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter,
                        and at least 8 or more characters"
                                    onChange={onPasswordChange}
                                    required
                                />
                            </div>
                        </fieldset>
                        <div className="flex">
                            <input
                                onClick={onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </div>
                </main>
            </article>
        </React.Fragment>
    );
}

export default Register;