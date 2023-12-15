import { postComment } from '../../API/api';
import { UsernameContext } from '../../../UsernameContext/UsernameContext';
import { useContext, useState } from 'react';

const CommentForm = ({ article_id, comments, setComments }) => {
  const [input, setInput] = useState('');
  const { username } = useContext(UsernameContext);
  const [isError, setIsError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, username, input)
      .then((data) => {
        console.log(data);
        setComments((currentComments) => {
          return [data.comment, ...currentComments];
        });
        setInput('');
      })
      .catch((err) => {
        setIsError('Something went wrong, please try again.');
      });
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment</label>

        <textarea
          id="comment"
          style={{ width: 'none' }}
          onChange={handleChange}
          value={input}
          placeholder="Write a comment..."
          required
        />
        <button>Submit</button>
        
        {/* <section className="comment-card">
      <p>
        
        {username ? (
          <button
            disabled={disabled}
            onClick={() => {handleDelete(comments.comment_id)} 

            }
          >
            ❌
          </button>
        ) : null}
      </p>
      <p>{comments}</p>
      {isError ? (
        <p className="error-message">
          Failed to delete message. Please try again.
        </p>
      ) : null}
    </section> */}
      </form>
    </>
  );
};

export default CommentForm;
