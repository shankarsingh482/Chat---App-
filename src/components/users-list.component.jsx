import React from 'react'
import PropTypes from 'prop-types'

/**
 *  Users List
 */
const UsersList = ({ users }) => (
  <ul className="users-list">
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
)

/**
 *  Define Users List Prop Types
 */
UsersList.propTypes = {
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
