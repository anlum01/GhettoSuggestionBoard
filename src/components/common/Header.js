import React, {PropTypes} from 'react';
import { NavLink, IndexLink } from 'react-router-dom';
//import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
};

//{loading && <LoadingDots interval={100} dots={20}/>}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
