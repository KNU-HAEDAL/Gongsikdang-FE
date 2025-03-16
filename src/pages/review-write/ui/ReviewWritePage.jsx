import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  getPurchasedFoodsAPI,
  postReviewAPI,
} from '../apis/reviewwritepage.api.js';
import * as Styled from './ReviewWritePage.style.js';

const ReviewWritePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { foodId, foodName } = location.state || {};
  const [rating, setRating] = useState(3);
  const [reviewContent, setReviewContent] = useState('');

  useEffect(() => {
    console.log('받아온 음식 정보:', location.state);
  }, [location.state]);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = async () => {
    if (!foodId) {
      alert('유효한 음식 정보가 없습니다.');
      return;
    }

    const reviewData = {
      foodId,
      reviewContent,
      grade: rating,
    };

    console.log('리뷰 등록 요청 데이터:', reviewData);

    const success = await postReviewAPI(reviewData);
    if (success) {
      alert('리뷰가 성공적으로 등록되었습니다.');
      navigate(`/review/food/${foodId}`);
    } else {
      alert('리뷰 등록에 실패했습니다.');
    }
  };

  return (
    <div>
      <Styled.FoodTitle>{foodName || '상품명 없음'}</Styled.FoodTitle>

      <Styled.Section>
        <Styled.Subtitle>별점</Styled.Subtitle>
        <Styled.StarContainer>
          {[...Array(5)].map((_, index) => (
            <Styled.Star
              key={index}
              onClick={() => handleRating(index)}
              isActive={index < rating}
            >
              &#9733;
            </Styled.Star>
          ))}
        </Styled.StarContainer>
      </Styled.Section>

      <Styled.Section>
        <Styled.Subtitle>리뷰 작성</Styled.Subtitle>
        <Styled.Textarea
          placeholder='리뷰를 작성해주세요.'
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
        />
      </Styled.Section>

      <Styled.Button onClick={handleSubmit}>리뷰 작성 완료</Styled.Button>
    </div>
  );
};

export default ReviewWritePage;
