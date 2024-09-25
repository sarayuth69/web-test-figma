import React from "react";
import styled from "styled-components";
import { coursesData } from "./container";
import { ReactComponent as IconVideo } from "image/svg/video-vertical.svg";

export default function CoursesOnline() {
  return (
    <BoxContent>
      <div className="box-title">
        <div className="text-topic">
          <IconVideo />
          คอร์สออนไลน์
        </div>
        <div>
          <button>ดูทั้งหมด</button>
        </div>
      </div>

      <BoxCard>
        {coursesData?.map((item, index) => {
          return (
            <BoxDetal bdColor={item?.bg_color} color={index % 2 === 0}>
              <div className="image-container" key={index}>
                <img src={item?.bg_image} alt="Image bg" />
                <div className="box-detail">
                  <span className="box-header">{item?.header}</span>
                  <div className="box-text">
                    <div className="text-title">{item?.title}</div>
                    <div className="text-discription">{item?.discription}</div>
                    <div className="text-footer">
                      <img src={item?.coach?.avatar} alt="Image bg" />
                      <div className="text-coach">
                        <b>{item?.coach?.name}</b>
                        <p>{item?.coach?.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BoxDetal>
          );
        })}
      </BoxCard>
    </BoxContent>
  );
}
const BoxDetal = styled.div`
  width: auto;
  height: 548px;
  margin-top: 20px;
  display: grid;
  .text-coach {
    color: ${(props) => (props?.color ? "#000" : "#fff")};
  }

  .box-header {
    color: ${(props) => (props?.color ? "#7B7B7B" : "#B6B6B6")};
    border: ${(props) => (props?.color ? "1px solid #7B7B7B" : "1px solid #D9D9D9")};
    padding: 8px 16px 8px 16px;
    gap: 10px;
    border-radius: 59px;
    margin-left: 10%;
    color: #7b7b7b;
  }
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
    background: ${(props) => (props?.bdColor ? props?.bdColor : "")};
    z-index: 1;
    border-radius: 20px;
  }
  .box-text {
    padding: 5% 5% 5% 10%;
    margin-top: 10px;
  }
  .box-detail {
    content: "";
    position: absolute;
    top: 5%;
    width: 90%;
    height: 100%;
    z-index: 3;
    .text-discription {
      margin-top: 5%;
      color: ${(props) => (props?.color ? "#000" : "#fff")};
      font-size: 20px;
      font-weight: 400;
    }
    .text-title {
      color: ${(props) => (props?.color ? "#000" : "#fff")};
      font-size: 24px;
      font-weight: 700;
    }
    .text-footer {
      width: 100%;
      position: absolute;
      bottom: 10%;
      display: flex;
      align-items: center;
      gap: 5%;
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
    height: 100%;
  }
`;

const BoxContent = styled.div`
  margin-top: 5%;
  .box-title {
    display: flex;
    justify-content: space-between;
  }
  .text-topic {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  button {
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
`;
const BoxDiscription = styled.div`
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.04);
  background: rgba(255, 255, 255, 1);
  padding: 10px;
  .progress-bar {
    width: 100%;
    background-color: #ddd;
    height: 8px;
    border-radius: 60px;
  }

  .pencel-par {
    width: ${(props) => props?.percen}%;
    height: 8px;
    background-color: rgba(168, 173, 0, 1);
    text-align: center;
    line-height: 30px;
    border-radius: 60px;
  }
`;

const BoxCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2%;
`;
