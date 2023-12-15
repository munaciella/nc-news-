import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://nc-news-bgp4.onrender.com/api/',
});

export function getArticles() {
  return articlesApi.get('/articles');
}

export function getArticleById(article_id) {
  return articlesApi.get(`/articles/${article_id}`);
}

export function getComments(article_id) {
  return articlesApi.get(`/articles/${article_id}/comments`);
}

export function voteArticle(article_id, votes) {
  const result = { votes: votes };
  return articlesApi.patch(`/articles/${article_id}`, result);
}

export function postComment(article_id, username, commentBody) {
  const body = {
    username: username,
    body: commentBody,
  };
  return articlesApi
    .post(`/articles/${article_id}/comments`, body)
    .then(({data}) => {
      return data;
    })
    .catch((err) => {
      return { err };
    });
}

export function deleteComment(comment_id) {
  return articlesApi.delete(`/comments/${comment_id}`)
}

export const getUsers = () => {
  return articlesApi.get('/users').then(({ data }) => {
    return data;
  });
};

export function getUser(username) {
  return articlesApi.get(`/users/${username}`).then((data) => {
    return data;
  });
}


