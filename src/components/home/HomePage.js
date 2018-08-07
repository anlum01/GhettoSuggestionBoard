import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {Link, withRouter} from 'react-router';
import { connect} from 'react-redux';
import { Col, Row, Button, Label, Alert } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';

import * as userActions from '../../actions/userActions';
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

    const {
      history
    } = this.props;

    auth.signInWithEmailAndPassword(email, password).then(
      authUser => {
        history.push("/board");
      }
    ).catch(
      error => {
        this.console.log(error);
      }
    );


  }

  createAlert() {
      return(
          <Alert color="danger">
            Login failed. Email or password incorrect.
          </Alert>
      );
  }

  render() {
    return (
    <div>
      <div></div>
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
    </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};


export default withRouter(connect(mapDispatchToProps)(HomePage));
