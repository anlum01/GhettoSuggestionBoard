import React from 'react';

import './RegisterPage.css';

class RegisterPage extends React.Component {
  render() {
    return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6">
            <form>
              <div className="form-group row">
                <input className="form-control" type="email" placeholder="Enter Email" />
              </div>
              <div className="form-group row">
                <input className="form-control" type="text" placeholder="First Name" />
              </div>
              <div className="form-group row">
                <input className="form-control" type="text" placeholder="Last Name" />
              </div>
              <div className="form-group row">
                <input className="form-control" type="password" placeholder="Enter Password" />
              </div>
              <div className="form-group row">
                <input className="form-control" type="password" placeholder="Repeat Password" />
              </div>
            </form>
            <div className="form-group row">
              <div id="signupCfrm" className="btn btn-primary" type="submit">Confirm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default RegisterPage;
