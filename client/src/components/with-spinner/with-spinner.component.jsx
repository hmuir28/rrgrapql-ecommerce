import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedContainer => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  ) : (
    <WrappedContainer {...otherProps} />
  )
};

export default WithSpinner;
