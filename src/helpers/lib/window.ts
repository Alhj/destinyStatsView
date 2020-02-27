const windowsWidth = () => {
  return window.innerWidth;
}

const windowWidthCheck = () => {
  if (windowsWidth() <= 450) {
    return false;
  }
  return true;
}

export {
  windowWidthCheck
}