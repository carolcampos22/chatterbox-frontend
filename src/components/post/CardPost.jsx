import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Comments, ContainerCardPost, LikesDislikes, LikesDislikesCommentsContainer } from './StylesCardPost';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ChatText from '../../assets/chat-text.svg';
import { LikeOrDislike } from '../../constants/constants';

const CardPost = ({ creatorPost, title, content, likes, dislikes, comments, id, onClickComments }) => {
  const location = useLocation();
  const isOnPostsPage = location.pathname === '/posts';
  const [likeStatus, setLikeStatus] = useState(null); // null: sem ação, 1: liked, 0: disliked
  const [likesCount, setLikesCount] = useState(likes);
  const [dislikesCount, setDislikesCount] = useState(dislikes);

  const handleLikeDislike = async (like) => {
    try {
      const body = { like };
      const result = await LikeOrDislike(body, id);

      if (like === true) {
        if (likeStatus === 1) {
          // Se já foi like, remove o like
          setLikesCount(likesCount - 1);
          setLikeStatus(null);
        } else if (likeStatus === 0) {
          // Se era dislike, remove o dislike e adiciona o like
          setDislikesCount(dislikesCount - 1);
          setLikesCount(likesCount + 1);
          setLikeStatus(1);
        } else {
          // Se não havia ação anterior, adiciona o like
          setLikesCount(likesCount + 1);
          setLikeStatus(1);
        }
      } else {
        if (likeStatus === 0) {
          // Se já foi dislike, remove o dislike
          setDislikesCount(dislikesCount - 1);
          setLikeStatus(null);
        } else if (likeStatus === 1) {
          // Se era like, remove o like e adiciona o dislike
          setLikesCount(likesCount - 1);
          setDislikesCount(dislikesCount + 1);
          setLikeStatus(0);
        } else {
          // Se não havia ação anterior, adiciona o dislike
          setDislikesCount(dislikesCount + 1);
          setLikeStatus(0);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerCardPost>
      <p>Enviado por: @{creatorPost}</p>
      <h2>{title}</h2>
      <h3>{content}</h3>
      <LikesDislikesCommentsContainer>
        <LikesDislikes>
          <button onClick={() => handleLikeDislike(true)} disabled={likeStatus === 1}>
            <img src={ArrowUp} alt="Up" title='Like'/>
          </button>
          <span>{likesCount - dislikesCount}</span>
          <button onClick={() => handleLikeDislike(false)} disabled={likeStatus === 0}>
            <img src={ArrowDown} alt="Down" title='Dislike'/>
          </button>
        </LikesDislikes>
        {isOnPostsPage && (
          <Comments>
            <button onClick={() => onClickComments(id)}>
              <img src={ChatText} alt="Comment" title="Ir para comentários" />
            </button>
            <span>{comments}</span>
          </Comments>
        )}
      </LikesDislikesCommentsContainer>
    </ContainerCardPost>
  );
};

export default CardPost;
