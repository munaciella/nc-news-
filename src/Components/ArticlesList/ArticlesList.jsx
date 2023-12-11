import { useEffect, useState } from 'react';
// import { getArticles } from '../../API/api';
import ArticleCard from '../ArticleCard/ArticleCard';
import axios from 'axios';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
  .get('https://nc-news-bgp4.onrender.com/api/articles')
  .then((response) => {
    setArticles(response.data.articles);
  })
    //   .then((articles) => {
    //     console.log(articles);
//         
// })
     .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  console.log(articles);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong</h2>;

  return (
    <>
    {articles.map((article) => {
        
        return <ArticleCard key={article.article_id} article={article} />
    })}
    </>
  );
};

export default ArticlesList;
