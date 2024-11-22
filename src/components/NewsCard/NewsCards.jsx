import React, { useState } from 'react';
import styles from './NewsCard.module.css';

const NewsCards = ({ date, title, description, source, image, isSignedIn }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSaveClick = () => {
    if (!isSignedIn) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
    }
    // You can add logic here for saving the article when signed in
  };

  return (
    <article className={styles.card}>
      <button className={styles.save} onClick={handleSaveClick}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>

      {showNotification && (
        <div className={styles.notification}>
          <p>Sign in to save articles</p>
        </div>
      )}

      <img src={image} alt={title} className={styles.cardImage} />
      
      <div className={styles.cardContent}>
        <time className={styles.date}>{new Date(date).toLocaleDateString()}</time>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <span className={styles.source}>{source.name}</span>
      </div>
    </article>
  );
};

export default NewsCards;
