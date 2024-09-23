import React from "react";
import IconNoteBook from "../../image/png/Rectangle 2.png";
import IconKeyBoard from "../../image/png/Rectangle 3.png";
import IconMac from "../../image/png/Rectangle 9.png";
import IconVector from "../../image/png/Vector 1.png";

import IconAvatar from "../../image/svg/Ellipse 1.svg";
import IconAvatarWoman from "../../image/svg/Ellipse 3.svg";
import IconAvatarMan from "../../image/svg/Ellipse 4.svg";
import IconSearch from "../../image/svg/search-normal.svg";

import { CardAI, CardGPT, CardUX, BoxContainer, BoxTextTitle } from "./title.style";
export default function Title() {
  return (
    <BoxContainer>
      <BoxTextTitle IconSearch={IconSearch}>
        <div className="text-Lorem">Lorem Ipsum is simply dummy .</div>
        <div className="text-learn">
          learn anytime, anywhere
          <span>
            <div>
              with
              <span className="text-weight">
                Lorem
                <div className="box-img-vector">
                  <img src={IconVector} alt="Vector" />
                </div>
              </span>
            </div>
          </span>
        </div>
        <div className="box-search">
          <input type="text" placeholder="ค้นหาหลักสูตร" />
          <button>ค้นหา</button>
        </div>
      </BoxTextTitle>
      <div>
        <div style={{ display: "flex", gap: "10px" }}>
          <CardAI>
            <div class="image-container">
              <img src={IconNoteBook} alt="Image bg" />
              <div class="box-detail">
                <div class="box-text">
                  <div className="text-title">Generative AI and ChatGPT:</div>
                  <div className="text-title"> Design Thinking Edition</div>
                  <div className="text-sub-title">ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI</div>
                  <div className="text-footer">
                    <div>
                      <img src={IconAvatar} alt="Image avatar" />
                    </div>
                    <div>
                      <p className="name"> ณัฐกานต์ สิทธิชัยอนันต์ </p>
                      <p className="position">CEO Y.I.M Corporation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardAI>
          <CardGPT>
            <div class="image-container">
              <img src={IconKeyBoard} alt="Image bg" />
              <div class="box-detail">
                <div class="box-text">
                  <div className="text-transform">
                    <div className="text-title">Generative ChatGPT: </div>
                    <div className="text-title"> UX Design Edition</div>
                  </div>

                  <div className="text-footer">
                    <div>
                      <img src={IconAvatarWoman} alt="Image avatar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardGPT>
          <CardUX>
            <div class="image-container">
              <img src={IconMac} alt="Image bg" />
              <div class="box-detail">
                <div class="box-text">
                  <div className="text-transform">
                    <div className="text-title">UX Accelerator </div>
                    <div className="text-title">Bundle</div>
                  </div>
                  <div className="text-footer">
                    <div>
                      <img src={IconAvatarMan} alt="Image avatar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardUX>
        </div>
      </div>
    </BoxContainer>
  );
}
