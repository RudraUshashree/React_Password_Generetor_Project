import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userText} = useParams();
  return (
    <div>Users: {userText}</div>
  )
}

export default Users