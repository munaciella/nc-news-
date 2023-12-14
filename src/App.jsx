import './App.css';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { UsernameProvider } from "../UsernameContext/UsernameContext.jsx"
import LoginPage from '../LoginPage/LoginPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <UsernameProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
        </UsernameProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
