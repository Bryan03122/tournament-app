export const tournamentFromJson = ({ json }) => {
  return {
    id: json["id"],
    name: json["name"],
    date: json["date"].toDate(),
    status: json["status"],
  };
};
