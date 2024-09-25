import React from "react";
import styled from "styled-components";
import { coursesData } from "./container";
import { ReactComponent as IconVideo } from "image/svg/video-vertical.svg";

export default function Courses() {
  return (
    <BoxContent>
      <div className="box-title">
        <div className="text-topic">
          <IconVideo />
          คอร์สของฉัน
        </div>
        <div>
          <button>ดูทั้งหมด</button>
        </div>
      </div>

      <BoxCard>
        {coursesData?.map((item, index) => {
          return (
            <BoxDetal bdColor={item?.bg_color}>
              <div className="image-container" key={index}>
                <img src={item?.bg_image} alt="Image bg" />
                <div className="box-detail">
                  <div className="box-text">
                    <div className="text-title">{item?.title}</div>
                  </div>
                </div>
              </div>
              <BoxDiscription percen={item?.percen}>
                <div>{item?.discription}</div>
                <div className="pencel">
                  เรียนไปแล้ว <b>{item?.percen}%</b>
                </div>
                <div className="progress-bar">
                  <div className="pencel-par"></div>
                </div>
              </BoxDiscription>
            </BoxDetal>
          );
        })}
      </BoxCard>
    </BoxContent>
  );
}

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

const BoxDetal = styled.div`
  width: auto;
  margin-top: 20px;
  display: grid;
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
    height: 152px;
    background: ${(props) => (props?.bdColor ? props?.bdColor : "")};
    z-index: 1;
    border-radius: 24px 24px 0px 0px;
  }
  .box-text {
    padding: 3% 5% 5% 10%;
  }
  .box-detail {
    content: "";
    position: absolute;
    top: 5%;
    width: 90%;
    z-index: 3;
    .text-sub-title {
      color: #ffffff;
      font-size: 24px;
      font-weight: 400;
    }
    .text-title {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
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
    height: 152px;
  }
`;

const BoxCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2%;
`;
