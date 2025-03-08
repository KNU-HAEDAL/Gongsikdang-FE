import { useState, useEffect } from 'react';

import EmptyStarIcon from '@/pages/_assets/icons/EmptyStarIcon.jsx';
import FilledStarIcon from '@/pages/_assets/icons/FilledStarIcon.jsx';

import { reviewFoodListAPI } from '../apis/reviewfood.api.js';
import * as Styled from './ReviewFoodPage.style';

const ReviewFoodPage = () => {
  const [reviews, setReviews] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await reviewFoodListAPI();
      if (data.length > 0) {
        setFoodName(`음식 ${data[0].foodId}`); // 음식 이름은 서버에서 따로 받아야 함 (임시 설정)
      }
      setReviews(data.sort((a, b) => b.rating - a.rating));
    };

    fetchReviews();
  }, []);

  const sortReviews = (order) => {
    const sortedReviews = [...reviews].sort((a, b) =>
      order === 'desc' ? b.rating - a.rating : a.rating - b.rating
    );
    setReviews(sortedReviews);
    setSortOrder(order);
  };

  return (
    <div>
      <Styled.FoodTitle>{foodName}</Styled.FoodTitle>
      <Styled.FilterContainer>
        <Styled.FilterButton
          onClick={() => sortReviews('desc')}
          active={sortOrder === 'desc'}
        >
          <FilledStarIcon
            color={sortOrder === 'desc' ? '#FFD600' : '#C2C2C2'}
          />
          별점 높은 순
        </Styled.FilterButton>
        <Styled.FilterButton
          onClick={() => sortReviews('asc')}
          active={sortOrder === 'asc'}
        >
          <EmptyStarIcon color={sortOrder === 'asc' ? '#ffd600' : '#c2c2c2'} />
          별점 낮은 순
        </Styled.FilterButton>
      </Styled.FilterContainer>

      <Styled.ReviewList>
        {reviews.map((review) => (
          <Styled.ReviewCard key={review.id}>
            <Styled.ReviewHeader>
              <Styled.ReviewerName>{review.user}</Styled.ReviewerName>
              <Styled.Stars>
                {[...Array(5)].map((_, index) =>
                  index < review.rating ? (
                    <FilledStarIcon key={index} color='#FFD600' />
                  ) : (
                    <EmptyStarIcon key={index} color='#c2c2c2' />
                  )
                )}
              </Styled.Stars>
            </Styled.ReviewHeader>
            <Styled.ReviewText>{review.text}</Styled.ReviewText>
          </Styled.ReviewCard>
        ))}
      </Styled.ReviewList>
    </div>
  );
};

export default ReviewFoodPage;
