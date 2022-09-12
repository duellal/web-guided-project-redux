import React from 'react';
import DragonMember from './DragonMember';
import { addMember } from '../actions/dragonActions';

import { connect } from 'react-redux'

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = (e) => {
    this.props.addMember(this.state.newMember)
  }

  render() {
    //Checking to make sure you have access to props:
    console.log('Props:', this.props)

    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member} />
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Dragon State:', state)
  return ({
    members: state.dragon.members
  })
}

export default connect(mapStateToProps, { addMember })(DragonList)
