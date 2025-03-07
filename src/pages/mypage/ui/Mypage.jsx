import { MyInfo, PurchasesList, MyPoint } from '../components';
import * as Mypage from './Mypage.style';

const MyPage = () => {
  return (
    <Mypage.Layout>
      <MyInfo />
      <MyPoint />
      <PurchasesList />
    </Mypage.Layout>
  );
};

export default MyPage;
