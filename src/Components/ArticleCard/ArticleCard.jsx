import Card from "@mui/material/Card"
import { Link } from "react-router-dom";


const ArticleCard = (props) => {
  return (
    <div>
        <Link to={`/articles/${props.article.article_id}`}>
    <Card className="article-card" variant="outlined" >
    
    <ul className="article" >
      <h2>{props.article.title}</h2>
      <img className="image" src={props.article.article_img_url} 
      alt="article image"/>
      <p>Author: {props.article.author}</p>
      <p>Comment count: {props.article.comment_count}</p>
      <p>Topic: {props.article.topic}</p>
      <p>Article ID: {props.article.article_id}</p>
      <p>Votes: {props.article.votes}</p>
    </ul>
    </Card>
    </Link>
    </div>
    )
    }

export default ArticleCard;