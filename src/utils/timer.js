const getCurrentTime = () => {
  return Date.now();
}

const getCurrentIsoTime = () => {
  const now = new Date(Date.now());
  return now.toISOString();
};

const getDuration = (t1, t2) => {
  const diff = t2 - t1;
  return `${diff}ms`;
};

export { getCurrentIsoTime, getDuration, getCurrentTime };
