import React from 'react';
import {Link} from 'react-router';

import './HomePage.css';

class HomePage extends React.Component {
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

              <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <input className="form-control" type="email" placeholder="Email" />
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Password</label>
                  <input className="form-control" type="password" placeholder="Password" />
                </div>
              </form>

              <div className="form-group row justify-content-end">
                <div className="col-6 col-sm-5">
                  <Link to="signup" id="singupBtn" className="btn btn-primary btn-medium">Signup</Link>
                </div>
                <div className="col-6 offset-sm-2 col-sm-5">
                  <div id="loginBtn" className="btn btn-primary btn-medium">Login</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
