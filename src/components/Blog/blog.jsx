import React from "react";
import { ReactComponent as IconVideo } from "image/svg/video-vertical.svg";
import styled from "styled-components";
import Bg1 from "image/png/Rectangle 5.png";
import Bg2 from "image/png/Rectangle 54.png";
import Bg3 from "image/png/Rectangle 46.png";
import Bg4 from "image/png/Rectangle 53.png";
import Bg5 from "image/png/Rectangle 55.png";
import Icon1 from "image/png/2212.w018.n002.1493B.p15 1.png";
import Icon2 from "image/png/Isolation_Mode.png";

export default function Blog() {
  return (
    <BoxContent>
      <div className="box-title">
        <div className="text-topic">
          <IconVideo />
          บทความและข่าวสารล่าสุด
        </div>
        <div>
          <button>ดูทั้งหมด</button>
        </div>
      </div>
      <BoxGrid>
        <div className="grid-container">
          <div>
            <BoxCard width={"280px"} templateColumns={"280px 1fr"} bdColor="rgba(8, 22, 49, 0.9)">
              <div className="image-container">
                <img src={Bg1} alt="Image bg" />
                <div>
                  <div>{"profit / loss of stocks in the portfolio".toLocaleUpperCase()}</div>
                  <img src={Icon1} alt="Image icon" />
                </div>
              </div>
              <div className="box-detail">
                <span className="box-btn">Business</span>
                <div className="text-topic">กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?</div>
                <div className="text-discription">
                  เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้น ในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ
                  ขาดทุนมากน้อยเท่าใด?
                </div>

                <div className="text-footer">
                  <div>29 กรกฎาคม 2023</div>
                  <div>เข้าชม 240 ครั้ง</div>
                </div>
              </div>
            </BoxCard>
            <BoxCard
              width={"280px"}
              templateColumns={"280px 1fr"}
              imgWidht={"100%"}
              imgBottom={"20%"}
              imgLeft={"10%"}
              imgHeight={"40%"}
              bdColor="rgba(0, 46, 61, 0.9)"
            >
              <div className="image-container">
                <img src={Bg2} alt="Image bg" />
                <div>
                  <div>{"What is a Data Engineer".toLocaleUpperCase()}</div>
                  <img src={Icon2} alt="Image icon" />
                </div>
              </div>
              <div className="box-detail">
                <span className="box-btn">Data</span>
                <div className="text-topic">Data Engineer คืออะไร?</div>
                <div className="text-discription">
                  Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือเพื่อ รวบรวมข้อมูลจัดการข้อมูลและ เปลี่ยนข้อมูลดิบ
                  ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst
                </div>

                <div className="text-footer">
                  <div>29 กรกฎาคม 2023</div>
                  <div>เข้าชม 240 ครั้ง</div>
                </div>
              </div>
            </BoxCard>
          </div>
          <div>
            <BoxCard width={"214px"} templateColumns={"214px 1fr"} bdColor="rgba(13, 46, 109, 0.8)">
              <div className="image-container">
                <img src={Bg3} alt="Image bg" />
                <div>
                  <div>สารแทนน้ำตาล ไม่อันตราย</div>
                </div>
              </div>
              <div className="box-detail">
                <span className="box-btn-none-border">Science</span>
                <div className="text-topic">สารแทนน้ำตาลไม่อันตราย</div>
                <div className="text-discription">
                  สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล
                </div>
              </div>
            </BoxCard>
            <BoxCard width={"214px"} templateColumns={"214px 1fr"} bdColor="rgba(21, 28, 89, 0.8)">
              <div className="image-container">
                <img src={Bg4} alt="Image bg" />
                <div>
                  <div>Data Pipelines with Airflow</div>
                </div>
              </div>
              <div className="box-detail">
                <span className="box-btn-none-border">Tech</span>
                <div className="text-topic">Data Pipelines with Airflow</div>
                <div className="text-discription">
                  เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด
                  ปรับให้อยู่ในรูปแบบที่เหมาะสม
                </div>
              </div>
            </BoxCard>
            <BoxCard width={"214px"} templateColumns={"214px 1fr"} bdColor="rgba(5, 45, 67, 0.8);">
              <div className="image-container">
                <img src={Bg5} alt="Image bg" />
                <div>
                  <div>ร่างกายสามารถ ย้อนวัย “อายุชีวภาพ” </div>
                </div>
              </div>
              <div className="box-detail">
                <span className="box-btn-none-border">Science</span>
                <div className="text-topic">ร่างกายสามารถ ย้อนวัย “อายุชีวภาพ” </div>
                <div className="text-discription">
                  ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย “อายุชีวภาพ” (biological age)
                  ซึ่งอาจจะแตกต่างจากอายุจริง
                </div>
              </div>
            </BoxCard>
          </div>
        </div>
      </BoxGrid>
    </BoxContent>
  );
}
const BoxContent = styled.div`
  margin-top: 10%;
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

const BoxCard = styled.div`
  box-shadow: 0px 0px 12px 0px #0000000a;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  width: 100%;
  height: ${(props) => props?.height || "auto"};
  display: grid;
  grid-template-columns: ${(props) => props?.templateColumns || "auto 1fr"};
  margin-bottom: 10px;

  .box-detail {
    width: 300px;
    padding: 20px;
    height: ${(props) => props?.height || "auto"};
    .text-footer {
      margin-top: 20%;
    }
    .box-btn {
      border: 1px solid rgba(0, 102, 94, 1);
    }
    .box-btn,
    .box-btn-none-border {
      border-radius: 59px;
      color: rgba(0, 102, 94, 1);
      padding: 8px 16px 8px 16px;
      font-size: 18px;
      font-weight: 400;
    }
    .text-topic {
      padding-top: 10%;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .image-container {
    position: relative;
    img {
      height: 100%;
      width: ${(props) => props?.width || "100%"};
    }
    div {
      position: absolute;
      top: 5%;
      left: 5%;
      z-index: 3;
      color: #fff;
      font-size: 26px;
      font-weight: 700;
      width: 190px;
      height: 100%;
      img {
        position: absolute;
        bottom: ${(props) => (props?.imgBottom ? props?.imgBottom : "5%")};
        left: ${(props) => (props?.imgLeft ? props?.imgLeft : "20%")};
        height: ${(props) => (props?.imgHeight ? props?.imgHeight : "45%")};
        width: ${(props) => (props?.imgWidht ? props?.imgWidht : "75%")};
      }
    }
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
    border-radius: 15px 0px 0px 15px;
  }
`;

const BoxGrid = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    margin-top: 20px;
    padding: 10px;
  }
`;
