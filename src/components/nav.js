import React, { useState } from 'react'
import style from './nav.module.css'

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header id="nav_root" className={style.header}>
      <div className={style.logo}>U.</div>
      <div className={style.ham} onClick={() => setToggle(!toggle)}>
        <button
          className={
            toggle
              ? 'hamburger hamburger--squeeze is-active'
              : 'hamburger hamburger--squeeze'
          }
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className={style.links}>
        <ul className={style.ul}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={[style.offmenu, toggle && style.open].join(' ')}>
        <aside className={style.aside}>
          <nav>
            <ul className={style.offul}>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  )
}

export default Nav
