import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingView } from '@/shared';

import { useGetPurchaseList } from '../../hooks';
import { PURCHASE_MOCK_DATA } from '../../mock';
import { Section, Title } from '../../ui';
import * as Mypage from './PurchasesList.style';

export const PurchasesList = () => {
  const { data: purchasesList, isPending } = useGetPurchaseList();

  const [purchases, setPurchases] = useState(PURCHASE_MOCK_DATA);

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
    navigate('/review/write', {
      state: {
        name: purchase.name,
        date: purchase.date,
      },
    });
  };
  const navigate = useNavigate();

  if (isPending) {
    return <LoadingView />;
  }
  return (
    <Section>
      <Title>구매 내역</Title>
      <Mypage.PurchaseBox>
        {purchases !== undefined && purchases.length === 0 ? (
          <Mypage.PurchaseList>
            {purchases.map((purchase) => (
              <Mypage.PurchaseCard key={purchase.id}>
                <Mypage.PurchaseTitle>{purchase.name}</Mypage.PurchaseTitle>
                <Mypage.PurchaseDate>{purchase.date}</Mypage.PurchaseDate>
                <Mypage.QRCode />
                <Mypage.QRText isFirstCase={purchase.buttonType === '구매확정'}>
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
        ) : (
          <Mypage.PurchaseUndefined>
            구매 내역이 없습니다.
          </Mypage.PurchaseUndefined>
        )}
      </Mypage.PurchaseBox>
    </Section>
  );
};
