import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import avatar from '../static/incognito.png'

/**
 *  Users List
 */
const UsersList = ({ activeUser, users }) => (
  <div className="users-list-wrapper">
    <h3>Active users</h3>
    <ul className="users-list">
      {users.map(user => (
        <li
          key={user.id}
          className={classNames('user', {
            'user--me': user.id === activeUser.id
          })}
        >
          <div className="user-avatar">
            <img alt="avatar" src={avatar} />
          </div>
          <div className="user-name">
            {user.name}
          </div>
          {user.id !== activeUser.id && user.typing && (
            <div className="user-typing pulsate">
              typing...
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
)

/**
 *  Define Users List Prop Types
 */
UsersList.propTypes = {
  activeUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

/**
 *  Export Users List
 */
export default UsersList
