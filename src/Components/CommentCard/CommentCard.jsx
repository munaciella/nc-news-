import './CommentCard.css'

const CommentCard = ({ comment, handleDelete }) => {
  return (
      <>
      <div className="center-container, comment-card-container">
              <h3>Author: {comment.author}</h3>
              <h3>Votes: {comment.votes}</h3>
              <h3>Comment:</h3>
              <p>{comment.body}</p>

              <button onClick={() => {handleDelete(comment.comment_id)}}>Delete</button>
          </div>
      </>
  );
};

export default CommentCard;


// const CommentCard = ({ comment, handleDelete }) => {
//   return (
//     <>
//       <div className="comment-card-container">
//         <h3>Author: {comment.author}</h3>
//         <h3>Votes: {comment.votes}</h3>
//         <h3>Comment:</h3>
//         <p>{comment.body}</p>

//         <button onClick={() => {handleDelete(comment.comment_id)}}>Delete</button>
//       </div>
//     </>
//   );
// };

// export default CommentCard;
