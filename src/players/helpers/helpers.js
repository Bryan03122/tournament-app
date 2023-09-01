export const playerFromJson = ({ json }) => {
  return {
    id: json["id"],
    name: json["name"],
    profileImageUrl: json["profileImageUrl"],
  };
};
