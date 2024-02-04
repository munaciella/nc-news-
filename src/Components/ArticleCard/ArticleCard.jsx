import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import Vote from '../Vote/Vote';
import './ArticleCard.css'

const ArticleCard = ({ article }) => {
  const { article_id, body, votes, title, topic,
          article_img_url, author,
          comment_count, created_at } = article;
 
  const date = new Date(created_at);
 
  return (
    <>
      <div>
        <Card className="article-card" variant="outlined">
          <ul className="article">
            
            <h3>{title}</h3>
            <h4>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h4>
            <Link to={`/articles/${article_id}`}>
              <img className="article-image" src={article_img_url} alt="article image" />
            </Link>
            <p>Author: {author}</p>
            <p>{comment_count} comments</p>
            <Vote article_id={article_id} votes={votes} />
            <p>{body}</p>
            Created on {date.toLocaleDateString()} at{' '}
            <time>{date.toLocaleTimeString()}</time>
          </ul>
        </Card>
      </div>
    </>
  );
 };
 
 export default ArticleCard;