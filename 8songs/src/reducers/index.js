import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "NO Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want It That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// state object
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
