import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  header: <h2>Join Medium.</h2>,
  link: <p>Already have an account? <Link to='/login'>Log in</Link></p>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);