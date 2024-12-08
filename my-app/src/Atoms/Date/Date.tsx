import styles from "./Date.module.css";

type dateType = {
  date: Date;
};

const Date = ({ date }: dateType) => {
  const day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  return (
    <span className={styles.date}>
      {"created in " +
        (day < 10 ? "0" + day : day) +
        "." +
        (month + 1 < 9 ? "0" + (month + 1) : month + 1) +
        "." +
        year +
        " " +
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (min < 10 ? "0" + min : min) +
        ":" +
        (sec < 10 ? "0" + sec : sec)}
    </span>
  );
};

export default Date;
