import { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import { getArticles } from '../../API/api';
import Error from '../../../Error/Error';
import CircularProgress from '@mui/material/CircularProgress';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
        <CircularProgress />
      </div>
    );
  }
  else if (isError) return <Error title="404 Article Not Found" />

  return (
    <>
    <div className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
      </div>
    </>
  );
};

export default ArticlesList;
