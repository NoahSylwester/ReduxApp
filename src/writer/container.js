import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    written: state.write
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleWriteChange: (event) => dispatch({ type: 'WRITE', value: event.target.value }),
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);