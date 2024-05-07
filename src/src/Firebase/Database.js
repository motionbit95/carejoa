import {
  doc,
  setDoc,
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Config";
/**
 * 문서생성(add / set)
 * add : 문서 id를 자동으로 생성한다 - O
 * set : 문서 id를 내가 지정한다. - O
 * 문서삭제(delete) - O
 * 문서수정(update) - O
 * 문서조회(get - 특정 문서 id를 통해 하나의 문서를 조회) - O
 * 문서검색(search - 특정 쿼리로 문서 검색) - O
 * 문서 페이지화 - X
 * 문서 쿼리(정렬, 키워드 등) - X
 */

// 문서 생성
export const addDocument = async (collectionName, data) => {
  console.log(collectionName, data);

  let consulting_id = "";
  // Add a new document with a generated id.
  console.log(data);
  await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  })
    .then(async (doc) => {
      console.log(
        `[${collectionName}]에 문서가 성공적으로 생성되었습니다 : `,
        // docRef.id
        doc.id
      );

      consulting_id = doc.id;
    })
    .catch(async (error) => {
      console.error("문서 생성 중 오류 발생 : ", error);
    });

  return consulting_id;
};

// 문서 생성
export const setDocument = async (collectionName, id, data) => {
  await setDoc(doc(db, collectionName, id), {
    ...data,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      console.log(
        `[${collectionName}]에 문서가 성공적으로 세팅되었습니다 : `,
        id
      );
    })
    .catch((error) => {
      console.error("문서 생성 중 오류 발생 : ", error);
    });
};

// 문서 업데이트
export const updateDocument = async (collectionName, id, data) => {
  const washingtonRef = doc(db, collectionName, id);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, { ...data, updateAt: serverTimestamp() })
    .then(() => {
      console.log(
        `[${collectionName}]의 ${id} 문서를 성공적으로 업데이트 하였습니다.`
      );
    })
    .catch((error) => {
      console.error("문서 업데이트 중 오류 발생 : ", error);
    });
};

// 데이터 가지고 오기 - id를 알고있는 경우
export const getDocument = async (collectionName, id) => {
  console.log(collectionName, id);
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  let data;

  if (docSnap.exists()) {
    data = { ...docSnap.data(), id: docSnap.id };
    console.log("검색된 문서의 데이터 입니다 : ", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("요청하신 id에 해당하는 문서가 없습니다!");
  }

  return data;
};

// 문서 검색
export const searchDocument = async (query) => {
  let docList = []; // 리턴해줄 doc list 입니다.
  const querySnapshot = await getDocs(query);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    // 검색된 doc을 리스트에 담습니다
    docList.push({ ...doc.data(), id: doc.id });
  });
  return docList;
};

// 문서 삭제
export const deleteDocument = async (collectionName, id) => {
  await deleteDoc(doc(db, collectionName, id))
    .then(() => {
      console.log(`[${collectionName}]의 ${id} 문서를 삭제되었습니다.`);
    })
    .catch((error) => {
      console.error("문서 삭제 중 오류 발생 : ", error);
    });
};
