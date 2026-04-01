import "./App.css";
import Card from "./components/Card";
import data from "./js data/data";

function App() {
  const cardElements = data.map((product) => {
    return (
      <Card
        key={product.id}
        title={product.title}
        price={product.price}
        src={product.img}
        onClickInfo={showInfo}
      />
    );
  });

  function showInfo(e) {
    console.log(e.target.parentElement);
  }
  return (
    <>
      <section className="grid grid-cols-3 md:grid-cols-5">
        {cardElements}
      </section>
    </>
  );
}

export default App;
