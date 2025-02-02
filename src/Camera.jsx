const Camera = (props) => {
  return (
    <div className="camera">
      <img
        className="cameraFeed"
        src={props.imgSrc}
        alt={`Camera ${props.name}`}
      />
      <div className="cameraInfo">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Camera;
