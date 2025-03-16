import { fetchInstance } from '@/shared';

export const purchaseAPI = async (purchaseData) => {
  try {
    const formattedData = {
      impUid: purchaseData.impUid,
      merchantUid: purchaseData.merchantUid,
      date: purchaseData.date || new Date().toISOString(),
      totalAmount: purchaseData.totalAmount,
      paymentMethod: purchaseData.paymentMethod,
      pgProvider: purchaseData.pgProvider,
      usedPoints: purchaseData.usedPoints || 0,
      status: 'SUCCESS',
      items: purchaseData.items.map((item) => ({
        foodId: item.foodId ?? null,
        foodName: item.foodName ?? '상품명 없음',
        quantity: item.quantity ?? 1,
        price: item.price ?? 0,
      })),
    };

    const response = await fetchInstance.post('/api/purchases', formattedData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || '구매 요청에 실패했습니다.'
    );
  }
};
