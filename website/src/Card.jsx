import profilePic from "./assets/photo.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile Picture"></img>
      <h2 className="card-title">Bivek Baral</h2>
      <p className="card-text">I play video games</p>
    </div>
  );
}

export default Card;
