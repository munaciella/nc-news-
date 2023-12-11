import axios from 'axios';

// const articlesApi = axios.create({
//   baseURL: 'https://nc-news-bgp4.onrender.com/api'
// });

// export function getArticles() {
    
//   return articlesApi.get('/articles')
// }

exports.getArticles = () => {
    axios
  .get('https://nc-news-bgp4.onrender.com/api/articles')
  .then((response) => {
    console.log(response);
  })
}

