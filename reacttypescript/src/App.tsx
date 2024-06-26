import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import GridNews from './Grid/GridNews';
import { NewsArticle } from './items/items';
import './App.css'; // Import the CSS file

function App(): JSX.Element {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [active, setActive] = useState<number>(1);
  const [category, setCategory] = useState<string>('general');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setError('');

    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=730cb6248dba456a9740f8c152836660`;

    if (category !== 'general') {
      apiUrl += `&category=${category}`;
    }

    if (searchQuery) {
      apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
    }

    fetch(apiUrl)
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
  }, [category, searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <Router>
      <div className="App">
        <h1 className="title">See The Latest News</h1>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        {/* Search Form */}
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for news..."
          />
          <button type="submit">Search</button>
        </form>
        <Routes>
          <Route path="/" element={
            loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <GridNews items={items} />
            )
          } />
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
