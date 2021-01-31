import React from 'react';
import styles from './Bio.module.css';
import bioPic from './me.png';

function Bio(props) {
	return (
		<div
			className={`
      ${styles.Bio}
      ${props.className || ''}
    `}
		>
			<img src={bioPic} alt="Jishaal Kalyan" />
			<p>
				<a href="https://twitter.com/jishaal/">Jishaal Kalyan</a> is a Frontend Engineer Lead at{' '}
				<a href="https://parrotanalytics.com/">Parrot Analytics</a>.
				<br />
				He has a passion for using technology to create delightful experiences for people.
			</p>
		</div>
	);
}

export default Bio;
