export const data = [
    {
        id: 1,
        state: "작성중",
        date : "2024.04.01",
        time : "09:00",
        shelter : "요양병원", 
        region : "서울시 양천구",
        rating : "1등급",
        size : "대형",
        class : "고급형",
    },
    {
        id: 2,
        state: "신청완료",
        date : "2024.04.02",
        time : "09:00",
        shelter : "요양원", 
        region : "서울시 양천구",
        rating : "신설기관",
        size : "소형",
        class : "일반형",
    },
    {
        id: 3,
        state: "상담완료",
        date : "2024.04.04",
        time : "09:00",
        shelter : "주야간보호", 
        region : "서울시 양천구",
        rating : "3등급",
        size : "중형",
        class : "일반형",
     },
    {
        id: 4,
        state: "상담완료",
        date : "2022.01.01",
        time : "09:00",
        shelter : "방문시설", 
        region : "서울시 강서구",
        rating : "1등급",
        size : "대형",
        class : "실속형",
    },
  ]

  export const steps = [
    {
      title: "1단계",
      description: "요양시설 선택",
    },
    {
      title: "2단계",
      description: "요양 프로그램 선택",
    },
    {
      title: "3단계",
      description: "환자 상태 입력",
    },
    {
      title: "4단계",
      description: "개인정보 이용동의",
    },
  ];

export const shelters = [
    {
        id: 1,
        title: "요양병원",
        detail: "요양병원은 의료기관으로, 병원 수준의 의료 서비스를 제공합니다.",
    },
    {
        id: 2,
        title: "요양원",
        detail: "요양원은 거주자들에게 의료 서비스뿐만 아니라 일상적인 돌봄과지원을 제공합니다.",
    },
    {
        id: 3,
        title: "주야간보호 시설",
        detail: "주로 가족들이 일을 하고 있는 동안 노인 가족 구성원이나 장애를 가진 가족 구성원을 돌보기 위해 이용됩니다.",
    },
    {
        id: 4,
        title: "방문 시설",
        detail: "일시적으로 노인이나 장애인을 돌보거나 관리하기 위한 시설입니다.",
    }
]

export const consultingList = [
    {
        id: 1,
        title: "강북휴요양병원",
        grade: "1등급",
        place: "서울특별시 강북구 도봉로 161",
        size : "중형",
        call: "02-1234-1234",
        shelter : "요양병원",
        info : "암특화, 암한방협진",
        price: "637,668",
    },
    {
      id: 2,
      title: "강북실버종합복지센터",
      grade: "1등급",
      place: "서울특별시 강북구 오패산로 290",
      size : "대형",
      call: "02-1234-1234",
      shelter : "요양원",
      info : "재활특화, 치매특화",
      price: "734,100",
    },
    {
      id: 3,
      title: "강북휴요양병원",
      grade: "1등급",
      place: "서울특별시 강북구 도봉로 161",
      size : "대형",
      call: "02-1234-1234",
      shelter : "요양병원",
      info : "암특화, 암한방협진",
      price: "637,668",
    },
    {
      id: 4,
      title: "강북휴요양병원",
      grade: "1등급",
      place: "서울특별시 강북구 도봉로 161",
      size : "대형",
      call: "02-1234-1234",
      shelter : "요양병원",
      info : "암특화, 암한방협진",
      price: "637,668",
    }
]

export const UserData = [
    {
      id: 1,
      userName: "이채린",
      userProfile: require(`../../asset/test_profile.jpeg`),
      city: "서울",
      dong: "강북구",
      rank: "1등급",
      size: "중형",
      grade: "실속형",
      shelter: "요양병원",
      problem: ["암한방협진", "암특화", "치매특화"],
      price: "월 50~100만원",
    },
    {
      id: 2,
      userName: "이채린",
      city: "서울",
      dong: "강북구",
      rank: "1등급",
      size: "중형",
      grade: "실속형",
      shelter: "요양병원",
      problem: ["암한방협진", "암특화", "치매특화"],
      price: "월 50~100만원",
    },
    {
      id: 3,
      userName: "이채린",
      city: "서울",
      dong: "강북구",
      rank: "1등급",
      size: "중형",
      grade: "실속형",
      shelter: "요양병원",
      problem: ["암한방협진", "암특화", "치매특화"],
      price: "월 50~100만원",
    }
]


export const estimateList = [
  {
      id: 1,
      title: "한마음 요양원 1인실 견적서",
      grade: "1등급",
      place: "서울특별시 강북구 도봉로 161",
      size : "중형",
      call: "02-1234-1234",
      shelter : "요양병원",
      info : "암특화, 암한방협진",
      price: "637,668",
  },
  {
    id: 2,
    title: "강북실버종합복지센터 다인실 견적서",
    grade: "1등급",
    place: "서울특별시 강북구 오패산로 290",
    size : "대형",
    call: "02-1234-1234",
    shelter : "요양원",
    info : "재활특화, 치매특화",
    price: "734,100",
  },
  {
    id: 3,
    title: "강북휴요양병원 2인실 견적서",
    grade: "1등급",
    place: "서울특별시 강북구 도봉로 161",
    size : "대형",
    call: "02-1234-1234",
    shelter : "요양병원",
    info : "암특화, 암한방협진",
    price: "637,668",
  },
  {
    id: 4,
    title: "강북휴요양병원 1인실 견적서",
    grade: "1등급",
    place: "서울특별시 강북구 도봉로 161",
    size : "대형",
    call: "02-1234-1234",
    shelter : "요양병원",
    info : "암특화, 암한방협진",
    price: "637,668",
  }
]
// 시/도, 군/구
export const cities = [
  "강원",
  "경기",
  "경남",
  "경북",
  "광주",
  "대구",
  "대전",
  "부산",
  "서울",
  "세종",
  "울산",
  "인천",
  "전남",
  "전북",
  "제주",
  "충남",
  "충북",
];
export const districts = {
  강원: [
    "강릉시",
    "고성군",
    "동해시",
    "삼척시",
    "속초시",
    "양구군",
    "양양군",
    "영월군",
    "원주시",
    "인제군",
    "정선군",
    "철원군",
    "춘천시",
    "태백시",
    "평창군",
    "홍천군",
    "화천군",
    "횡성군",
  ],
  경기: [
    "가평군",
    "고양시 덕양구",
    "고양시 일산동구",
    "고양시 일산서구",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시 분당구",
    "성남시 수정구",
    "성남시 중원구",
    "수원시 권선구",
    "수원시 영통구",
    "수원시 장안구",
    "수원시 팔달구",
    "시흥시",
    "안산시 단원구",
    "안산시 상록구",
    "안성시",
    "안양시 동안구",
    "안양시 만안구",
    "양주시",
    "양평군",
    "여주시",
    "연천군",
    "오산시",
    "용인시 기흥구",
    "용인시 수지구",
    "용인시 처인구",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시",
  ],
  경남: [
    "거제시",
    "거창군",
    "고성군",
    "김해시",
    "남해군",
    "밀양시",
    "사천시",
    "산청군",
    "양산시",
    "의령군",
    "진주시",
    "창녕군",
    "창원시 마산합포구",
    "창원시 마산회원구",
    "창원시 성산구",
    "창원시 의창구",
    "창원시 진해구",
    "통영시",
    "하동군",
    "함안군",
    "함양군",
    "합천군",
  ],
  경북: [
    "경산시",
    "경주시",
    "고령군",
    "구미시",
    "군위군",
    "김천시",
    "문경시",
    "봉화군",
    "상주시",
    "성주군",
    "안동시",
    "영덕군",
    "영양군",
    "영주시",
    "영천시",
    "예천군",
    "울릉군",
    "울진군",
    "의성군",
    "청도군",
    "청송군",
    "칠곡군",
    "포항시 남구",
    "포항시 북구",
  ],
  광주: ["광산구", "남구", "동구", "북구", "서구"],
  대구: ["남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"],
  대전: ["대덕구", "동구", "서구", "유성구", "중구"],
  부산: [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ],
  서울: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  세종: [],
  울산: ["남구", "동구", "북구", "울주군", "중구"],
  인천: [
    "강화군",
    "계양구",
    "남동구",
    "동구",
    "미추홀구",
    "부평구",
    "서구",
    "연수구",
    "옹진군",
    "중구",
  ],
  전남: [
    "강진군",
    "고흥군",
    "곡성군",
    "광양시",
    "구례군",
    "나주시",
    "담양군",
    "목포시",
    "무안군",
    "보성군",
    "순천시",
    "신안군",
    "여수시",
    "영광군",
    "영암군",
    "완도군",
    "장성군",
    "장흥군",
    "진도군",
    "함평군",
    "해남군",
    "화순군",
  ],
  전북: [
    "고창군",
    "군산시",
    "김제시",
    "남원시",
    "무주군",
    "부안군",
    "순창군",
    "완주군",
    "익산시",
    "임실군",
    "장수군",
    "전주시 덕진구",
    "전주시 완산구",
    "정읍시",
    "진안군",
  ],
  제주: ["서귀포시", "제주시"],
  충남: [
    "계룡시",
    "공주시",
    "금산군",
    "논산시",
    "당진시",
    "보령시",
    "부여군",
    "서산시",
    "서천군",
    "아산시",
    "예산군",
    "천안시 동남구",
    "천안시 서북구",
    "청양군",
    "태안군",
    "홍성군",
  ],
  충북: [
    "괴산군",
    "단양군",
    "보은군",
    "영동군",
    "옥천군",
    "음성군",
    "제천시",
    "증평군",
    "진천군",
    "청주시 상당구",
    "청주시 서원구",
    "청주시 청원구",
    "청주시 흥덕구",
    "충주시",
  ],
};
