import { useEffect, useState } from 'react';
import { getComments } from '../../API/api';
import CommentCard from '../CommentCard/CommentCard';
import { useParams } from 'react-router-dom';
import CommentForm from '../CommentForm/CommentForm';

const CommentList = (comment_id) => {
    const {article_id} = useParams()
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((response) => {
        setIsLoading(false);
        setComments(response.data.comments);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong</h2>;

  return (
    <>
    <section>
        <CommentForm article_id={article_id} setComments={setComments}/>
      <ul>

        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
    </>
  );
};

export default CommentList;
