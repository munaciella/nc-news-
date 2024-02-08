import './CommentCard.css'

const CommentCard = ({ comment, handleDelete }) => {
  return (
      <>
      <div className="comment-card-container">
              <h3>Author: {comment.author}</h3>
              <h3>Votes: {comment.votes}</h3>
              <h3>Comment:</h3>
              <p>{comment.body}</p>

              {/* <button className="delete-button-comment" onClick={() => {handleDelete(comment.comment_id)}}>Delete</button> */}
              <button 
  className="delete-button-comment" 
  onClick={() => {handleDelete(comment.comment_id)}}
  style={{
    backgroundColor: '#FF4500', 
    color: 'white', 
    fontSize: '14px',
    padding: '10px 14px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  }}
>
  Delete
</button>
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
