import React from 'react'
import { Link } from '@reach/router'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : ''
      }
    }}
  />
)

export default NavLink