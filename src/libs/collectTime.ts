const collectTime = (date: Date): string => {
  const hours = date.getHours();
  let minutes: string | number = date.getMinutes();

  if (minutes < 10) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
};

export default collectTime;
