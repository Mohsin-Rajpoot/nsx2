import React from 'react';
import styles from './Footer.module.css';


const Footer=() => {
  return (
    <div>
        <footer className={styles.footer}>
        <p className={styles.copyright}>© 2024 Supersite, Powered by News API</p>
        <nav className={styles.footerNav}>
          <a href="/" className={styles.footerLink}>Home</a>
          <a href="https://tripleten.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
  TripleTen
</a>
<a href="https://github.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff41db14458044e78769c798dd3b4504efc325feff5c83eb0235a04e2ece9a34?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b"
    alt="GitHub"
    className={styles.socialIcon}
  />
</a>
<a href="https://facebook.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2addbbb13c5ea872763785f32ba40333b498f5452d230efafbfb8791073651ab?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b"
    alt="Facebook"
    className={styles.socialIcon}
  />
</a>

        </nav>
      </footer>
    </div>
  )
}

export default Footer;