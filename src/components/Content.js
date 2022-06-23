import "../content.css";
import Data from "../data.js";
import Card from "../components/Card";
export default function Content() {
  let arrayOfCards = Data.map((eachData) => <Card item={eachData} />);
  return (
    <section>
      <h1>Check</h1>
      {arrayOfCards}
    </section>
  );
}
