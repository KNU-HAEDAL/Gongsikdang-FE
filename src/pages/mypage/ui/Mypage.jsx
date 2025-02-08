import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchInstance } from '@/shared/instance/Instance';
import * as Common from '@/shared/styles';

import * as Mypage from './Mypage.style';

const MyPage = () => {
  const [purchases, setPurchases] = useState([]); // 구매 내역
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const purchaseResponse = await api.get('/api/purchases', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPurchases(purchaseResponse.data);
      } catch (error) {
        console.error('구매 내역 로드 실패:', error);
      }
    };

    fetchPurchases();
  }, []);

  // 구매 내역 클릭 시 바코드 화면으로 이동
  const handleBarcodeClick = (purchase) => {
    navigate('/barcode', {
      state: {
        cart: purchase.items,
        merchantUid: purchase.merchantUid,
      },
    });
  };

  return (
    <Mypage.MypageLayout>
      <Common.TopButtons>
        {/* 뒤로 버튼 */}
        <Common.TopButton>뒤로</Common.TopButton>

        {/* 홈 버튼 */}
        <Common.TopButton onClick={() => navigate('/chooseRestaurant')}>
          홈
        </Common.TopButton>
      </Common.TopButtons>
      <Mypage.MypageTitle>마이페이지</Mypage.MypageTitle>
      <Mypage.PurchaseHistory>
        <Mypage.MypageSubTitle>나의 구매 내역</Mypage.MypageSubTitle>
        <Mypage.PurchaseHistoryList>
          {purchases.map((purchase, index) => (
            <Mypage.PurchaseHistoryItem key={index}>
              <a
                onClick={() => handleBarcodeClick(purchase)}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                {purchase.date} - 주문번호: {purchase.merchantUid} - 총{' '}
                {purchase.items.length}개
              </a>
            </Mypage.PurchaseHistoryItem>
          ))}
        </Mypage.PurchaseHistoryList>
      </Mypage.PurchaseHistory>
      <button onClick={() => navigate('/mypage/point')}>
        포인트 페이지로 돌아가기
      </button>
    </Mypage.MypageLayout>
  );
};

export default MyPage;
