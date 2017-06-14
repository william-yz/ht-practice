import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './AppAction';
import ToDoListInput from './ToDoListInput';

class ToDoList extends Component {
  render() {
    return (
      <div className="ToDoList">
        <div>
          <label>ToDoList<input type="text" onKeyPress={(e)=>{
            if(e.key === 'Enter' && e.target.value !== ''){
              this.props.actions.handleKeyDown(e);
            }
          }} /></label>
        </div>
        <div>
          <p>正在进行</p>
          <ul>
            {this.props.allData.map((individual, index) => {
              if(!individual.state){
                return <ToDoListInput allData={individual.text} state={individual.state} key={index} index={index} changeList={this.props.actions.changeList}/>
              }
            })}
          </ul>
        </div>
        <div>
          <p>已经完成</p>
          <ul>
            {this.props.allData.map((individual, index) => {
              if(individual.state){
                return <ToDoListInput allData={individual.text} state={individual.state} key={index} index={index} changeList={this.props.actions.changeList}/>
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    allData: state.allData
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);