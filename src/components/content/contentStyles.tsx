import styled from 'styled-components';

export const ContentWrap = styled.div`
  /* background: black; */
  font-color: white;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-container {
    display: flex;
    justify-content: center;
    width: 100%;
    .content {
      height: 100%;
      width: 75%;
    }
  }
`;