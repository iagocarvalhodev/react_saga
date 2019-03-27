import React from 'react';
import { connect } from 'react-redux';

const Footer=( {count} ) => (
  <h1> Voce tem {count}  itens </h1>
);

const mapStateToProps=state => ({
  count: state.favorites.length
})

export default connect(mapStateToProps)(Footer);