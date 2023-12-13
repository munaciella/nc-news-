import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://nc-news-bgp4.onrender.com/api/'
});

export function getArticles () {
  return articlesApi.get('/articles')
}

export function getArticleById (article_id) {
  return articlesApi.get(`/articles/${article_id}`)
}

export function getComments(article_id) {
  return articlesApi.get(`/articles/${article_id}/comments`)
}