const fixWindow = (fixWindow) => {
  if (fixWindow) {
    return document.body.classList.add('noScroll');
  }

  return document.body.classList.remove('noScroll');
};

export default fixWindow;