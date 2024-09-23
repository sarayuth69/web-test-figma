import styled from "styled-components";

export const CardAI = styled.div`
  position: relative;
  width: 412px;
  height: 548px;
  border-radius: 32px;
  .image-container {
    position: relative;
    display: inline-block;
  }
  .image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 46, 42, 0.9);
    z-index: 1;
    border-radius: 32px;
  }
  .box-text {
    padding: 3% 5% 5% 10%;
  }
  .box-detail {
    content: "";
    position: absolute;
    top: 5%;
    width: 90%;
    height: 100%;
    z-index: 3;
    .text-sub-title {
      color: #ffffff;
      font-size: 24px;
      font-weight: 400;
    }
    .text-title {
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
    }
    .text-footer {
      width: 100%;
      position: absolute;
      bottom: 10%;
      display: flex;
      align-items: center;
      gap: 2%;
      color: #ffffff;
      font-size: 14px;
      .name {
        font-weight: 600;
      }
      img {
        width: 55.45px;
        height: 55.45px;
      }
      p {
        margin: 0 0 5px 0;
      }
    }
  }

  .image-container img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const CardGPT = styled.div`
  position: relative;
  width: 150px;
  height: 548px;
  border-radius: 32px;
  .image-container {
    position: relative;
    display: inline-block;
  }
  .image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(149, 255, 229, 0.9);
    z-index: 1;
    border-radius: 32px;
  }
  .box-text {
    padding: 3% 5% 5% 10%;
  }
  .box-detail {
    content: "";
    position: absolute;
    top: 35%;
    width: 90%;
    height: 100%;
    z-index: 3;
    .text-title {
      color: #000;
      font-size: 26px;
      font-weight: 700;
      width: 264px;
    }
    .text-transform {
      transform: rotate(-90deg);
    }

    .text-footer {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 20%;
      display: flex;
      align-items: center;
      gap: 2%;
      color: #ffffff;
      font-size: 14px;
      .name {
        font-weight: 600;
      }
      img {
        width: 55.45px;
        height: 55.45px;
      }
      p {
        margin: 0 0 5px 0;
      }
    }
  }
  .image-container img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const CardUX = styled.div`
  position: relative;
  width: 150px;
  height: 548px;
  border-radius: 32px;
  .image-container {
    position: relative;
    display: inline-block;
  }
  .image-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(252, 255, 139, 0.9);
    z-index: 1;
    border-radius: 32px;
  }
  .box-text {
    padding: 3% 5% 5% 10%;
  }
  .box-detail {
    content: "";
    position: absolute;
    top: 25%;
    width: 90%;
    height: 100%;
    z-index: 3;
    .text-title {
      color: #000;
      font-size: 26px;
      font-weight: 700;
      width: 264px;
    }
    .text-transform {
      transform: rotate(-90deg);
    }

    .text-footer {
      width: 100%;
      position: absolute;
      top: 60%;
      left: 20%;
      display: flex;
      align-items: center;
      gap: 2%;
      color: #ffffff;
      font-size: 14px;
      .name {
        font-weight: 600;
      }
      img {
        width: 55.45px;
        height: 55.45px;
      }
      p {
        margin: 0 0 5px 0;
      }
    }
  }
  .image-container img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const BoxTextTitle = styled.div`
  .box-search {
    display: flex;
    margin-top: 30%;
    input {
      background: #fff;
      border-radius: 12px 0px 0px 12px;
      border: 1px solid #d9d9d9;
      padding: 15px 20px;
      width: 100%;
      font-family: IBM Plex Sans Thai !important;
    }
    input[type="text"] {
      width: 100%;
      background-image: ${(props) => (props.IconSearch ? `url(${props.IconSearch})` : ``)};
      background-position: 10px 10px;
      background-repeat: no-repeat;
      padding: 12px 20px 12px 40px;
    }
    button {
      background: #a8ad00;
      border-radius: 0px 12px 12px 0px;
      padding: 15px 20px;
      color: #ffffff;
      border: none;
      font-family: IBM Plex Sans Thai !important;
    }
  }
  .text-Lorem {
    font-size: 18px;
    font-weight: 500;
    color: #00665e;
  }
  .text-learn {
    font-size: 52px;
    font-weight: 600;
    width: 360px;
    .text-weight {
      font-size: 52px;
      font-weight: 700;
      color: #00665e;
      margin-left: 15px;
      position: relative;
      .box-img-vector {
        position: absolute;
        left: -20%;
        top: 50%;
      }
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding-top: 3%;
`;
