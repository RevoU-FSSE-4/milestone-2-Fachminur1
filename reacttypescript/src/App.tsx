import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import GridNews from './Grid/GridNews';
import { NewsArticle, initialItems } from './items/items';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import './App.css'; // Import the CSS file

function App() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [active, setActive] = useState<number>(1);
  const [category, setCategory] = useState<string>("general");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-04-02&sortBy=publishedAt&apiKey=730cb6248dba456a9740f8c152836660')
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleRegister = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      {loggedIn ? (
        <>
          <Menu active={active} setActive={setActive} setCategory={setCategory} /> {}
          <GridNews items={items} />
          <Logout onLogout={handleLogout} />
        </>
      ) : (
        <Register onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
