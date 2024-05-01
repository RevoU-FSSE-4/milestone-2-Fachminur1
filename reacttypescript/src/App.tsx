import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import GridNews from './Grid/GridNews';
import { NewsArticle, initialItems } from './items/items';

function App() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [active, setActive] = useState<number>(1);
  const [category, setCategory] = useState<string>("general");

  useEffect(() => {
      const fetchNews = async () => {
          try {
              const apiKey = '730cb6248dba456a9740f8c152836660';
              const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
              const data = await response.json();
              setItems(data.articles);
          } catch (error) {
              console.error('Error fetching news:', error);
          }
      };

      fetchNews();
  }, []);

  return (
      <div className="App">
          <h1 className="title">See The Latest News</h1>
          <Menu active={active} setActive={setActive} setCategory={setCategory} />
          <GridNews items={items} />
      </div>
  );
}

export default App;