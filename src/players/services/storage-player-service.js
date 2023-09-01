import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase-config";

export const uploadProfileImage = async ({ image }) => {
  const storageRef = ref(storage, `files/profile-images/${image.name}`);
  return uploadBytes(storageRef, image).then((snapshot) => {
    return getDownloadURL(snapshot.ref).catch((error) => console.error(error));
  });
};
