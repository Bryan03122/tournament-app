import { useLocation } from "react-router-dom";
import { PlayerAvatar } from "../components/PlayerAvatar";

export function PlayerProfile() {
  const { state: player } = useLocation();

  return <PlayerAvatar player={player} size="xl" />;
}
