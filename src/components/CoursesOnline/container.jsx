import BG1 from "image/png/Rectangle 15.png";
import BG2 from "image/png/Rectangle 32.png";
import BG3 from "image/png/Rectangle 34.png";
import BG4 from "image/png/Rectangle 36.png";
import Avatar1 from "image/svg/a1.svg";
import Avatar2 from "image/svg/a2.svg";
import Avatar3 from "image/svg/a3.svg";
import Avatar4 from "image/svg/a4.svg";

export const coursesData = [
  {
    id: 1,
    header: "Business",
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    discription: "รู้และเข้าใจปัจจัยที่ส่งผลกระทบต่อราคาหุ้น",
    bg_color: "rgba(252, 255, 139, 0.9)",
    bg_image: BG1,
    coach: {
      name: "ณัฐกานต์ สิทธิชัยอนันต์",
      position: "CEO Y.I.M Corporation",
      avatar: Avatar1,
    },
  },
  {
    id: 2,
    header: "Data",
    title: "Progressive Web Application",
    discription: "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    bg_color: "rgba(0, 13, 46, 0.9)",
    bg_image: BG2,
    coach: {
      name: "ปัญจมพงศ์ เสริมสวัสดิ์ศร",
      position: "Google Developers",
      avatar: Avatar2,
    },
  },
  {
    id: 3,
    header: "Science",
    title: "React Hooks in Action",
    discription: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    bg_color: "rgba(149, 255, 229, 0.9)",
    bg_image: BG3,
    coach: {
      name: "วรัทธน์ วงศ์มณีกิจ",
      position: "Co-Founder",
      avatar: Avatar3,
    },
  },
  {
    id: 4,
    header: "Tech",
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    discription: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    bg_color: "rgba(6, 0, 46, 0.69)",
    bg_image: BG4,
    coach: {
      name: "ทัศน์พล รัชตะสัมฤทธิ์",
      position: "Software Engineer",
      avatar: Avatar4,
    },
  },
];
