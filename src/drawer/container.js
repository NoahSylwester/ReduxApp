import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    drawn: state.draw
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDrawChange: (drawnPixel) => dispatch({ type: 'DRAW', value: drawnPixel }),
    handleClear: () => dispatch({ type: 'CLEAR' })
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);