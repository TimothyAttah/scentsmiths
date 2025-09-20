import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
	width: 100%;
	height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
	background: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;

const Overlay = ({onClick}) => {
  return (
    <OverlayContainer onClick={onClick}></OverlayContainer>
  )
}

export default Overlay