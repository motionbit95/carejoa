import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./Config";

/**
 * 파일 업로드
 * 파일 다운로드
 * 파일 삭제
 */

export const uploadFile = async (dir, file) => {
  console.log(file);
  const storageRef = ref(storage, dir + "/" + file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};
