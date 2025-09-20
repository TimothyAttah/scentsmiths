import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'EMprint';
  src: url('fonts/EMprint Bold.woff2') format('woff2');
  src: url('fonts/EMprint Light.woff2') format('woff2');
  src: url('fonts/EMprint Regular.woff2') format('woff2');
  /* src: url('fonts/EMprint Semibold.woff2') format('woff2'); */

}

  :root {
    --crimson: rgb(220, 20, 60);
    
    --brown: rgb(255, 115, 0);
    --brown-primary: rgb(129 59 1);
    --green: rgb(81, 128, 11);
    --blue:rgb(40, 115, 208);
    --black: #000;

    --first-color: hsl(220, 68%, 54%);
    --first-color-lighten: hsl(220, 68%, 97%);
    --title-color: hsl(220, 48%, 28%);
    --text-color: hsl(220, 12%, 45%);
    --body-color: hsl(220, 100%, 99%);
    --color-black: #000000;
    --color-light-blue: #009dd9;
    --color-medium-blue: #0066b2;
    --color-dark-blue: #0b2d71;

    --teniColor: #B76E79;

    --teniColor2: rgb(183, 110, 121)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    /* font-family: "Poppins", sans-serif; */
    font-family: "EMprint", sans-serif;
  }

  body {
    max-width: 2000px;
    width: 100%;
    margin: auto;
    /* border: 5px solid red; */
    overflow-x: hidden;
    /* background-color: #0d1117; */
    /* background-color: #e6edf3; */
    color: #e6edf3;
    color: #0d1117;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    :focus {
      border: none;
     outline: none;
    }
  }

  ul li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  input {
    border: none;
    outline: none;

    &:focus {
      border: none;
    outline: none;
    }
  }

  .activeHeader {
    /* background: linear-gradient(90deg, rgb(66,2,194 ), 0%, rgb(0, 78, 194) 100%); */

    background: linear-gradient(90deg, rgba(246, 108, 2, 1), 0%, rgba(255, 117, 12, 1) 100%);

    color: #fff;

    a {
      color: #fff;
    }
  }

  .embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
  width: 100%;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.div {
  background-image: linear-gradient(to right top, #ff7300, #ff5f5d, #ff639b, #ed7acb, #bf92e6, #9fa4f5, #80b3fb, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}

.div1 {
  background-image: linear-gradient(to right bottom, #ff7300, #fd7c2b, #fb8444, #f78d59, #f1966d, #ef9872, #ee9a77, #ec9c7c, #f09875, #f4936d, #f78f66, #fb8a5f);
}

.div3 {
  background-image: linear-gradient(to right bottom, #ff7300, #b68800, #738b0b, #398440, #00765e);
}

.div4 {
  background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
}
`;