import React from 'react'
import PropTypes from 'prop-types'

/**
 *  Users List
 */
const UsersList = ({ activeUser, users }) => (
  <ul className="users-list">
    {users.map(user => (
      <li key={user.id} className="user">
        {user.id === activeUser.id
          ? <strong>{user.name}</strong>
          : <span>{user.name}</span>
        }
      </li>
    ))}
  </ul>
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
