import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@/shared/index.js';

import * as Mypage from './Mypage.style';

const MyPage = () => {
  const [purchases, setPurchases] = useState([
    {
      id: 1,
      name: '육회비빔밥',
      date: '3월 13일 14:00 구매',
      status: '사용 가능',
      buttonType: '구매확정',
      buttonColor: 'blue',
      disabled: false,
    },
    {
      id: 2,
      name: '육회비빔밥',
      date: '3월 13일 14:00 구매',
      status: '사용 불가',
      buttonType: '환불완료',
      buttonColor: 'red',
      disabled: false,
    },
    {
      id: 3,
      name: '육회비빔밥',
      date: '3월 13일 14:00 사용',
      status: '사용 완료',
      buttonType: '리뷰작성',
      buttonColor: 'gray',
      disabled: true,
    },
    {
      id: 4,
      name: '육회비빔밥',
      date: '3월 13일 14:00 사용',
      status: '사용 완료',
      buttonType: '리뷰작성',
      buttonColor: 'red',
      disabled: false,
    },
  ]);

  const navigate = useNavigate();

  const handleBarcodeClick = (purchase) => {
    navigate('/barcode', {
      state: {
        name: purchase.name,
        date: purchase.date,
      },
    });
  };

  const handleButtonClick = (id) => {
    setPurchases((prevPurchases) =>
      prevPurchases.map((purchase) =>
        purchase.id === id
          ? {
              ...purchase,
              date: purchase.date.replace('구매', '사용'),
              status: '사용 완료',
              buttonType: '리뷰작성',
              buttonColor: 'red',
              disabled: false,
            }
          : purchase
      )
    );
  };
  const handleReviewClick = (purchase) => {
    navigate('/review/food', {
      state: {
        name: purchase.name,
        date: purchase.date,
      },
    });
  };
  return (
    <Mypage.Background>
      <Mypage.Layout>
        <Header title='마이페이지' />
        <Mypage.Section>
          <Mypage.Title>내정보</Mypage.Title>
          <Mypage.InfoBox>
            <Mypage.Wrapper>
              <Mypage.UserText>
                <Mypage.BoldText>호반우님</Mypage.BoldText>님 반갑습니다.
              </Mypage.UserText>
              <Mypage.RedButton onClick={() => navigate('/login')}>
                로그아웃
              </Mypage.RedButton>
            </Mypage.Wrapper>
          </Mypage.InfoBox>
        </Mypage.Section>

        <Mypage.Section>
          <Mypage.Title>내 포인트</Mypage.Title>
          <Mypage.PointBox>
            <Mypage.Wrapper>
              <Mypage.PointText>
                <Mypage.BoldText>5,000점</Mypage.BoldText> 사용 가능합니다.
              </Mypage.PointText>
              <Mypage.RedButton onClick={() => navigate('/mypage/point')}>
                충전하기
              </Mypage.RedButton>
            </Mypage.Wrapper>
          </Mypage.PointBox>
        </Mypage.Section>

        <Mypage.Section>
          <Mypage.Title>구매 내역</Mypage.Title>
          <Mypage.PurchaseBox>
            <Mypage.PurchaseList>
              {purchases.map((purchase) => (
                <Mypage.PurchaseCard key={purchase.id}>
                  <Mypage.PurchaseTitle>{purchase.name}</Mypage.PurchaseTitle>
                  <Mypage.PurchaseDate>{purchase.date}</Mypage.PurchaseDate>
                  <Mypage.QRCode />
                  <Mypage.QRText
                    isFirstCase={purchase.buttonType === '구매확정'}
                  >
                    QR코드확인하기
                  </Mypage.QRText>

                  <Mypage.ButtonBox>
                    <Mypage.Status>{purchase.status}</Mypage.Status>
                    <Mypage.ActionButton
                      style={{
                        backgroundColor:
                          purchase.buttonColor === 'blue'
                            ? '#007bff'
                            : purchase.buttonColor === 'red'
                              ? '#e10707'
                              : '#d3d3d3',
                      }}
                      disabled={purchase.disabled}
                      onClick={() => {
                        if (purchase.buttonType === '구매확정') {
                          handleButtonClick(purchase.id);
                        } else if (purchase.buttonType === '리뷰작성') {
                          handleReviewClick(purchase);
                        } else {
                          handleBarcodeClick(purchase);
                        }
                      }}
                    >
                      {purchase.buttonType}
                    </Mypage.ActionButton>
                  </Mypage.ButtonBox>
                </Mypage.PurchaseCard>
              ))}
              <button onClick={() => navigate('/mypage/barcode')}>
                바코드 확인
              </button>
            </Mypage.PurchaseList>
          </Mypage.PurchaseBox>
        </Mypage.Section>
      </Mypage.Layout>
    </Mypage.Background>
  );
};

export default MyPage;
