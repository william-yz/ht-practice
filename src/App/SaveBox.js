import React, { Component } from 'react';

export default ( ({hideBox}) => {
    return (
        <div className = "saveBox">
            <p>保存成功</p>
            <button onClick = { () => { hideBox() }} >确定</button>
        </div>
    )
})