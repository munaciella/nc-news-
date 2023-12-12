const ArticleCard = (props) => {
  return (
    <Link to={`/articles/${article_id}`}>
    <ul className="article" >
      <h2>{props.article.title}</h2>
      <img src={props.article.article_img_url} 
      alt="article image"/>
      <p>Author: {props.article.author}</p>
      <p>Comment count: {props.article.comment_count}</p>
      <p>Topic: {props.article.topic}</p>
      <p>Article ID: {props.article.article_id}</p>
      <p>Votes: {props.article.votes}</p>
    </ul>
    </Link>
  );
};

export default ArticleCard;
