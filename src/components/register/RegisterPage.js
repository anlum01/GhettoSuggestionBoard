import React from 'react';
import { auth } from '../../firebase/firebase';
import { Link, browserHistory } from 'react-router';
import './RegisterPage.css';

const byPropKeys = (propertyName, value) => ({
  [propertyName]: value
});


class RegisterPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      error: null
    };

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(event) {

    event.preventDefault();

    const {
      email,
      password
    } = this.state;

    auth.createUserWithEmailAndPassword(email, password).then(
      authUser => {}
    )
    .catch( error => this.setState({error}));

  }

  handleGoHome(){
    browserHistory.push('/home');
  }


  render() {

    const {
      email,
      firstName,
      lastName,
      password,
      repeatPassword
    } = this.state;

    return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6">
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <input className="form-control" type="email" placeholder="Enter Email"
                  value={email} onChange={e => this.setState(byPropKeys('email', e.target.value))} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="text" placeholder="First Name"
                  value={firstName} onChange={e => this.setState(byPropKeys('firstName', e.target.value))} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="text" placeholder="Last Name"
                  value={lastName} onChange={e => this.setState(byPropKeys('lastName', e.target.value))} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="password" placeholder="Enter Password"
                  value={password} onChange={e => this.setState(byPropKeys('password', e.target.value))} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="password" placeholder="Repeat Password"
                  value={repeatPassword} onChange={e => this.setState(byPropKeys('repeatPassword', e.target.value))}/>
              </div>
              <div className="form-group row">
                <button id="signupCfrm" className="btn btn-primary" type="submit">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="snackbar">Registration Success</div>
    </div>
    );
  }
}

export default RegisterPage;
