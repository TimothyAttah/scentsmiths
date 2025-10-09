import styled from 'styled-components';

export const ShippingContainer = styled.div`
	max-width: 700px;
	width: 100%;
	background-color: #fff;
	height: 100%;
	padding: 50px;
	border-radius: 20px;
	position: absolute;
	top: 150px;
	left: 50%;
	transform: translateX(-50%);
  z-index: 99999;
  overflow-y: scroll;
`;

export const ShippingCloseBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h4 {
    font-size: 22px;
  }

  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`

export const DeliveryDetailsContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 50px;
`
export const DeliveryDetailsFormContainer = styled.div`
	max-width: 600px;
	width: 100%;
	border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 50px 0;

	h4 {
		padding-bottom: 30px;
    letter-spacing: normal;
	}

	button {
		background-color: var(--teniColor2);
		color: #fff;
	}
`;

export const DeliveryDetailsInfoContainer = styled.div`
	max-width: 600px;
	width: 100%;
	border: 1px solid #ccc;


`;


export const DeliveryDetailsShippingContainer = styled.div`
	max-width: 600px;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 10px;
	padding: 20px;

	h4 {
		padding-bottom: 30px;
		letter-spacing: normal;
	}

	button {
		background-color: var(--teniColor2);
		color: #fff;
    margin-bottom: 20px;
	}

  p {
    display: flex;
    gap: 10px;
    /* padding-top: 20px; */
  }
`;

export const DeliveryDetailsShippingList = styled.div`
  width: 100%;


  button {
    width: 100%;
    height: 70px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px ;
    margin-bottom: 20px;

    div {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`
