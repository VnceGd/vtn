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
          <li>
            <Link href="/#top">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
      </ul>
    </div>
  </div>
  )
}