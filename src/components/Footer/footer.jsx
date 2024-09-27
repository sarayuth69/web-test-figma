import React from "react";
import styled from "styled-components";
export default function Footer() {
  return <BoxContainer>Footer</BoxContainer>;
}

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 102, 94, 1);
  display: flex;
  justify-content: space-between;
  padding: 2% 10%;

  .box-logo {
    display: flex;
    align-items: center;
    gap: 5%;
    .text-logo {
      font-size: 34px;
      font-weight: 600;
      color: #00665e;
    }
    .text {
      color: #6a6a6a;
      font-size: 20px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .box-button {
    display: flex;
    align-items: center;
    gap: 2%;
    button {
      background: #efefef;
      border-radius: 18px;
      width: 135px;
      height: 42px;
      padding: 8px 16px 8px 16px;
      border-radius: 59px;
      background-color: #fff;
      border: 2px solid rgba(168, 173, 0, 1);
      color: rgba(168, 173, 0, 1);
      font-family: IBM Plex Sans Thai;
      font-size: 18px;
      font-weight: 400;
      :focus {
        background-color: rgba(168, 173, 0, 1);
      }
      :hover {
        background-color: rgba(168, 173, 0, 1);
      }
    }
  }
`;
