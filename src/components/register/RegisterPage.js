import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { auth } from '../../firebase/firebase';
import './RegisterPage.css';

const byPropKeys = (propertyName, value) => ({
  [propertyName]: value
});

const required = (field) => field && field.length;

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(event) {

    const {
      email,
      password
    } = this.state;

    auth.createUserWithEmailAndPassword(email, password).then(
      authUser => {}
    )
    .catch( error => this.setState({error}));

  }


  render() {

    return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6">
            <LocalForm onSubmit={(values) => this.onSubmit(values)}>
              <Row className="form-group">
                <Control.text className="form-control" model=".email" type="email" placeholder="Enter Email"
                  validators={{
                    required
                  }} />
                <Errors className="text-danger" model=".email" show="touched"
                  messages={{
                    required: 'Required'
                  }} />
              </Row>
              <Row className="form-group">
                <Control.text className="form-control" model=".firstname" type="text" placeholder="First Name"
                  validators={{
                    required: 'Required'
                  }} />
                <Errors className="text-danger" model=".email" show="touched"
                    messages={{
                      required: 'Required'
                 }} />
              </Row>
              <Row className="form-group">
                <Control.text className="form-control" model=".lastname" type="text" placeholder="Last Name"
                  validators={{
                    required: 'Required'
                  }} />
                  <Errors className="text-danger" model=".email" show="touched"
                    messages={{
                      required: 'Required'
                    }} />
              </Row>
              <Row className="form-group">
                <Control.text className="form-control" model=".password" type="password" placeholder="Enter Password"
                  validators={{
                    required: 'Required'
                  }} />
                  <Errors className="text-danger" model=".email" show="touched"
                    messages={{
                      required: 'Required'
                    }} />
              </Row>
              <Row className="form-group">
                <Control.text className="form-control" model=".repeatPassword" type="password" placeholder="Repeat Password"
                  validators={{
                    required: 'Required'
                  }} />
                <Errors className="text-danger" model=".email" show="touched"
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

export default RegisterPage;
