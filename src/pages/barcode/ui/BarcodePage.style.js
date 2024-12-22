import styled from '@emotion/styled';

export const BarcodePageLayout = styled.div`
  width: var(--page-width);
  max-width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;

export const BarcodePageHeader = styled.header`
  color: var(--red);
  text-align: center;
  font-size: var(--font-lg);
`;

export const PurchaseHistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: var(--font-sm);
  margin: 10px 0;
`;

export const PurchaseHistoryItem = styled.li`
  margin: 5px 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;

  :hover {
    background-color: var(--lightGray);
  }
`;

export const BarcodeSection = styled.section`
  margin-top: 20px;
  padding: 20px;
  background: var(--lightGray);
  border-radius: 8px;
  text-align: center;
`;
