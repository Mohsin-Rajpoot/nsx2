import React from 'react';
import styles from './SavedNewsPage.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

export default function SavedNewsPage() {
  const articles = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf424e5694ab4f760fb8de20f02897dcc0852d4593a071f43e5d8758f32f38bb?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b",
      keyword: "Nature",
      date: "November 4, 2020",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      description: "Ever since I read Richard Louv's influential book, \"Last Child in the Woods,\" the idea of having a special \"sit spot\" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
      source: "treehugger",
      deleteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd79262cc850af097f0067408e25512b8db686a3af0833eec19ee212699a59d7?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf424e5694ab4f760fb8de20f02897dcc0852d4593a071f43e5d8758f32f38bb?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b",
      keyword: "Nature",
      date: "February 19, 2019",
      title: "Nature makes you better",
      description: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
      source: "national geographic",
      deleteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd79262cc850af097f0067408e25512b8db686a3af0833eec19ee212699a59d7?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf424e5694ab4f760fb8de20f02897dcc0852d4593a071f43e5d8758f32f38bb?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b",
      keyword: "Yellowstone",
      date: "October 19, 2020",
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      description: "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
      source: "national geographic",
      deleteIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd79262cc850af097f0067408e25512b8db686a3af0833eec19ee212699a59d7?placeholderIfAbsent=true&apiKey=7363b875f3184f43be2615892aabff5b"
    }
  ];

  return (
    <div className={styles.savedNewsContainer}>
      <NavBar/>
      
      <section className={styles.userStats}>

        <span className={styles.statsLabel}>Saved articles</span>
        <h2 className={styles.statsTitle}>
          Elise, you have 5 saved articles
        </h2>
        <p className={styles.keywordStats}>
          By keywords:{' '}
          <strong>
            Nature, Yellowstone, and 2 other
          </strong>
        </p>
      </section>
      <main className={styles.articleGrid}>
        {articles.map((article, index) => (
          <article key={index} className={styles.articleCard}>
            <div 
              className={styles.cardImage} 
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.keyword}>{article.keyword}</span>
                <button 
                  className={styles.deleteButton}
                  aria-label="Delete article"
                >
                  <img 
                    src={article.deleteIcon} 
                    alt="" 
                    className={styles.deleteIcon}
                  />
                </button>
              </div>
            </div>
            <div className={styles.cardContent}>
              <time className={styles.date}>{article.date}</time>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleDescription}>{article.description}</p>
              <span className={styles.source}>{article.source}</span>
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}