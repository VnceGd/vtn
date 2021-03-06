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

  return(
    <div>
      <div className={`${layoutStyles.navDropdown} ${isDropped ? layoutStyles.isDropped : ''}`} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faCaretDown}/>
      </div>
      <div className={`${layoutStyles.navDefault} ${isDropped ? layoutStyles.isDropped : ''}`}>
      <ul>
        <Link href="/#top">
          <a><li>Home</li></a>
        </Link>
        <Link href="/#projects">
          <a><li>Projects</li></a>
        </Link>
        <Link href="/#about">
          <a><li>About</li></a>
        </Link>
        <Link href="/#contact">
          <a><li>Contact</li></a>
        </Link>
      </ul>
    </div>
  </div>
  )
}