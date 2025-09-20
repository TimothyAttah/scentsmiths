import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1200px;
  margin: auto;
`;

export const ProductItem = styled.div`
  width: 300px;
  margin: 20px 0;

  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  padding-top: 50px;
  @media screen and (max-width: 520px){
    text-align: center;
  }
`