// import { postComment } from '../../API/api';
// import { UsernameContext } from '../../Components/UsernameContext/UsernameContext';
// import { useContext, useState } from 'react';

// const CommentForm = ({ article_id, comments, setComments }) => {
//   const [input, setInput] = useState('');
//   const { username } = useContext(UsernameContext);
//   const [isError, setIsError] = useState(false);
//   const [disabled, setDisabled] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (input) {
//       setDisabled(true);
//       postComment(article_id, username, input)
//         .then((data) => {
//           setComments((currentComments) => {
//             return [data.comment, ...currentComments];
//           });
//           setInput('');
//         })
//         .catch((err) => {
//           setIsError('Something went wrong. Please try again.');
//         })
//         .finally(() => {
//           setDisabled(false);
//           setTimeout(() => {}, 2000);
//         });
//     }
//   };

//   const handleChange = (event) => {
//     setInput(event.target.value);
//   };

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="comment">Comment</label>

//         <textarea
//           id="comment"
//           style={{ width: 'none' }}
//           onChange={handleChange}
//           value={input}
//           placeholder="Write a comment..."
//           required
//         />
//         <button>Submit</button>
//       </form>
//       </>
//   );
// };

// export default CommentForm;

import { postComment } from '../../API/api';
import { UsernameContext } from '../../Components/UsernameContext/UsernameContext';
import { useContext, useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ article_id, comments, setComments }) => {
  const [input, setInput] = useState('');
  const { username } = useContext(UsernameContext);
  const [isError, setIsError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      setDisabled(true);
      postComment(article_id, username, input)
        .then((data) => {
          setComments((currentComments) => {
            return [data.comment, ...currentComments];
          });
          setInput('');
        })
        .catch((err) => {
          setIsError('Something went wrong. Please try again.');
        })
        .finally(() => {
          setDisabled(false);
          setTimeout(() => {}, 2000);
        });
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment" className="InputLabel">
          Add a Comment
        </label>

        <textarea
          id="comment"
          onChange={handleChange}
          value={input}
          placeholder="Write your comment here"
          className="CommentTextArea"
          required
          style={{
            fontFamily: 'Futura, sans-serif',
            fontSize: '16px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            resize: 'vertical',
            minHeight: '100px', // Set a minimum height
            width: '80%', // Make the textarea fill the available width
            boxSizing: 'border-box', // Include padding and border in the width
          }}
        />
        <button className="SubmitButton">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
