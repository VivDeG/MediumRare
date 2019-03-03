import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  loggedIn: state.session.id,
  formType: 'Log In',
  header: <h2 className="session-header">Welcome back.</h2>,
  footer: <p>No account?</p>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button className="other-form-button" onClick={() => dispatch(openModal('Sign Up'))}>
      Sign up
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);