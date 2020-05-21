import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    drawn: state.draw
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDrawChange: (drawnPixels) => dispatch({ type: 'DRAW', value: drawnPixels }),
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);