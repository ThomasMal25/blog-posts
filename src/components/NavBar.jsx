import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/posts">New Posts</Link>

    <Link to="/aurthor">Aurthor</Link>
</div>
  
  )
}

export default NavBar