import React, { useState, useEffect, useCallback } from 'react';
import { fetchNewsData, saveToLocalStorage, getFromLocalStorage } from '../../utils/ThirdPartyApi';
import NewsCard from '../../components/NewsCard/NewsCards';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './LandingPage.module.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import image from '../../Assets/Images/lpb.svg';
import image2 from '../../Assets/Images/image-03.svg';

const LandingPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("tesla");
  const [showCount, setShowCount] = useState(3);

  // Memoize the fetchNews function to prevent unnecessary re-renders
  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchNewsData(query);
      if (data.length > 0) {
        setNewsData(data);
        saveToLocalStorage('newsData', data); // Save data to localStorage
      } else {
        setError("Nothing found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [query]); // Dependency on query to re-fetch if query changes

  useEffect(() => {
    const storedData = getFromLocalStorage('newsData');
    if (storedData) {
      setNewsData(storedData);
      setLoading(false);
    } else {
      fetchNews();
    }
  }, [fetchNews]); // Add fetchNews to the dependency array to avoid warning

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setLoading(true);
    setNewsData([]);
    setShowCount(3);
    fetchNews(newQuery); // Manually call fetchNews on search
  };

  const loadMore = () => {
    setShowCount(prevCount => prevCount + 3);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src={image} alt="" className={styles.headerBackground} />
        <NavBar />
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>What's going on in the world?</h2>
          <p className={styles.heroDescription}>
            Find the latest news on any topic and save them in your personal account.
          </p>
          <SearchBar onSearch={handleSearch} />
        </section>
      </header>

      <section className={styles.results}>
        <h2 className={styles.resultsTitle}>Search results</h2>
        {loading ? (
          <div className={styles.circlePreloader}></div>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <div className={styles.newsGrid}>
            {newsData.slice(0, showCount).map((news, index) => (
              <NewsCard
                key={index}
                date={news.publishedAt}
                title={news.title}
                description={news.description}
                source={news.source}
                image={news.urlToImage}
              />
            ))}
          </div>
        )}

        {!loading && !error && newsData.length > showCount && (
          <button onClick={loadMore} className={styles.showMore}>
            Show more
          </button>
        )}
      </section>

      <section className={styles.author}>
        <img src={image2} alt="Author" className={styles.authorImage} />
        <div className={styles.authorContent}>
          <h2 className={styles.authorTitle}>About the author</h2>
          <p className={styles.authorDescription}>
            This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
            <br /><br />
            You can also talk about your experience with TripleTen, what you learned there, and how you can help potential customers.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LandingPage;
