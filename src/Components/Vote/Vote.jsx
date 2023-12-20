import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import { Box, Fab } from '@mui/material';
import { useState } from 'react';
import { voteArticle } from '../../API/api';
import './Vote.css';

const Vote = ({ article_id, votes }) => {
  const [currVotes, setCurrVotes] = useState(votes);
  const [timesClicked, setTimesClicked] = useState(0);
  const [buttonColor, setButtonColor] = useState('default');

  const upVote = () => {
    if (timesClicked <= 0) {
      setTimesClicked(timesClicked + 1);
      setTimeout(() => {
        setCurrVotes(currVotes + 1);
      }, 2000);
      voteArticle(article_id, 1).then((data) => {
        if (data.error) {
          setButtonColor('error');
        }
      });
    }
  };
  const downVote = () => {
    if (timesClicked >= 0) {
      setTimesClicked(timesClicked - 1);
      setTimeout(() => {
        setCurrVotes(currVotes - 1);
      }, 2000);
      voteArticle(article_id, -1).then((data) => {
        if (data.error) {
          setButtonColor('error');
        }
      });
    }
  };

  return (
    <>
      <div className="thumbs-up">
        <p className="votes">Votes: {currVotes}</p>
        <div
          size="small"
          onClick={upVote}
          color={buttonColor}
          className="fab-button"
        >
          <ThumbUpIcon />
        </div>
      </div>
      <div className="thumbs-down">
        <div
          size="small"
          onClick={downVote}
          color={buttonColor}
          className="fab-button"
        >
          <ThumbDownIcon />
        </div>
      </div>
      {buttonColor === 'error' && (
        <p style={{ color: 'red' }} className="error-message">
          Error on voting please try again
        </p>
      )}
    </>
  );
};

export default Vote;
