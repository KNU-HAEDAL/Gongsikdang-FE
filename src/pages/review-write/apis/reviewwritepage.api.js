import { fetchInstance } from '@/shared';

// 구매한 음식 목록 조회 API (마이페이지)
export const getPurchasedFoodsAPI = async (userId) => {
  try {
    const response = await fetchInstance.get(`/app/api/purchases/${userId}`);
    return response.data;
  } catch (error) {
    console.error('구매한 음식 목록 불러오기 오류:', error);
    return [];
  }
};

// 리뷰 작성 API
export const postReviewAPI = async (reviewData) => {
  try {
    const response = await fetchInstance.post(
      '/app/api/review/write',
      reviewData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error('리뷰 작성 오류:', error);
    return false;
  }
};
