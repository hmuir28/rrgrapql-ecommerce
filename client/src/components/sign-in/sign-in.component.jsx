import React from "react";
import { connect } from "react-redux";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Iniciar sesion con mi correo y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="correo electrónico" handleChange={this.handleChange} value={this.state.email} />
          <FormInput name="password" type="password" label="contraseña" handleChange={this.handleChange} value={this.state.password} />
          <div className="buttons">
            <CustomButton type="submit"> Iniciar Sesión </CustomButton>
            <CustomButton onClick={googleSignInStart} isGoogleSignIn> Iniciar Sesión con Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
