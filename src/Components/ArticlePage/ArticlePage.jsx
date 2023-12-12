import { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://nc-news-bgp4.onrender.com/api/articles/${article_id}`)
      .then(({data}) => {
        setArticle(data.article);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong</h2>;

  return <ArticleCard key={article.article_id} article={article} />;
};

export default ArticlePage;
