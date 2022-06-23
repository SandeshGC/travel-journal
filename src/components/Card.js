export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="place-image" />
      <div className="image-credit">Images from Unsplash.com</div>
      <div className="card-details">
        <div>
        <h2>{props.item.title}</h2>
        {props.item.googleMapsUrl}
        </div>
      </div>
    </div>
  );
}
