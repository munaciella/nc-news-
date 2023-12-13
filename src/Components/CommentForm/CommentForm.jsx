import { useState } from 'react';
import { postComment } from '../../API/api';

const CommentForm = ({ article_id, comments, setComments }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, input)
        .then((response) => {
            console.log(response.data);
          setComments(comment);
        })
    const newComment = {
      comment_id: comments.length + 1,
      author: user.username,
      body: input,
    };
    setComments([newComment, ...comments]);}

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment</label>

        <textarea
          id="comment"
          onChange={handleChange}
          value={input}
          placeholder="Write a comment..."
        />
        <button >Submit</button>
      </form>
    );
  };

export default CommentForm;
