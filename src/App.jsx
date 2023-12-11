import './App.css';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
