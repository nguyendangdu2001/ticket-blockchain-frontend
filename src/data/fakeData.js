import img1 from "@assets/img/event1.jpg";
import img2 from "@assets/img/event2.jpg";
import img3 from "@assets/img/event3.jpg";
import img4 from "@assets/img/event4.jpg";
import img5 from "@assets/img/event5.jpg";
import img6 from "@assets/img/event6.jpg";
import img7 from "@assets/img/event7.jpg";
import img8 from "@assets/img/event8.jpg";
import img9 from "@assets/img/event9.jpg";
import img10 from "@assets/img/event11.jpg";
import img11 from "@assets/img/event12.jpg";
import img12 from "@assets/img/event13.jpg";
import img13 from "@assets/img/event14.jpg";
import img14 from "@assets/img/event15.jpg";
import img15 from "@assets/img/event16.jpg";
import img16 from "@assets/img/event17.jpg";
import img17 from "@assets/img/event18.jpg";
import img18 from "@assets/img/event10.jpg";
import img19 from "@assets/img/event11.jpg";

export const fakeData = [
  {
    id: 1,
    name: "Dream World Wide In Jakata", //tên của sk
    date: "Saturday, Sep 14, 2019 at 20:30 PM", //ngày diễn ra sk cứ ghi đúng theo fomat là đc
    price: 12, //giá tính bằng USD
    // lat lng là toạ độ trên gg map nhung vào gg map lấy toạ độ bỏ vào đây làm tròn thành số nguyên luôn
    //name là tên của địa điểm
    location: { lat: 100, lng: 100, name: "Jakata" },
    //tag thì ưng tag gì vào cũng đc
    tag: [
      "Indonesia",
      "event",
      "jakata",
      "UI",
      "Thing to di in jakata",
      "Jakarta Seminar",
    ],
    //tên người tạo ra sự kiện
    host: {
      name: "Wade",
    },
    img: img1,
  },
  {
    id: 19,
    name: "Aomori Nebuta Festival",
    date: "Sat, Aug 02, 2018 at 17:00 PM",
    price: 0,
    location: {
      lat: 40.816088143022384,
      lng: 140.74769259125355,
      name: "Cambridge, Massachusetts",
    },
    tag: ["Aomori", "event", "Japan", "Kabuki"],
    host: {
      name: "Dave",
    },
    img: img2,
  },
  {
    id: 18,
    name: "Awa Odori Festival",
    date: "Sat, Aug 12, 2018 at 08:00 AM",
    price: 0,
    location: {
      lat: 34.092637812819234,
      lng: 134.49031380775617,
      name: "Georgetown, Texas",
    },
    tag: ["Tokushima", "event", "Japan"],
    host: {
      name: "Seth",
    },
    img: img3,
  },
  {
    id: 17,
    name: "Tenjin Festival",
    date: "Sat, July 24, 2018 at 08:00 AM",
    price: 0,
    location: {
      lat: 34.69137453918183,
      lng: 135.51594230003022,
      name: "Allen, Texas",
    },
    tag: ["Osaka ", "event", "Japan"],
    host: {
      name: "Ivan",
    },
    img: img4,
  },
  {
    id: 16,
    name: "Hakata Gion Yamakasa",
    date: "Sat, July 01, 2018 at 08:00 AM",
    price: 0,
    location: {
      lat: 33.5801077833826,
      lng: 130.44366041036125,
      name: "Dallas, Texas",
    },
    tag: ["Hakata ", "event", "Japan"],
    host: {
      name: "Riley",
    },
    img: img5,
  },
  {
    id: 15,
    name: "Sanja Festival",
    date: "Sat, May 18, 2019 at 08:00 AM",
    price: 0,
    location: {
      lat: 35.75306307328915,
      lng: 139.25511113451026,
      name: "Corpus Christi, Texas",
    },
    tag: ["Tokyo ", "event", "Japan"],
    host: {
      name: "Gilbert",
    },
    img: img6,
  },
  {
    id: 14,
    name: "Kanamara Festival",
    date: "Sat, April 07, 2019 at 08:00 AM",
    price: 0,
    location: {
      lat: 35.75306307328915,
      lng: 139.25511113451026,
      name: "ALIQUIPPA, Pennsylvania",
    },
    tag: ["Tokyo ", "event", "Japan"],
    host: {
      name: "Jorge",
    },
    img: img7,
  },
  {
    id: 13,
    name: "Sapporo Snow Festival",
    date: "Sat, Nov 06, 2017 at 08:00 AM",
    price: 0,
    location: {
      lat: 43.75704575295194,
      lng: 143.22649102662496,
      name: "Eugene, Oregon",
    },
    tag: ["Hokkaido ", "event", "Japan"],
    host: {
      name: "Dan",
    },
    img: img8,
  },
  {
    id: 12,
    name: "Nagasaki Kunchi",
    date: "Sat, Oct 01, 2017 at 08:00 AM",
    price: 0,
    location: {
      lat: 32.88143713141328,
      lng: 129.77438122959393,
      name: "Academy, South Dakota",
    },
    tag: ["Nagasaki Kunchi", "event", "Japan"],
    host: {
      name: "Brian",
    },
    img: img9,
  },
  {
    id: 11,
    name: "Meadowlands Event Design",
    date: "Sat, jun 01, 2018 at 17:00 PM",
    price: 0,
    location: {
      lat: 10.782453518386912,
      lng: 106.70766013540927,
      name: "Little Rock, Arkansas",
    },
    tag: ["Viet Nam", "event", "Sai Gon", "VBA 2019", "Danang Dragon"],
    host: {
      name: "Roberto",
    },
    img: img10,
  },
  {
    id: 10,
    name: "Highwood Terrace Events",
    date: "Thu, May 31, 2018 at 17:00 PM",
    price: 0,
    location: {
      lat: 10.782453518386912,
      lng: 106.70766013540927,
      name: "Roseville, Michigan",
    },
    tag: ["Viet Nam", "event", "Sai Gon", "VBA"],
    host: {
      name: "Ramon",
    },
    img: img11,
  },
  {
    id: 9,
    name: "Ivy and Fairy Lights Events",
    date: "Sun, Sep 10, 2017 at 17:00 PM",
    price: 0,
    location: {
      lat: 16.046734959563402,
      lng: 9108.21532003513217,
      name: "Trappe, Michigan",
    },
    tag: ["Viet Nam", "event", "Da Nang", "VBA"],
    host: {
      name: "Miles",
    },
    img: img12,
  },
  {
    id: 8,
    name: "VBA mùa giải 2016",
    date: "Sat, Aug 06, 2016 at 17:00 PM",
    price: 0,
    location: {
      lat: 16.046734959563402,
      lng: 108.21532003513217,
      name: "Lafayette, Louisiana",
    },
    tag: ["Viet Nam", "event", "Da Nang", "VBA"],
    host: {
      name: "Liam",
    },
    img: img13,
  },
  {
    id: 7,
    name: "RAP SHOW 30/04/2021",
    date: "Sat, Jun 12, 2021 at 17:30 PM",
    price: 0,
    location: {
      lat: 16.040882590368447,
      lng: 108.23490614791315,
      name: "Loa, Utah",
    },
    tag: ["Viet Nam", "event", "Da Nang", "Asia Park"],
    host: {
      name: "Nathaniel",
    },
    img: img14,
  },
  {
    id: 6,
    name: "Countdown 2021 Heineken",
    date: "Thu, Dec 31, 2020 at 19:30 PM",
    price: 0,
    location: {
      lat: 16.040882590368447,
      lng: 108.23490614791315,
      name: "Las Vegas, Nevada",
    },
    tag: ["Viet Nam", "event", "Da Nang", "Heineken"],
    host: {
      name: "Ethan",
    },
    img: img15,
  },
  {
    id: 5,
    name: "Cambridge Avenue Events",
    date: "Thu, Dec 31, 2020 at 19:30 PM",
    price: 0,
    location: {
      lat: 10.782453518386912,
      lng: 106.70766013540927,
      name: "St Louis, Missouri",
    },
    tag: ["Viet Nam", "event", "Sai Gon", "Countdown2021"],
    host: {
      name: "Lewis",
    },
    img: img16,
  },
  {
    id: 4,
    name: "Countdown 2021",
    date: "Thu, Dec 31, 2020 at 19:30 PM",
    price: 0,
    location: {
      lat: 21.029468456090026,
      lng: 105.85218099705742,
      name: "New York, Queens",
    },
    tag: ["Viet Nam", "event", "Ha Noi", "Countdown2021"],
    host: {
      name: "Milton",
    },
    img: img17,
  },
  {
    id: 3,
    name: "Evening Unfolds Events",
    date: "Fri, Jan 01, 2021 at 00:00 AM",
    price: 0,
    location: {
      lat: 21.029468456090026,
      lng: 105.85218099705742,
      name: "Reno, Nevada",
    },
    tag: ["us", "event", "Ha Noi", "Tet Holiday"],
    host: {
      name: "Claude",
    },
    img: img18,
  },
  {
    id: 2,
    name: "Painted Desert Event Designs",
    date: "Sunday, Sep 15, 2019 at 08:30 AM",
    price: 0,
    location: {
      lat: 21.03659548143587,
      lng: 105.83598361631618,
      name: "Fresno, California",
    },
    tag: ["us", "event", "paint", "desert"],
    host: {
      name: "Joshua",
    },
    img: img19,
  },
];
