export const playerFromJson = ({ json }) => {
  console.log(json);
  return {
    name: json["name"],
    profileImageUrl: json["profileImageUrl"],
  };
};
