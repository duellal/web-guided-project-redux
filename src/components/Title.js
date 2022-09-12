import React from 'react';

import { connect } from 'react-redux';

import { toggleEditing, updateTitle } from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  //from mapStateToProps:
  //Gives access to initial state within the component
  console.log('Props:', props)

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ?
          <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing} /> :
          <TitleForm handleTitleUpdate={handleTitleUpdate} />
      }
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    title: state.title,
    editing: state.editing
  })
}

export default connect(mapStateToProps)(Title);