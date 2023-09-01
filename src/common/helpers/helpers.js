import { Timestamp } from "firebase/firestore";

export const getNameInitials = ({ name }) => {
  const nameWords = name.split(" ");

  const initials = nameWords.at(0).charAt(0) + nameWords.at(1).charAt(0);

  return initials;
};

export const convertDateToFirebaseTimestamp = ({ date }) => {
  return Timestamp.fromDate(new Date(date)).toDate();
};
