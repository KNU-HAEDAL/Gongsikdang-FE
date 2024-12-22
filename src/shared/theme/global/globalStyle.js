import { css } from '@emotion/react';

// font size 정의
const fontXs = '14px';
const fontSm = '18px';
const fontMd = '24px';
const fontLg = '30px';

// global color 정의
const red = '#e10707';
const lightGray = '#f6f3f3';
const gray = '#cac2c2';
const black = '#211f1f';

// 버튼 크기 및 여백
const buttonPadding = '10px 16px';
const buttonBorderRadius = '8px';

// 페이지 크기
const pageWidth = '375px';
const pageHeight = 'auto';

export const globalStyle = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-style: normal;
  }

  :root {
    --font-xs: ${fontXs};
    --font-sm: ${fontSm};
    --font-md: ${fontMd};
    --font-lg: ${fontLg};

    --red: ${red};
    --lightGray: ${lightGray};
    --gray: ${gray};
    --black: ${black};

    --button-padding: ${buttonPadding};
    --button-border-radius: ${buttonBorderRadius};

    --page-width: ${pageWidth};
    --page-height: ${pageHeight};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard-Regular';
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ffb3b3, #fffefe);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Pretendard-Regular', Arial, sans-serif;
    overflow: hidden;
  }
`;
