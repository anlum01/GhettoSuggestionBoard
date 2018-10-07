import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Control, Errors, LocalForm } from 'react-redux-form';

import { auth } from '../../firebase/firebase';
import firebase from 'firebase';
import './RegisterPage.css';

const required = (field) => field && field.length;
const password = (field) => field === this.state.password;

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(fields) {

    const {
      email,
      password,
      firstname,
      lastname
    } = fields;

    const {
      history
    } = this.props;

    const err = null;

    auth.createUserWithEmailAndPassword(email, password).then(
      (authUser) => {
        //create token and put in local store for session purposes
        authUser = auth.currentUser;
        //history.push("board");
        let userRef = firebase.database().ref(`/Users/${authUser.uid}`);

        const userInfo = {
          email: email,
          firstname: firstname,
          lastname: lastname
        };

        userRef.set(userInfo);

        history.push("board");
      }, (error) => this.err = error
    ).catch( (error) => this.err = error );

  }

  render() {

    return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6">
            <LocalForm onSubmit={(fields) => this.onSubmit(fields)}>
              <Row className="form-group">
                <Control.text className="form-control" model=".email" type="email" placeholder="Enter Email" name="email"
                  validators={{
                    required
                  }} />
                <Errors className="text-danger" model=".email" show="touched"
                  messages={{
                    required: 'Required'
                  }} />
              </Row>
              <Row className="form-group">
                <Control.text className="form-control" model=".firstname" type="text" placeholder="First Name" name="firstname"
                  validators={{
                    required
                  }} />
                <Errors className="text-danger" model=".firstname" show="touched"
                    messages={{
                      required: 'Required'
                 }} />
              </Row>
              <Row className="form-group">
                <Control.text className="form-control" model=".lastname" type="text" placeholder="Last Name" name="lastname"
                  validators={{
                    required
                  }} />
                <Errors className="text-danger" model=".lastname" show="touched"
                    messages={{
                      required: 'Required'
                    }} />
              </Row>
              <Row className="form-group">
                <Control.input className="form-control" model=".password" type="password" placeholder="Enter Password" name="password"
                  validators={{
                    required
                  }} />
                <Errors className="text-danger" model=".password" show="touched"
                    messages={{
                      required: 'Required'
                    }} />
              </Row>
              <Row className="form-group">
                <Control.input className="form-control" model=".repeatPassword" type="password" placeholder="Repeat Password" name="repeatPassword"
                  validators={{
                    required
                  }} />
                <Errors className="text-danger" model=".repeatPassword" show="touched"
                    messages={{
                      required: 'Required'
                  }} />
              </Row>
              <Row className="form-group">
                <Button id="signupCfrm" className="btn btn-primary" type="submit">Confirm</Button>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};

RegisterPage.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(RegisterPage);
