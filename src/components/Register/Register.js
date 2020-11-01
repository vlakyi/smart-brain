import React from 'react';
import Modal from '../Modal/Modal';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            isModalOpen: false
        }
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        const {email, password, name} = this.state;
        if(email === '' || password === '' || name === '' || !email.includes('@') || !email.includes('.')) {
            this.setState({ isModalOpen: true});
            return;
        }
        
        fetch('https://secure-bastion-14247.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.history.push('/smartbrain/home');
                }
                else {
                    this.setState({isModalOpen: true});
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({isModalOpen: true});
            })
    }

    closeModal = () => {
        this.setState({isModalOpen: false});
    }

    render() {
        return (
            <React.Fragment>
                <Modal headerText='Wrong Credentials' mainText="Please, check your credentials and try again!" buttonText="Try Again" isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
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
                                        onChange={this.onNameChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6 tl" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
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
                                        onChange={this.onPasswordChange}
                                        required
                                    />
                                </div>
                            </fieldset>
                            <div className="flex">
                                <input
                                    onClick={this.onSubmitSignIn}
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
}

export default Register;