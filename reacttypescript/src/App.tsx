import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import GridNews from './Grid/GridNews';
import { NewsArticle } from './items/items';
import './App.css'; // Import the CSS file

function App() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [active, setActive] = useState<number>(1);
  const [category, setCategory] = useState<string>('general');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setError('');

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=730cb6248dba456a9740f8c152836660`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setItems(data.articles);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <GridNews items={items} />
      )}
    </div>
  );
}

export default App;
