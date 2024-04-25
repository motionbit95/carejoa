import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./Config";
import { useEffect, useState } from "react";

/**
 * [비밀번호로 사용자 인증]
 * 가입(signup) - O
 * 로그인(signin) - O
 * 로그아웃(signout) - O
 *
 * [사용자 관리]
 * 현재 로그인한 사용자 가지고 오기 - O
 * 탈퇴(delete) - O
 * 사용자 비밀번호 재설정
 */

// 아래 계정 정보의 state가 변경 될 때마다 사용자 uid를 로드하여 저장합니다.
export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // 현재 사용자
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setCurrentUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return currentUser;
}

// 비밀번호 기반 계정 만들기
export async function signUp(email, password) {
  let userId, errorMsg;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("uid : ", user.uid);
      userId = user.uid;
    })
    .catch(async (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      console.log(errorCode, errorMessage);
      errorMsg = errorMessage;
    });

  return { uid: userId, error: errorMsg };
}

// 이메일 주소와 비밀번호로 사용자 로그인
export async function signIn(email, password) {
  let userId, errorMsg;
  console.log(email, password);
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      userId = user.uid;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorMsg = errorMessage;
    });

  return { uid: userId, error: errorMsg };
}

// 사용자 로그아웃
export function logOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

// 사용자 삭제
export function delUser(user) {
  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
}

// 사용자 비밀번호 재설정
export function updatePassword(password) {
  updatePassword(auth.currentUser, password)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
}
