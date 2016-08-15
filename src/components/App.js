import React,{PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <div clssName="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes={
  children:PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};

function mapStateToProps(state,ownProps){
  return{
    loading:state.numAjaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
