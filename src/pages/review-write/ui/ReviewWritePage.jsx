import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/shared/index.js';

import * as Styled from './ReviewWritePage.style.js';

const ReviewWritePage = () => {
  const navigate = useNavigate();

  // 임시
  const menuName = '육회비빔밥'; // 임시 메뉴 이름
  const [rating, setRating] = useState(3); // 임시 초기 별점 값

  const handleRating = (index) => {
    setRating(index + 1); // 별점 클릭 시 업데이트
  };

  return (
    <Styled.Background>
      <Styled.PageLayout>
        {/* Header 컴포넌트 */}
        <Header title='리뷰 작성' />

        {/* 동적 메뉴 이름 */}
        <Styled.FoodTitle>{menuName || '메뉴 이름'}</Styled.FoodTitle>

        {/* 별점 */}
        <Styled.Section>
          <Styled.Subtitle>별점</Styled.Subtitle>
          <Styled.StarContainer>
            {[...Array(5)].map((_, index) => (
              <Styled.Star
                key={index}
                onClick={() => handleRating(index)}
                isActive={index < rating} // 활성화 상태
              >
                &#9733; {/* ★ */}
              </Styled.Star>
            ))}
          </Styled.StarContainer>
        </Styled.Section>

        {/* 리뷰 작성 입력란 */}
        <Styled.Section>
          <Styled.Subtitle>리뷰 작성</Styled.Subtitle>
          <Styled.Textarea placeholder='리뷰를 작성해주세요.' />
        </Styled.Section>

        {/* 버튼 */}
        <Styled.Button onClick={() => alert('리뷰가 작성되었습니다!')}>
          리뷰 작성 완료
        </Styled.Button>
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default ReviewWritePage;
