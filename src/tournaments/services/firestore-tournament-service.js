import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { convertDateToFirebaseTimestamp } from "../../common/helpers/helpers";
import { firestore } from "../../config/firebase-config";
import { tournamentStatus } from "../constants/constants";
import { tournamentFromJson } from "../helpers/helpers";

export const createTournament = async ({ tournament }) => {
  try {
    const timeStampDate = convertDateToFirebaseTimestamp({
      date: tournament.date,
    });

    const tournamentToCreate = {
      date: timeStampDate,
      name: tournament.name,
      status: tournamentStatus.PENDING,
    };
    await addDoc(collection(firestore, "tournament"), tournamentToCreate);
  } catch (e) {
    console.error(e);
  }
};

export const getTournaments = async () => {
  try {
    const q = query(collection(firestore, "tournament"));

    const querySnapshot = await getDocs(q);

    const tournaments = querySnapshot.docs.map((doc) => {
      return tournamentFromJson({ json: { ...doc.data(), id: doc.id } });
    });
    return tournaments;
  } catch (e) {
    console.error(e);
  }
};
