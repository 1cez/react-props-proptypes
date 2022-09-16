import PropTypes from "prop-types"
export default function User({ name, surName, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Merhaba ${name} ${surName}, (${age})`
          : "Lütfen Giriş Yapınız."}
      </h1>

      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  );
}

User.propTypes = {
    name:PropTypes.string.isRequired,
    surName:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    age:PropTypes.number.isRequired,
    friends:PropTypes.array.isRequired
}
