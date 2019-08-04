import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import './header.styles.scss';

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        TIENDA
      </Link>
      <Link className="option" to="/shop">
        CONTACTO
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>Cerrar Sesión</div>
        :
        <Link className="option" to="/signin">Iniciar Sesión</Link>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);