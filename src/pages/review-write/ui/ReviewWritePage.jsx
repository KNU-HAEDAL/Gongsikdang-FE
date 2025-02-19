import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

// Axios 추가
import { Header } from '@/shared/index.js';

import * as Styled from './ReviewWritePage.style.js';

const ReviewWritePage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(3);
  const [reviewContent, setReviewContent] = useState('');

  const menuName = '육회비빔밥'; // 임시 데이터
  const userId = 'testUser'; // 실제 사용자의 ID로 변경 필요
  const foodId = 1; // 음식 ID (실제 값 필요)

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://gongsikdang-be-production.up.railway.app/api/review/write',
        {
          reviewId: 0, // 백엔드에서 자동 증가 처리될 경우 생략 가능
          userId: userId,
          foodId: foodId,
          reviewContent: reviewContent,
          grade: rating,
          reviewDate: new Date().toISOString(), // 현재 날짜로 설정
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        }
      );

      if (response.status === 200) {
        alert('리뷰가 성공적으로 등록되었습니다.');
        navigate(-1); // 이전 페이지로 이동
      } else {
        alert('리뷰 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('리뷰 작성 오류:', error);
      alert('리뷰 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <Styled.Background>
      <Styled.PageLayout>
        <Header title='리뷰 작성' />

        <Styled.FoodTitle>{menuName || '메뉴 이름'}</Styled.FoodTitle>

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
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default ReviewWritePage;
