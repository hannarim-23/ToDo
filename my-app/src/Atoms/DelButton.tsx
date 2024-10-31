type ButtonType = {
    title: string;
    id: number;
  };
  
  const DelButton = (props: ButtonType) => {
    //return <button onClick= {alert(props.id)} className={props.title + "__task__button"}>{props.title[0].toUpperCase() + props.title.slice(1)}</button>;
  };
  
  export default DelButton;
