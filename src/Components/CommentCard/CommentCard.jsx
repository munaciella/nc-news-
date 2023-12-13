const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="comment-card-container">
        <h3>Author: {comment.author}</h3>
        <h3>Votes: {comment.votes}</h3>
        <h3>Comment:</h3>
        <p>{comment.body}</p>
      </div>
    </>
  );
};

export default CommentCard;
