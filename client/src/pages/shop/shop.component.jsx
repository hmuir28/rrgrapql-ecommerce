import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

class ShopPage extends React.Component  {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>
    )
  }
};

const mapDispatchProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchProps)(ShopPage);
