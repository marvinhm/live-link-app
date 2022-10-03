import styled from "styled-components";

export const CardWrap = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 12px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 8%;
  min-width: 207px;
  padding-top: 5%;
  padding-bottom: 2%;

  .left {
    margin-left: 5%;
  }

  .right {
    margin-right: 6%;
    font-size: 13px;
    text-align: left;
    display: flex;
    flex-direction: column;

    h3 {
      margin-top: 0px;
      margin-bottom: 0;
    }
  }

  h1 {
    margin-bottom: 3px;
  }

  .user-image-circle {
    height: 105px;
  }

`