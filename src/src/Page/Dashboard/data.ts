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
        detail: "주로 가족들이 일을 하고 있는 동안 노인 가족 구성원이나 장애를 가진 가족 구성원을 돌보기 위해 이용됩니다.시설",
    },
    {
        id: 4,
        title: "방문 시설",
        detail: "일시적으로 노인이나 장애인을 돌보거나 관리하기 위한 시설입니다",
    }
]

export const consultingList = [
    {
        id: 1,
        title: "강북휴요양병원",
        place: "서울특별시 강북구 도봉로 161",
        size : "중형",
        shelter : "요양병원",
        info : "암특화, 암한방협진",
        price: "637,668",
    },
    {
      id: 2,
      title: "강북실버종합복지센터",
      place: "서울특별시 강북구 오패산로 290",
      size : "대형",
      shelter : "요양원",
      info : "재활특화, 치매특화",
      price: "734,100",
    },
    {
      id: 3,
      title: "강북휴요양병원",
      place: "서울특별시 강북구 도봉로 161",
      size : "대형",
      shelter : "요양병원",
      info : "암특화, 암한방협진",
      price: "637,668",
    },
    {
      id: 4,
      title: "강북휴요양병원",
      place: "서울특별시 강북구 도봉로 161",
      size : "대형",
      shelter : "요양병원",
      info : "암특화, 암한방협진",
      price: "637,668",
    }
]