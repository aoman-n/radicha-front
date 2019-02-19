import React from 'react';
import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { Redirect } from 'react-router-dom';
import { showModal, hideModal } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      username: state.app.username,
    }),
    {
      showModal,
      hideModal,
    },
  ),
  pure,
);

export default enhancer(({ username, showModal, hideModal, children }) => (
  <React.Fragment>
    {username ? children : <Redirect to="/login" />}
  </React.Fragment>
));
