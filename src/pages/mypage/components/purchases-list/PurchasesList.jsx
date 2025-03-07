import { useNavigate } from 'react-router-dom';

import { LoadingView } from '@/shared';

import { useGetPurchaseList } from '../../hooks';
import { Section, Title } from '../../ui';
import * as Mypage from './PurchasesList.style';

export const PurchasesList = () => {
  const { data: purchaseListData, isPending } = useGetPurchaseList();

  const purchasesList = Array.isArray(purchaseListData) ? purchaseListData : [];

  const navigate = useNavigate();

  const handleBarcodeClick = (purchase) => {
    navigate('/barcode', {
      state: {
        name: purchase.items[0]?.foodName || '상품명 없음',
        date: purchase.status,
      },
    });
  };

  // const handleButtonClick = (id) => {
  //   setPurchases((prevPurchases) =>
  //     prevPurchases.map((purchase) =>
  //       purchase.id === id
  //         ? {
  //             ...purchase,
  //             date: purchase.date.replace('구매', '사용'),
  //             status: '사용 완료',
  //             buttonType: '리뷰작성',
  //             buttonColor: 'red',
  //             disabled: false,
  //           }
  //         : purchase
  //     )
  //   );

  //   console.log(`구매 ID ${id} 버튼 클릭`);
  // };

  const handleReviewClick = (purchase) => {
    navigate('/review/write', {
      state: {
        name: purchase.items[0]?.foodName || '상품명 없음',
        date: purchase.status,
      },
    });
  };

  if (isPending) {
    return <LoadingView />;
  }

  return (
    <Section>
      <Title>구매 내역</Title>
      <Mypage.PurchaseBox>
        {purchasesList.length > 0 ? (
          <Mypage.PurchaseList>
            {purchasesList.map((purchase) => {
              const buttonType = purchase.buttonType || 'QR 확인';
              const buttonColor = purchase.buttonColor || 'gray';
              const isDisabled = purchase.disabled ?? true;

              return (
                <Mypage.PurchaseCard key={purchase.purchaseId ?? Math.random()}>
                  <Mypage.PurchaseTitle>
                    {purchase.items[0]?.foodName || '상품명 없음'}
                  </Mypage.PurchaseTitle>
                  <Mypage.PurchaseDate>{purchase.status}</Mypage.PurchaseDate>
                  <Mypage.QRCode />
                  <Mypage.QRText isFirstCase={buttonType === '구매확정'}>
                    QR코드확인하기
                  </Mypage.QRText>

                  <Mypage.ButtonBox>
                    <Mypage.Status>{purchase.status}</Mypage.Status>
                    <Mypage.ActionButton
                      style={{
                        backgroundColor:
                          buttonColor === 'blue'
                            ? '#007bff'
                            : buttonColor === 'red'
                              ? '#e10707'
                              : '#d3d3d3',
                      }}
                      disabled={isDisabled}
                      // onClick={() => {
                      //   if (buttonType === '구매확정') {
                      //     handleButtonClick(purchase.purchaseId);
                      //   } else if (buttonType === '리뷰작성') {
                      //     handleReviewClick(purchase);
                      //   } else {
                      //     handleBarcodeClick(purchase);
                      //   }
                      // }}
                    >
                      {buttonType}
                    </Mypage.ActionButton>
                  </Mypage.ButtonBox>
                </Mypage.PurchaseCard>
              );
            })}
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
