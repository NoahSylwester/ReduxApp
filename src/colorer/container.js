import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    color: `rgba(${state.color.red}, ${state.color.green}, ${state.color.blue}, ${state.color.opacity})`
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleRedSlide: (input) => dispatch({ type: 'RED', value: input }),
    handleGreenSlide: (input) => dispatch({ type: 'GREEN', value: input }),
    handleBlueSlide: (input) => dispatch({ type: 'BLUE', value: input }),
    handleOpacitySlide: (input) => dispatch({ type: 'OPACITY', value: input })
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);