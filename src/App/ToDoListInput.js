import React, { Component } from 'react';

const ToDoListInput = ({changeList, state, allData,index}) => {
  return (
    <li><input type="checkbox" value={index} onChange={changeList} checked={state}/>{allData}</li>
  );
}
export default ToDoListInput;