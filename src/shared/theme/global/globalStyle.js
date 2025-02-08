import { css } from '@emotion/react';

// font size 정의
const fontSm = '14px';
const fontMd = '16px';
const fontLg = '18px';
const fontXl = '20px';
const fontXxl = '24px';

// global color 정의
const red = '#e10707';
const pink = '#FFB3B3';
const lightGray = '#f6f3f3';
const gray = '#c2c2c2';
const black = '#2E2E2E';

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

  @font-face {
    font-family: 'BMJUA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --font-sm: ${fontSm};
    --font-md: ${fontMd};
    --font-lg: ${fontLg};
    --font-xl: ${fontXl};
    --font-xxl: ${fontXxl};

    --red: ${red};
    --pink: ${pink};
    --lightGray: ${lightGray};
    --gray: ${gray};
    --black: ${black};
    --pink: ${pink};
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
    font-family: 'Pretendard-Regular', 'BMJUA', Arial, sans-serif;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ffb3b3, #fffefe);
    display: flex;
    justify-content: center;
    font-size: var(--font-md);
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
`;
