import Link from 'next/link'
import layoutStyles from './layout.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function NavDropdown() {
  const [isDropped, setIsDropped] = useState(false)

  const toggleDropdown = () => {
    setIsDropped(!isDropped)
  }

  return (
    <div>
      <div className={`${layoutStyles.navDropdown} ${isDropped ? layoutStyles.isDropped : ''}`} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faCaretDown}/>
      </div>
      <div className={`${layoutStyles.navDefault} ${isDropped ? layoutStyles.isDropped : ''}`}>
      <ul>
        <Link href="/#top">
          <li>Home</li>
        </Link>
        <Link href="/#projects">
          <li>Projects</li>
        </Link>
        <Link href="/#about">
          <li>About</li>
        </Link>
        <Link href="/#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </div>
  )
}