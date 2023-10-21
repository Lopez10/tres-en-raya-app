import { Player } from "../services/player";

export const savePlayer = (player: Player) => {
  localStorage.setItem('player', JSON.stringify(player));
}

export const getPlayer = (): Player | null => {
  const player = localStorage.getItem('player');
  if (player) {
    return JSON.parse(player);
  }
  return null;
}