import React from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, siginInWithGoogle } from '../../firebase/firebase.utils';

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
    
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Iniciar sesion con mi correo y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" label="correo electrónico" handleChange={this.handleChange} value={this.state.email}  required />
          <FormInput name="password" type="password" label="contraseña" handleChange={this.handleChange} value={this.state.password} required />
          <div className="buttons">
            <CustomButton type="submit"> Iniciar Sesión </CustomButton>
            <CustomButton onClick={siginInWithGoogle} isGoogleSignIn> Iniciar Sesión con Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
