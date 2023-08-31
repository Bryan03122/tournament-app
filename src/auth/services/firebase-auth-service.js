import { auth } from "../../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const register = async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("final");
  }
};

export const login = async ({ email, password }) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredentials.user;
  } catch (e) {
    console.error(e);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
  }
};

export const getAuthenticatedUser = () => {
  return auth.onAuthStateChanged(function (user) {
    if (user) return user;
    return null;
  });
};
