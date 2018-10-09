import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './components/App';
import HomePage from './components/home/HomePage';
import RegisterPage from './components/register/RegisterPage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import Board from './components/board/Board';

import PlaceholderComponent from './components/placeholder/PlaceholderComponent';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={RegisterPage} />
    <Route path="/courses" component={CoursesPage} />
    <Route exact path="/course" component={ManageCoursePage} />
    <Route path="/course/:id" component={ManageCoursePage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);
