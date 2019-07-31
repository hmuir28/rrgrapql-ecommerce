import React from "react";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { siginInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;
    
    // INFO: [name] allows to bind elements by json attribute name
    this.setState ( { [name]: value } );
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
