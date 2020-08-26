// Action Creator
const selectSong = (song) => {
  // Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
export default selectSong;
