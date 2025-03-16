import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingView } from '@/shared';

import QR1 from '../../_assets/QR1.png';
import QR2 from '../../_assets/QR2.png';
import { useGetPurchaseList } from '../../hooks';
import { Section, Title } from '../../ui';
import * as Mypage from './PurchasesList.style';

export const PurchasesList = () => {
  const { data: purchasesList, isPending } = useGetPurchaseList();
  const navigate = useNavigate();
  const [confirmedPurchases, setConfirmedPurchases] = useState({});

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem('confirmedPurchases')) || {};
    setConfirmedPurchases(storedData);
  }, []);

  const handleConfirmPurchase = (index) => {
    const updatedPurchases = { ...confirmedPurchases, [index]: true };
    setConfirmedPurchases(updatedPurchases);
    localStorage.setItem(
      'confirmedPurchases',
      JSON.stringify(updatedPurchases)
    );
  };

  const handleReviewClick = (purchase) => {
    navigate('/review/write', {
      state: {
        foodId: purchase.items[0]?.foodId,
        foodName: purchase.items[0]?.foodName || '상품명 없음',
      },
    });
  };

  if (isPending) {
    return <LoadingView />;
  }

  return (
    <Section>
      <Title>구매 내역</Title>
      <Mypage.InfoText>
        QR 코드는 <span className='red'>구매 후 1시간 이내</span>
        에만 사용가능합니다.
        <br />
        1시간이 지난 QR 코드는 포인트로 <span className='red'>자동 환불</span>
        됩니다.
      </Mypage.InfoText>
      <Mypage.PurchaseBox>
        {purchasesList.length > 0 ? (
          <Mypage.PurchaseList>
            {purchasesList.map((purchase, index) => (
              <Mypage.PurchaseCard key={index}>
                <Mypage.PurchaseTitle>
                  {purchase.items[0]?.foodName}
                </Mypage.PurchaseTitle>
                <Mypage.PurchaseDate>{purchase.date}</Mypage.PurchaseDate>
                <Mypage.QRCodeBox>
                  <Mypage.QRCode>
                    <img
                      src={confirmedPurchases[index] ? QR2 : QR1}
                      alt='QR Code'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </Mypage.QRCode>
                  <Mypage.QRText
                    onClick={() =>
                      navigate('/mypage/barcode', {
                        state: {
                          foodName:
                            purchase.items[0]?.foodName || '상품명 없음',
                          date: purchase.date,
                          merchantUid: purchase.merchantUid,
                        },
                      })
                    }
                    style={{
                      pointerEvents: confirmedPurchases[index]
                        ? 'none'
                        : 'auto',
                      color: confirmedPurchases[index] ? 'gray' : 'black',
                    }}
                  >
                    QR 코드 확인하기
                  </Mypage.QRText>
                </Mypage.QRCodeBox>
                <Mypage.ButtonBox>
                  <Mypage.StatusText>
                    {confirmedPurchases[index] ? '사용불가' : '사용가능'}
                  </Mypage.StatusText>
                  {confirmedPurchases[index] ? (
                    <Mypage.ActionButton
                      style={{ backgroundColor: 'red' }}
                      onClick={() => handleReviewClick(purchase)}
                    >
                      리뷰작성
                    </Mypage.ActionButton>
                  ) : (
                    <Mypage.ActionButton
                      onClick={() => handleConfirmPurchase(index)}
                    >
                      구매확정
                    </Mypage.ActionButton>
                  )}
                </Mypage.ButtonBox>
              </Mypage.PurchaseCard>
            ))}
          </Mypage.PurchaseList>
        ) : (
          <Mypage.InfoText>구매 내역이 없습니다.</Mypage.InfoText>
        )}
      </Mypage.PurchaseBox>
    </Section>
  );
};
