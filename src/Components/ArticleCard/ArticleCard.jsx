import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const {
    article_id,
    title,
    topic,
    article_img_url,
    author,
    comment_count,
    created_at,
  } = article;

  const date = new Date(created_at);
  return (
    <li>
      <div>
        <Card className="article-card" variant="outlined">
          <ul className="article">
            <h3>{title}</h3>
            <h4>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h4>
            <Link to={`/articles/${article_id}`}>
              <img
                className="article-image"
                src={article_img_url}
                alt="article image"
              />
            </Link>
            <p>Author: {author}</p>
            <p>{comment_count} comments</p>
            Created on {date.toLocaleDateString()} at{' '}
            <time>{date.toLocaleTimeString()}</time>
          </ul>
        </Card>
      </div>
    </li>
  );
};

export default ArticleCard;
