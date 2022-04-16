const userKeys = {
  all: () => ["user"],
  info: () => [...userKeys.all(), "info"],
  watchLater: () => [...userKeys.all(), "watch-later"],
  likes: () => [...userKeys.all(), "likes"],
  history: () => [...userKeys.all(), "history"],
  playlists: () => [...userKeys.all(), "playlist"],
  playlist: id => [...userKeys.playlists(), id]
};

const videoKeys = {
  all: () => ["video"],
  video: id => [...videoKeys.all(), id]
};

const categoryKeys = {
  all: () => ["category"]
};

export { userKeys, videoKeys, categoryKeys };
