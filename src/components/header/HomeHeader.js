import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import { auth } from '../../firebase/firebase';

class HomeHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: auth.currentUser
    };
  }

  render() {
    return(
      <div>
        <Navbar color="light">
          <NavbarBrand href="/board">Ghetto Suggestions Board</NavbarBrand>
        </Navbar>
      </div>
    );
  }

}

export default HomeHeader;
