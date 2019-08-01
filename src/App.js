import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {

  return (
    <div className="App">
      <h4>Now the number is: {this.props.number}</h4>
      <button onClick={this.props.multipleOfTen}>Multiple of Ten</button>
      <button onClick={this.props.multipleOfHundred}>Multiple of Hundred</button>
    </div>
  );
}
}

const mapStateToProps = state => {
  return{
    number:state.number
  };
};

const mapDispatchToProps = dispatch => {
  return{
    multipleOfTen:() => dispatch({type:"MULTIPLE_OF_10", value:10}),
    multipleOfHundred:() => dispatch({type:"MULTIPLE_OF_100", value:100})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);