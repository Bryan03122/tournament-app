import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { firestore } from "../../config/firebase-config";
import { playerFromJson } from "../helpers/helpers";
export const createPlayer = async ({ player }) => {
  try {
    await addDoc(collection(firestore, "player"), player);
  } catch (e) {
    console.error(e);
  }
};

export const getPlayers = async () => {
  try {
    const q = query(collection(firestore, "player"));

    const querySnapshot = await getDocs(q);

    const players = querySnapshot.docs.map((doc) =>
      playerFromJson({ json: doc.data() })
    );
    return players;
  } catch (e) {
    console.error(e);
  }
};
