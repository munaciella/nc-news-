import './App.css';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import ArticlePage from './Components/ArticlePage/ArticlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { UsernameProvider } from "../src/Components/UsernameContext/UsernameContext.jsx"
import LoginPage from '../LoginPage/LoginPage.jsx';
import Error from '../Error/Error.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import SignUp from '../SignUp/SignUp.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
      <UsernameProvider>
        <Header />
        <NavBar/>
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route
          path="*"
          element={
            <Error
              title="404 Page Not Found"
              msg="Sorry, this page doesn't exist yet... 😢"
            />
          }
        />
        </Routes>
        </UsernameProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
