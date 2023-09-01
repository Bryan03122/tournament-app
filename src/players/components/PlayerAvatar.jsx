import { Avatar } from "flowbite-react";
import { getNameInitials } from "../../common/helpers/helpers";

export function PlayerAvatar({ player, size = "md" }) {
  return (
    <Avatar
      size={size}
      className="justify-start"
      rounded
      placeholderInitials={
        (player.profileImageUrl === "" ||
          player.profileImageUrl == undefined) &&
        getNameInitials({ name: player.name })
      }
      img={player.profileImageUrl}
    />
  );
}
