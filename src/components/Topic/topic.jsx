import React from "react";
import { TopicData } from "./container";
import styled from "styled-components";
import { ReactComponent as IconVideo } from "image/svg/video-vertical.svg";
import { ReactComponent as IconVector } from "image/svg/Vector.svg";

export default function Topic() {
  return (
    <BoxContent>
      <div className="text-topic">
        <IconVideo />
        เลือกเรียนตามหัวข้อที่สนใจ
      </div>
      <div className="box-content-detal">
        {TopicData?.map((item) => {
          return (
            <BoxCard>
              <div className="box-img">
                <img src={item.icon} alt="icon" />
                <div className="text-topic">{item.name}</div>
              </div>
              <div className="box-text">
                <div className="text-discription">{item.discription}</div>
              </div>
              <div className="box-button">
                <div>
                  <IconVector />
                </div>
              </div>
            </BoxCard>
          );
        })}
      </div>
    </BoxContent>
  );
}

const BoxContent = styled.div`
  margin-top: 10%;
  .box-content-detal {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2%;
  }
  .text-topic {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const BoxCard = styled.div`
  height: 223px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 0px #0000000a;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  .box-button {
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 20px;
    margin-top: 10%;
    cursor: pointer;
  }
  .box-img {
    display: flex;
    align-items: center;
    gap: 20px;
    .text-topic {
      font-size: 18px;
      font-weight: 600;
    }
  }
  .box-text {
    margin-top: 20px;
    .text-discription {
      font-size: 16px;
      font-weight: 400;
      color: #6a6a6a;
    }
  }
`;
