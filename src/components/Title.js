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
    props.toggleEditing();
  }

  const handleTitleUpdate = (title) => {
    props.updateTitle(title);
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
  console.log('Title:', state)
  return ({
    title: state.title.title,
    editing: state.title.editing,
    newThingInStateJustForTheComponent: (state.title.title + state.title.editing)
  })
}

const mapActionsToProps = {
  //don't need dispatch b/c this(mapActionsToProps) automatically wraps the below functions in dispatch
  toggleEditing,
  updateTitle
}

export default connect(mapStateToProps, mapActionsToProps)(Title);