import {
  Box,
  Container,
  HStack,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";

export const Test = ({ ...props }) => {
  const {
    longTermAdminSym = "", //장기요양기관기호
    adminPttnCd = "", //장기요양 기관유형코드
    adminNm = "", //장기요양기관이름
    hmPostNo = "", //행망우편번호
    siDoCd = "", //시도코드
    siGunGuCd = "", //시군구코드
    HDongCd = "", //행정동코드
    BDongCd = "", //법정동코드
    riCd = "", //리코드
    detailAddr = "", //상세주소
    roadNmCd = "", //도로명코드
    gunmulMlno = "", //건물본번
    gunmulSlno = "", //건물부번
    fl = "", //층
    locTelNo_1 = "", //소재지전화번호-지역
    locTelNo_2 = "", //소재지전화번호-국번
    locTelNo_3 = "", //소재지전화번호-번호
    longTermPeribRgtDt = "", //장기요양기관지정일
    stpRptDt = "", // 설치신고일자

    yoyangNm = "", //협약기관명
    adptFrDt = "", //협약기간_시작날짜
    adptToDt = "", //협약기간_끝날짜

    prsnRoomReal1 = "", //1인실
    prsnRoomReal2 = "", //2인실
    prsnRoomReal3 = "", //3인실
    prsnRoomReal4 = "", //4인실
    spcAcupRoomReal = "", //특수침실
    ofce = "", //사무실
    medRoomReal = "", //의료 및 간호사실
    funcTrnRoomReal = "", //작업 및 일상동작훈련실
    pgmRoomReal = "", //프로그램실
    crmnyPrst = "", //식당 및 조리실
    batRoom = "", //화장실
    taxPageLong = "", //세면장 및 목욕실
    taxRoom = "", //세탁장 및 건조장

    equipLong = "", //시설장
    hdOfce = "", //사무국장
    socWel = "", //사회복지사
    chrgDoc = "", //의사_전임
    chargeDoc = "", //의사_촉탁
    nur = "", //간호사
    nurArticle = "", //간호조무사
    dent = "", //치위생사
    physicalMTret = "", //물리치료사
    wrkMTret = "", //작업치료사
    recuProt_1 = "", //요양보호사1급
    recuProt_2 = "", //요양보호사2급
    recuProtDelay = "", //요양보호사유예인원
    ofceEmp = "", //사무원
    nut = "", //영양사
    cook = "", //조리원
    hygiPrsn = "", //위생원
    mgmtPrsn = "", //관리인
    suppPrsn = "", //보조원
    etcPer = "", //기타인원

    nonpayKind = "", //비급여항목 종류
    prodBase = "", //신출근거
    nonpayTgtAmt = "", //비급여항목 금액
    uptDt = "", //등록일

    witemRptDesc = "", //신고내역
    itemName = "", //장비명
    mnfCo = "", //제조사
    modelNm = "", //모델명
    usage = "", //용도
    rmk = "", //기타

    totPer = "", //정원
    maNowPer = "", //현원_남
    fmNowPer = "", //현원_여
    maRsvPer = "", //대기_남
    fmRsvPer = "", //대기_여

    hmpgAddr = "", //홈페이지주소
    tfMth = "", //교통편
    pkngEquip = "", //주차시설

    // 배열로 들어올 수 있는 것
    arrayAgency = [],
    arrayEquipment = [],
    arrayNonreimbursement = [],
  } = props;

  const Data_Nomal = [
    { label: "장기요양기관기호", value: longTermAdminSym },
    { label: "장기요양 기관유형코드", value: adminPttnCd },
    { label: "장기요양기관이름", value: adminNm },
    { label: "행망우편번호", value: hmPostNo },
    { label: "시도코드", value: siDoCd },
    { label: "시군구코드", value: siGunGuCd },
    { label: "행정동코드", value: HDongCd },
    { label: "법정동코드", value: BDongCd },
    { label: "리코드", value: riCd },
    { label: "상세주소", value: detailAddr },
    { label: "도로명코드", value: roadNmCd },
    { label: "건물본번", value: gunmulMlno },
    { label: "건물부번", value: gunmulSlno },
    { label: "층", value: fl },
    { label: "소재지전화번호-지역", value: locTelNo_1 },
    { label: "소재지전화번호-국번", value: locTelNo_2 },
    { label: "소재지전화번호-번호", value: locTelNo_3 },
    { label: "장기요양기관지정일", value: longTermPeribRgtDt },
    { label: "설치신고일자", value: stpRptDt },
  ];

  const Data_Agency = [
    { label: "장기요양기관코드", value: longTermAdminSym },
    { label: "협약기관명", value: yoyangNm },
    { label: "협약기간_시작날짜", value: adptFrDt },
    { label: "협약기간_끝날짜", value: adptToDt },
  ];

  const Data_FacilityInfo = [
    { label: "기관코드", value: longTermAdminSym },
    { label: "기관유형코드", value: adminPttnCd },
    { label: "1인실	", value: prsnRoomReal1 },
    { label: "2인실	", value: prsnRoomReal2 },
    { label: "3인실	", value: prsnRoomReal3 },
    { label: "4인실	", value: prsnRoomReal4 },
    { label: "특수침실", value: spcAcupRoomReal },
    { label: "사무실", value: ofce },
    { label: "의료 및 간호사실", value: medRoomReal },
    { label: "작업 및 일상동작훈련실", value: funcTrnRoomReal },
    { label: "프로그램실", value: pgmRoomReal },
    { label: "식당 및 조리실", value: crmnyPrst },
    { label: "화장실", value: batRoom },
    { label: "세면장 및 목욕실", value: taxPageLong },
    { label: "세탁장 및 건조장", value: taxRoom },
  ];

  const Data_Workforce = [
    { label: "기관코드", value: longTermAdminSym },
    { label: "기관유형코드", value: adminPttnCd },
    { label: "시설장", value: equipLong },
    { label: "사무국장", value: hdOfce },
    { label: "사회복지사", value: socWel },
    { label: "의사_전임", value: chrgDoc },
    { label: "의사_촉탁", value: chargeDoc },
    { label: "간호사", value: nur },
    { label: "간호조무사", value: nurArticle },
    { label: "치위생사", value: dent },
    { label: "물리치료사", value: physicalMTret },
    { label: "작업치료사", value: wrkMTret },
    { label: "요양보호사1급", value: recuProt_1 },
    { label: "요양보호사2급", value: recuProt_2 },
    { label: "요양보호사유예인원", value: recuProtDelay },
    { label: "사무원", value: ofceEmp },
    { label: "영양사", value: nut },
    { label: "조리원", value: cook },
    { label: "위생원", value: hygiPrsn },
    { label: "관리인", value: mgmtPrsn },
    { label: "보조원", value: suppPrsn },
    { label: "기타인원", value: etcPer },
  ];

  const Data_Nonreimbursement = [
    { label: "장기요양기관코드", value: longTermAdminSym },
    { label: "비급여항목 종류", value: nonpayKind },
    { label: "산출근거", value: prodBase },
    { label: "비급여항목 금액", value: nonpayTgtAmt },
    { label: "등록일", value: uptDt },
  ];

  const Data_Equipment = [
    { label: "장기요양기관코드", value: longTermAdminSym },
    { label: "신고내역", value: witemRptDesc },
    { label: "장비명", value: itemName },
    { label: "제조사", value: mnfCo },
    { label: "모델명", value: modelNm },
    { label: "용도", value: usage },
    { label: "기타", value: rmk },
  ];

  const Data_Personnel = [
    { label: "장기요양기관코드", value: longTermAdminSym },
    { label: "기관유형코드", value: adminPttnCd },
    { label: "정원", value: totPer },
    { label: "현원_남", value: maNowPer },
    { label: "현원_여", value: fmNowPer },
    { label: "대기_남", value: maRsvPer },
    { label: "대기_여", value: fmRsvPer },
  ];

  const Data_Other = [
    { label: "장기요양기관기호", value: longTermAdminSym },
    { label: "장기요양기관유형코드", value: adminPttnCd },
    { label: "홈페이지주소", value: hmpgAddr },
    { label: "교통편", value: tfMth },
    { label: "주차시설", value: pkngEquip },
  ];

  arrayEquipment.push(Data_Equipment);
  arrayEquipment.push(Data_Equipment);
  arrayEquipment.push(Data_Equipment);

  arrayAgency.push(Data_Agency);
  arrayAgency.push(Data_Agency);
  arrayAgency.push(Data_Agency);

  arrayNonreimbursement.push(Data_Nonreimbursement);
  arrayNonreimbursement.push(Data_Nonreimbursement);
  arrayNonreimbursement.push(Data_Nonreimbursement);

  return (
    <Stack spacing={0}>
      <Box h={"200px"} bgColor={"gray.100"}></Box>
      <Stack bgColor={"gray.100"} fontSize={"12px"}>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <HStack justify={"space-between"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                번동데이케어센터
              </Text>
              <Box boxSize={"20px"} bgColor={"red"} />
            </HStack>
            <Text>서울특별시 송파구 가락로 278, ....</Text>
            <HStack>
              <Tag fontSize={"12px"}>1등급</Tag>
              <Tag fontSize={"12px"}>소형</Tag>
              <Tag fontSize={"12px"}>설립3년</Tag>
              <Tag fontSize={"12px"}>물리치료</Tag>
              <Tag fontSize={"12px"}>상급병상</Tag>
            </HStack>
            <HStack divider={<StackDivider borderColor={"black"} />}>
              <Text>전화번호</Text>
              <Text>02-1234-1234</Text>
            </HStack>
            <HStack divider={<StackDivider borderColor={"black"} />}>
              <Text>설립일자</Text>
              <Text>2007-05-22</Text>
            </HStack>
          </Stack>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              일반현황
            </Text>
            {Data_Nomal.map(({ label, value }) => (
              <HStack key={label} justify={"space-between"}>
                <Text>{label}</Text>
                <Text>{value}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              협약기관
            </Text>
            <Stack divider={<StackDivider />}>
              {arrayAgency.map((value) => (
                <Stack>
                  {value.map(({ label, value }) => (
                    <HStack key={label} justify={"space-between"}>
                      <Text>{label}</Text>
                      <Text>{value}</Text>
                    </HStack>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              시설현황
            </Text>
            {Data_FacilityInfo.map(({ label, value }) => (
              <HStack key={label} justify={"space-between"}>
                <Text>{label}</Text>
                <Text>{value}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              인력현황
            </Text>
            {Data_Workforce.map(({ label, value }) => (
              <HStack key={label} justify={"space-between"}>
                <Text>{label}</Text>
                <Text>{value}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              비급여
            </Text>
            <Stack divider={<StackDivider />}>
              {arrayNonreimbursement.map((value) => (
                <Stack>
                  {Data_Nonreimbursement.map(({ label, value }) => (
                    <HStack key={label} justify={"space-between"}>
                      <Text>{label}</Text>
                      <Text>{value}</Text>
                    </HStack>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              복지용구
            </Text>
            <Stack divider={<StackDivider />}>
              {[1, 2, 3].map((value) => (
                <Stack>
                  {Data_Equipment.map(({ label, value }) => (
                    <HStack key={label} justify={"space-between"}>
                      <Text>{label}</Text>
                      <Text>{value}</Text>
                    </HStack>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              입소인원
            </Text>
            {Data_Personnel.map(({ label, value }) => (
              <HStack key={label} justify={"space-between"}>
                <Text>{label}</Text>
                <Text>{value}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
        <Stack bgColor={"white"} px={4}>
          <Stack py={4}>
            <Text fontWeight={"bold"} fontSize={"14px"}>
              기관기타
            </Text>
            {Data_Other.map(({ label, value }) => (
              <HStack key={label} justify={"space-between"}>
                <Text>{label}</Text>
                <Text>{value}</Text>
              </HStack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
