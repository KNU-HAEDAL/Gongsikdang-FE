import React, { useState } from 'react';

import EmptyStarIcon from '@/pages/_assets/icons/EmptyStarIcon.jsx';
import FilledStarIcon from '@/pages/_assets/icons/FilledStarIcon.jsx';

import { Header } from '@/shared/index.js';

import * as Styled from './ReviewFoodPage.style';

// 임시 데이터
const reviewsData = [
  {
    id: 1,
    user: '호반우',
    rating: 5,
    text: '육회 양이 많아서 너무 좋았어요! 제가 가장 좋아하는 메뉴입니다!!',
  },
  {
    id: 2,
    user: '김해달',
    rating: 3,
    text: '야채 양도 적고, 밥도 적고... 이걸 왜 먹나요? 그냥 조금 비싼 근처 식당가서 먹는게 더 맛있겠어요.',
  },
  {
    id: 3,
    user: '호반우',
    rating: 5,
    text: '육회 양이 많아서 너무 좋았어요! 제가 가장 좋아하는 메뉴입니다!!',
  },
  {
    id: 4,
    user: '호반우',
    rating: 5,
    text: '육회 양이 많아서 너무 좋았어요! 제가 가장 좋아하는 메뉴입니다!!',
  },
];

const ReviewFoodPage = () => {
  const [reviews, setReviews] = useState(reviewsData); // 임시 데이터로 초기화
  const foodName = '육회비빔밥'; // 음식 이름

  return (
    <Styled.Background>
      <Styled.PageLayout>
        {/* Header */}
        <Header title='음식 리뷰' />

        {/* 음식이름 */}
        <Styled.FoodTitle>{foodName}</Styled.FoodTitle>

        {/* 정렬 버튼 */}
        <Styled.FilterContainer>
          <Styled.FilterButton>
            <FilledStarIcon color='#FFD600' />
            별점 높은 순
          </Styled.FilterButton>
          <Styled.FilterButton>
            <EmptyStarIcon color='#c2c2c2' />
            별점 낮은 순
          </Styled.FilterButton>
        </Styled.FilterContainer>

        {/* 리뷰 전체 */}
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
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default ReviewFoodPage;
