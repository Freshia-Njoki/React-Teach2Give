import './profilecard.css'

function ProfileCard({ name, age, profilePicture, bio }) {
  return (
   <div className="profile-card">
    <img src={profilePicture} alt={`${name}'s profile`} />
    <h2>My name is: {name}</h2>
    <p>I'm {age} years old</p>
    <p>Bio: {bio}</p>
   </div>
  );
}

export default ProfileCard;
