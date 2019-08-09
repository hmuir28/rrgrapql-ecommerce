import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = 'pk_test_4uv0GvdjMkvN02GrISKLtJXt006o3ka3r7';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Successfully');
    })
    .catch(error => {
      alert('Error');
    });
  }

  return (
    <StripeCheckout
      label='Pagar Ahora'
      name='RRGraphQL S.A'
      billingAddress
      shippingAddress
      description={`Su total es $${price}`}
      amount={priceForStripe}
      panelLabel='Pagar Ahora'
      token={onToken}
      stripeKey={publishedKey}
    />
  )
};

export default StripeCheckoutButton;
