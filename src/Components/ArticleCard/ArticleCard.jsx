const ArticleCard = (props) => {
  return (
    <ul className="article" >
      <h2>{props.article.title}</h2>
      <img src={props.article.article_img_url}/>
      <p>{props.article.author}</p>
      <p>{props.article.comment_count}</p>
      <p>{props.article.topic}</p>
      <p>{props.article.created_at}</p>
      <p>{props.article.article_id}</p>
      <p>{props.article.votes}</p>
    </ul>
  );
};

export default ArticleCard;
