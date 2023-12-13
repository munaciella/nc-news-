import './App.css';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
