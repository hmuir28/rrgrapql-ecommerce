import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import './header.styles.scss';

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
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
        (<div className="option" onClick={() => auth.signOut()}>Cerrar Sesión</div>)
        : (<Link className="option" to="/signin">Iniciar Sesión</Link>)
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
