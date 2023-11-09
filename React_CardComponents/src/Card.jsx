
import profilePic from './assets/profilePic.jpg'

function Card(){

  return(
      <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture" ></img>
        <h2 className='card-title'>Card Components</h2>
        <p className='card-text'>This is a tutorial to use card components by BroCode</p>
      </div>
  );

}

export default Card