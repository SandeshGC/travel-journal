export default function Card(props) {
  const goToGoogleMaps = () => {
    //linking to google maps
    window.open(props.item.googleMapsUrl, "_blank");
  };
  return (
    <div className="card">
      <div className="place-img-container">
        <img
          src={props.item.imageUrl}
          className="place-img link"
          alt="A Tourist Destination in Nepal visited by Sandesh GC"
        />
      </div>
      <div className="card-details">
        <div>
          <i class="fa-solid fa-location-dot"></i>
          <span className="location">{props.item.location}</span>
          <span className="gmaps-url link" onClick={goToGoogleMaps}>
            View on Google Maps
          </span>
        </div>
        <h2 className="place-name">{props.item.title}</h2>
        <p className="visited-date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="place-desc">{props.item.description}</p>
      </div>
    </div>
  );
}
