import './App.css';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import CommentList from './Components/CommentList/CommentList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/articles/:article_id/comments" element={<CommentList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
