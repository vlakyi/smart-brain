import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Link, useHistory } from 'react-router-dom';
import { makePostUserRequest, onSuccess, onReject } from '../../utils/user.utils';

const Signin = ({ loadUser }) => {
    const history = useHistory();

    const [signInState, setSignInState] = useState({
        email: '',
        password: '',
        isModalOpen: false
    });

    const onEmailChange = (event) => {
        setSignInState({ ...signInState, email: event.target.value })
    }

    const onPasswordChange = (event) => {
        setSignInState({ ...signInState, password: event.target.value })
    }

    const onSubmitSignIn = async () => {
        const { email, password } = signInState;

        if ((email === '' && password === '') || !email.includes('@') || !email.includes('.')) {
            setSignInState({ ...signInState, isModalOpen: true });
        }

        const payload = { email, password };
        makePostUserRequest('https://secure-bastion-14247.herokuapp.com/signin', payload, (user) => onSuccess(user, loadUser, history), (error) => onReject(error, signInState, setSignInState));
    }

    const closeModal = () => {
        setSignInState({ ...signInState, isModalOpen: false });
    }

    return (
        <React.Fragment>
            <Modal headerText='Wrong Credentials' mainText="Please, check your credentials and try again!" buttonText="Try Again" isModalOpen={signInState.isModalOpen} closeModal={closeModal} />
            <article className="br3 ba b--blalck-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
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
                                <label className="db fw6 lh-copy f6 tl" htmlFor="password" >Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className='flex items-center justify-between'>
                            <input
                                onClick={onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                            />
                            <Link to='/smartbrain/register' className="f6 link dim black db pointer">Register</Link>
                        </div>
                    </div>
                </main>
            </article>
        </React.Fragment>
    );
}

export default Signin;