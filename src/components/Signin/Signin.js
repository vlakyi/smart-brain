import React from 'react';
import Modal from '../Modal/Modal';
import {Link} from 'react-router-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            isModalOpen: false
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = async () => {
        const { signInEmail, signInPassword } = this.state;
        const {loadUser, history} = this.props;

        if ((signInEmail === '' && signInPassword === '') || !signInEmail.includes('@') || !signInEmail.includes('.')) {
            this.setState({ isModalOpen: true });
        }

        try {
            const response = await fetch('https://secure-bastion-14247.herokuapp.com/signin', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: signInEmail,
                    password: signInPassword
                })
            })

            const user = await response.json();
            if(user.id) {
                loadUser(user);
                history.push('/home');
            }
            else {
                this.setState({isModalOpen: true});
            }
        } catch (error) {
            console.log(error);
            this.setState({isModalOpen: true});
        }
    }

    closeModal = () => {
        this.setState({ isModalOpen: false});
    }

    render() {
        return (
            <div>
                <Modal headerText='Wrong Credentials' mainText="Please, check your credentials and try again!" buttonText="Try Again" isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
                <article className="br3 ba b--blalck-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange
                                        } />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password" >Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Sign in"
                                />
                            </div>
                            <div className="lh-copy mt3">
                                <Link to='/register' className="f6 link dim black db pointer">Register</Link>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default Signin;