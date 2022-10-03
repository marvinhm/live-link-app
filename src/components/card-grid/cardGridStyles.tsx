import styled from "styled-components";

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptop_l: "1440px",
  desktop: "2560px",
}

export const CardGridWrap = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8%;
  align-items: center;

  .hideModal, .hideCards {
    display: none
  }

  .showModal {
    background: #feefe6;
    display: block;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
    position: absolute;
    height: 200%;
    width: 100%;
  }

  .showCards {
    display: block;
  }

  @media (max-width: ${size.desktop}) {
    .showCards {
      width: 23%;
    }
  }

  @media (max-width: ${size.laptop_l}) {
    .showCards {
      width: 37%;
    }
  }

  @media (max-width: ${size.laptop}) {
    .showCards {
      width: 45%;
    }
  }

  @media (max-width: ${size.tablet}) {
    .showCards {
      width: 63%;
    }
  }

  @media (max-width: ${size.mobile}) {
    .showCards {
      width: 100%;
    }
  }

  `