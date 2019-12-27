import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const {
        title,
        description,
        onClick,
        ...props
      } = this.props;

    return (
      <div className="ToDoListItem"　{...props}>
        <button className="ToDoListItem-close" onClick={onClick}>X</button>
        <div className="ToDoListItem-title">{title}</div>
        <div className="ToDoListItem-description">{description}</div>
      </div>
    );
  }
}

export default ToDoListItem;