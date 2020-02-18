import React from 'react'
import Nav from './nav'
import styles from './layout.module.css'

const Layout = props => {
  return (
    <div id="layout_root" className={styles.root}>
      <Nav></Nav>
      {props.children}
    </div>
  )
}

export default Layout
