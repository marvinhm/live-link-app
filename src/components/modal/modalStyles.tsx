import styled from 'styled-components';

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptop_l: "1440px",
  desktop: "2560px",
}

export const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
  }

  @media (max-width: ${size.desktop}) {
    #modal {
      width: 35%;
    }
  }

  @media (max-width: ${size.laptop_l}) {
    #modal {
      width: 37%;
    }
  }

  @media (max-width: ${size.laptop}) {
    #modal {
      width: 45%;
    }
  }

  @media (max-width: ${size.tablet}) {
    #modal {
      width: 63%;
    }
  }

  @media (max-width: ${size.mobile}) {
    #modal {
      width: 84%;
    }
`;