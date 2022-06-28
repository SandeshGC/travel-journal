import Data from "../data.js";
import Card from "../components/Card";
export default function Content() {
  let arrayOfCards = Data.map((eachData) => <><Card item={eachData} /><hr className="end-of-card"/></>);
  return (
    <section>
      {arrayOfCards}
    </section>
  );
}
