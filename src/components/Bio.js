import React from 'react'
import styles from './Bio.module.css'
import bioPic from './me.png'

function Bio(props) {
  return (
      <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
        <img src={bioPic} alt="Jishaal Kalyan"/>
        <p>
          <a href="https://twitter.com/jishaal/">Jishaal Kalyan</a> is a Senior Frontend Developer at <a
            href="https://xero.com/">Xero</a>.
          <br/>
          He has a passion for using technology to create delightful experiences for people.
          <br/>
          <br/>
          <span role="img" aria-label="pin-icon">📍</span>Auckland, New Zealand
        </p>
      </div>
  )
}

export default Bio
