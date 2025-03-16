import { fetchInstance } from '@/shared';

export const getPurchasedFoodsAPI = async (userId) => {
  try {
    const response = await fetchInstance.get(`/app/api/purchases/${userId}`);
    return response.data;
  } catch (error) {
    console.error('구매한 음식 목록 불러오기 오류:', error);
    return [];
  }
};

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

    console.log('리뷰 등록 응답 데이터:', response);

    return response.status === 200;
  } catch (error) {
    console.error('리뷰 작성 오류:', error.response?.data || error.message);
    alert(`리뷰 등록 실패: ${error.response?.data?.message || '서버 오류'}`);
    return false;
  }
};
