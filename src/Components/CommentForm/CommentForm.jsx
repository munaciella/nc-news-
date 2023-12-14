import { deleteComment, getComments, postComment } from '../../API/api';
import { UsernameContext } from '../../../UsernameContext/UsernameContext';
import { useContext, useState } from 'react';

const CommentForm = ({ article_id, comments, setComments }) => {
  const [input, setInput] = useState('');
  const { username } = useContext(UsernameContext);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false)

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

  const handleDelete = () => {
    if (username) {
      deleteComment(comment_id)
        .then(() => {
          setComments((currentComments) => {
            const updatedComments = [...currentComments].filter(
              (comment) => comment.comment_id !== comment_id
            );

            return updatedComments;
          });
        })
        .then(() => {
          setActive(true);
        });
    }
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
      </form>
    </>
  );
};

export default CommentForm;