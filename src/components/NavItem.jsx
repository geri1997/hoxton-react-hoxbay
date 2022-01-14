import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({url, title}) => {
    return (
        <li>
            <Link to={url}>{title}</Link>
            
          </li>
    )
}

export default NavItem
