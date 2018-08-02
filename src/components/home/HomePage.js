import React from 'react';
import {Link, withRouter} from 'react-router';
import { Col, Row, Button, Label } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';
import { auth } from '../../firebase/firebase';

import './HomePage.css';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  onSubmit(fields) {
    const {
      email,
      password
    } = fields;

    auth.signInWithEmailAndPassword(email, password).then(
      authUser => {
      }

    )
    .catch(
      error => {
        this.console.log(error);
      }
    );

    this.props.history.push("board");

  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container justify-content-center">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <h1>Ghetto Suggestion Board</h1>
              <p>The trip planning app for those who truly have trouble compromising.</p>
              <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>

            <div className="col-12 col-sm-6" id="login-box">

              <LocalForm onSubmit={(fields) => this.onSubmit(fields)}>
                <Row className="form-group">
                  <Label className="col-sm-2 col-form-label" htmlFor="email">Email</Label>
                  <Control.text className="form-control" model=".email" type="email" name="email" placeholder="Email" />
                </Row>
                <Row className="form-group">
                  <Label className="col-sm-2 col-form-label" htmlFor="password">Password</Label>
                  <Control.text className="form-control" model=".password" type="password" name="password" placeholder="Password" />
                </Row>
                <Row className="form-group justify-content-end">
                  <div className="col-6 col-sm-5">
                    <Link to="signup" id="singupBtn" className="btn btn-primary btn-medium">Signup</Link>
                  </div>
                  <div className="col-6 offset-sm-2 col-sm-5">
                    <Button id="loginBtn" className="btn btn-primary btn-medium" type="submit">Login</Button>
                  </div>
                </Row>

            </LocalForm>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
