import "./Date.css";

export const readDate = (d: Date) => {
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hours = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  return (
    "created in " +
    (date < 10 ? "0" + date : date) +
    "." +
    (month + 1 < 9 ? "0" + (month + 1) : month + 1) +
    "." +
    year +
    " " +
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec)
  );
};
