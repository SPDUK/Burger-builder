import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import ReactAux from '../ReactAux/ReactAux';

const withErrorHandler = (WrappedComponent, axios) =>
  class ErrorHandler extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <ReactAux>
          <Modal closeModal={this.errorConfirmedHandler} show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </ReactAux>
      );
    }
  };

export default withErrorHandler;
