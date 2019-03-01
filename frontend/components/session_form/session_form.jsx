import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  renderErrors () {
    const listErrors = this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ));
    return (
      <ul>
        {listErrors}
      </ul>
    )
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    }
  } 

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
  }

  render() {
    let nameField;
    if (this.props.formType === 'Sign Up') {
      nameField = (
        <>
          <label> Your name
            <br />
            <input type="text" value={this.state.name} onChange={this.update('name')} />
          </label>
          <br />
        </>
      )
    } else {
      nameField = <></>
    }

    return (
      <>
        {this.props.header}
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit()}>
          {nameField}
          <label> Your email
            <br />
            <input type="text" value={this.state.email} onChange={this.update('email')} />
          </label>
          <br />
          <label> Your password
          <br />
            <input type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br />
          <input type="submit" value={this.props.formType} />
        </form>
        {this.props.link}
      </> 
    )
  }
}

export default SessionForm;