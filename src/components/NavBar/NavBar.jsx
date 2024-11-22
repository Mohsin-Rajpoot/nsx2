import React,{useState} from 'react';
import styles from './NavBar.module.css';
import {Link, useLocation } from 'react-router-dom';
import SignIn from '../../Pages/SignIn/SignIn';

const NavBar=()=> {
  const location = useLocation(); 

  const isHome = location.pathname === "/";
    const [isPopupVisible, setPopupVisible] = useState(false);
  
    const handleSignInClick = () => {
      setPopupVisible(true);
    };
  
    const closePopup = () => {
      setPopupVisible(false);
    }
  return (
    <div>
        <nav className={styles.navigation}>
          <h1 className={styles.logo}>NewsExplorer</h1>
          <div className={styles.navLinks}>
          <Link
  to="/"
  className={`${styles.navLink} ${isHome ? styles.active : styles.inactive}`}
>
  Home
</Link>

<Link
  to="/saved-articles"
  className={`${styles.navLink} ${isHome ? styles.active : styles.inactive}`}
>
  Saved articles
</Link>

            
            <button   className={`${styles.signInButton} ${isHome ? styles.active : styles.inactive}`}
 onClick={handleSignInClick}>Sign in</button>
          </div>
        </nav>
      
           <div className={`${styles.popupOverlay} ${isPopupVisible ? styles.active : ''}`}>
        <div className={styles.popupContent}>
          <button className={styles.popupClose} onClick={closePopup}>X</button>
          <SignIn />
        </div>
      </div>
    
    </div>
  )
}

export default NavBar;