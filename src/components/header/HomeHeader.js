import React, { Component } from 'react';
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
      <div></div>
    );
  }

}

export default HomeHeader;
