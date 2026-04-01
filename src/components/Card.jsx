export default function Card(props) {
  return (
    <>
      <div className="border-2 rounded-xl m-2 overflow-hidden">
        <h2>{props.title}</h2>
        <p>Price: {props.price}</p>
        <img src={props.src} alt="" />
        <button
          className="border rounded-sm cursor-pointer"
          onClick={props.onClickInfo}
        >
          Click
        </button>
      </div>
    </>
  );
}
