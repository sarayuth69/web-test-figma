import React from "react";
import styled from "styled-components";
import IconAvatar from "../../image/svg/Ellipse 1.svg";
import IconArrow from "../../image/svg/arrow-down.svg";

export default function Navber() {
  return (
    <BoxContainer>
      <div className="box-logo">
        <div className="text-logo">LOGO</div>
        <div className="text">รายวิชา</div>
        <div className="text">ถ่ายทอดสด</div>
        <div className="text">กระทู้คำถาม</div>
      </div>
      <div className="box-button">
        <div>
          <button>ออกจากระบบ</button>
        </div>
        <div>
          <div class="dropdown">
            <img src={IconAvatar} alt="avatar" />
            <span>Siriwat Rachanon</span>
            <img src={IconArrow} alt="IconArrow" />
            <div class="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
        </div>
      </div>
    </BoxContainer>
  );
}

const BoxContainer = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: 2fr 1fr;
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
    justify-content: end;
    gap: 2%;

    button {
      background: #efefef;
      border-radius: 18px;
      padding: 18px 24px;
      border: none;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      font-family: IBM Plex Sans Thai !important;
    }
  }
  .dropdown {
    position: relative;
    background-color: #000;
    border-radius: 18px;
    color: #fff;
    padding: 18px 24px;
    width: 243px;
    display: flex;
    align-items: center;
    gap: 5%;
    justify-content: center;
  }
  .dropdown-content {
    top: 100%;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    z-index: 1;
    color: #000;
    left: 0%;
    padding: 10px;
    border-radius: 18px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .dropdown:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }
`;
