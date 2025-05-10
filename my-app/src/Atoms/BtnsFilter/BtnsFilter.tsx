import "./BtnFilter.css";

type BtnsFilterType = {
  title: string;
  isActive: boolean;
  handleClick: () => void;
};

const BtnsFilter = (props: BtnsFilterType) => {
  return (
    <button onClick={props.handleClick} className={`react-button ${props.isActive ? "active" : ""}`}>
      {props.title[0].toUpperCase() + props.title.slice(1)}
    </button>
  );
};

export default BtnsFilter;
