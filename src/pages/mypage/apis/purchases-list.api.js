import { fetchInstance } from '@/shared';

export const purchaseApiPath = '/api/purchases';

export const getPurchasesList = async () => {
  try {
    const response = await fetchInstance.get(purchaseApiPath);

    console.log(
      'GET 요청 응답 데이터:',
      JSON.stringify(response.data, null, 2)
    );

    return response.data.length > 0
      ? response.data.map((purchase) => ({
          purchaseId: purchase.purchaseId ?? null,
          merchantUid: purchase.merchantUid ?? '주문번호 없음',
          totalAmount: purchase.totalAmount ?? 0,
          paymentMethod: purchase.paymentMethod ?? '알 수 없음',
          status: purchase.status ?? 'UNKNOWN',
          date: purchase.date
            ? new Intl.DateTimeFormat('ko-KR', {
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              }).format(new Date(purchase.date)) + ' 구매'
            : '날짜 없음',
          items:
            purchase.items.length > 0
              ? purchase.items.map((item) => ({
                  foodId: item.foodId ?? null,
                  foodName: item.foodName ?? '상품명 없음',
                  quantity: item.quantity ?? 0,
                  price: item.price ?? 0,
                }))
              : [
                  {
                    foodId: null,
                    foodName: '상품 없음',
                    quantity: 0,
                    price: 0,
                  },
                ],
        }))
      : [];
  } catch (error) {
    console.error('구매 내역 조회 실패:', error);
    return [];
  }
};
