import React from 'react';
import { auth } from '../../firebase/firebase';
import './RegisterPage.css';

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

  }

  onSubmit(event) {
    const {
      email,
      password
    } = this.state;

    auth.createUserWithEmailAndPassword(email, password).then()
    .catch( error => this.setState({error}));

    event.preventDefault();
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
          <div className="col-sm-offset-3 col-sm-6">
            <form>
              <div className="form-group row" onSubmit={this.onSubmit}>
                <input className="form-control" type="email" placeholder="Enter Email"
                  value={email} onChange={this.setState({'email': event.target.value })} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="text" placeholder="First Name"
                  value={firstName} onChange={this.setState({'firstName': event.target.value})} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="text" placeholder="Last Name"
                  value={lastName} onChange={this.setState({'lastName': event.targert.value})} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="password" placeholder="Enter Password"
                  value={password} onChange={this.setState({'password': event.targert.value})} />
              </div>
              <div className="form-group row">
                <input className="form-control" type="password" placeholder="Repeat Password"
                  value={repeatPassword} onChange={this.setState({'repeatPassword': event.targert.value})}/>
              </div>
              <div className="form-group row">
                <div id="signupCfrm" className="btn btn-primary" type="submit">Confirm</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default RegisterPage;
