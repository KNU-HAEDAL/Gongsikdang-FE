import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import JsBarcode from 'jsbarcode';

import * as Barcode from './BarcodePage.style';
import * as Common from '@/shared/styles';

const BarcodePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, merchantUid } = location.state || {
    cart: [],
    merchantUid: null,
  };

  const [barcodes, setBarcodes] = useState([]);

  // 유니코드 문자열을 Base64로 변환하는 함수
  const encodeToBase64 = (input) => btoa(unescape(encodeURIComponent(input)));

  useEffect(() => {
    if (!merchantUid) {
      alert('잘못된 접근입니다.');
      navigate('/mypage');
      return;
    }

    // 바코드 생성 함수
    const generateBarcodes = () => {
      const generatedBarcodes = [];
      cart.forEach((item) => {
        for (let i = 0; i < item.quantity; i++) {
          const uniqueUid = `${merchantUid}_${item.name}_${Date.now()}_${Math.random()}`; // 고유 UID 생성
          generatedBarcodes.push({
            name: item.name,
            price: item.price,
            merchantUid: encodeToBase64(uniqueUid), // Base64로 변환
            expiration: Date.now() + 2 * 60 * 60 * 1000, // 유효시간: 2시간
          });
        }
      });
      return generatedBarcodes;
    };

    setBarcodes(generateBarcodes());
  }, [cart, merchantUid, navigate]);

  return (
    <Barcode.BarcodePageLayout>
      {/* 상단 버튼 영역 */}
      <Common.TopButtons>
        {/* 뒤로 버튼 */}
        <Common.TopButton
          className='top-button back-button'
          onClick={() => navigate(-1)} // 이전 페이지로 이동
        >
          뒤로
        </Common.TopButton>

        {/* 홈 버튼 */}
        <Common.TopButton
          className='top-button home-button'
          onClick={() => navigate('/chooseRestaurant')} // ChooseRestaurant.js로 이동
        >
          홈
        </Common.TopButton>
      </Common.TopButtons>
      <Barcode.BarcodePageHeader>바코드 확인</Barcode.BarcodePageHeader>
      <Barcode.BarcodeSection>
        <h2>바코드</h2>
        {barcodes.map((barcode, index) => {
          const isExpired = Date.now() > barcode.expiration;

          return (
            <div key={index} className='barcode-item'>
              <p>{barcode.name}</p>
              {/* 순번 표시 */}
              {!isExpired ? (
                <svg
                  ref={(el) => {
                    if (el) {
                      JsBarcode(el, barcode.merchantUid, { format: 'CODE128' });
                    }
                  }}
                ></svg>
              ) : (
                <p className='expired'>바코드 만료 (2시간 초과)</p>
              )}
            </div>
          );
        })}
      </Barcode.BarcodeSection>
    </Barcode.BarcodePageLayout>
  );
};

export default BarcodePage;
