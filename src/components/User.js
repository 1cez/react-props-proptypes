import PropTypes from "prop-types";
export default function User({ name, surName, isLoggedIn, age, friends,address }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Merhaba ${name} ${surName}, (${age})`
          : "Lütfen Giriş Yapınız."}
      </h1>

        {address.title} {address.zip}

        <br/>

      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  friends: PropTypes.array.isRequired,
  address:PropTypes.shape({
    title:PropTypes.string.isRequired,
    zip:PropTypes.number.isRequired
  })
};
