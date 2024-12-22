import styled from '@emotion/styled';

export const TopButtons = styled.div`
  display: flex;
  justify-content: space-between; /* 버튼을 양쪽 끝에 배치 */
  align-items: center; /* 버튼 중앙 정렬 */
  margin-bottom: 15px; /* 제목과의 간격 추가 */
`;

export const TopButton = styled.button`
  background-color: var(--red); /* 빨간색 배경 */
  color: white; /* 흰색 글자 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 둥근 모서리 */
  padding: 8px 20px; /* 버튼 크기 조정 */
  font-size: 16px; /* 버튼 글씨 크기 */
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  :hover {
    background-color: #c0392b; /* 어두운 빨간색 */
    transform: scale(1.05); /* 살짝 확대 효과 */
  }
`;
