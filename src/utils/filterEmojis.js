export const filterEmojis = ({
  emojisData,
  searchText = "",
  maxResults = 50,
}) => {
  const filteredEmojis = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keyword.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });

  return filteredEmojis.splice(0, maxResults);
};
