import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/shared/index.js';

import * as Styled from './SelectCornerPage.style.js';

const SelectCornerPage = () => {
  const navigate = useNavigate();

  return (
    <Styled.Background>
      <Styled.PageLayout>
        {/* Header 컴포넌트 추가 */}
        <Header title='코너 선택' />
        <Styled.Subtitle>
          구매하고 싶은 식권의 코너를 선택해주세요.
        </Styled.Subtitle>
        <Styled.Grid>
          <Styled.CornerCard onClick={() => navigate('/corner/A')}>
            <h2>A 코너</h2>
            <ul>
              <li>닭불고기 덮밥</li>
              <li>돈가스마요</li>
              <li>따로소고기국밥</li>
              <li>매운돈가스마요</li>
            </ul>
          </Styled.CornerCard>
          <Styled.CornerCard onClick={() => navigate('/corner/B')}>
            <h2>B 코너</h2>
            <ul>
              <li>등심돈가스 + 스프</li>
              <li>땡초우동 + 주먹밥</li>
              <li>쟁반수육</li>
            </ul>
          </Styled.CornerCard>
          <Styled.CornerCard onClick={() => navigate('/corner/C')}>
            <h2>C 코너</h2>
            <ul>
              <li>뚝배기알밥</li>
              <li>불고기치즈뚝배기</li>
              <li>
                양푼이비빔밥
                <br />+ 된장찌개
              </li>
              <li>치즈뚝배기알밥</li>
            </ul>
          </Styled.CornerCard>
          <Styled.CornerCard onClick={() => navigate('/corner/D')}>
            <h2>D 코너</h2>
            <ul>
              <li>떡라면</li>
              <li>만두라면</li>
              <li>삼겹김치전골</li>
              <li>최루탄라면</li>
            </ul>
          </Styled.CornerCard>
        </Styled.Grid>
      </Styled.PageLayout>
    </Styled.Background>
  );
};

export default SelectCornerPage;
