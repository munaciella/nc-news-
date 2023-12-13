import axios from 'axios';

exports.getArticles = () => {
    axios
  .get('https://nc-news-bgp4.onrender.com/api/articles')
  .then((response) => {
    console.log(response);
  })
}

exports.getArticlesById = (article_id) => {
    axios
  .get(`https://nc-news-bgp4.onrender.com/api/articles/${article_id}`)
  .then((response) => {
    console.log(response);
    return response.data.article
  })
}

exports.voteArticle = (article_id, inc_votes) => {
    const { data } = await newsApi.patch(`/articles/${article_id}`, { inc_votes });
  
    return data.article;
  }