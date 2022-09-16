import PropTypes from "prop-types";
export default function User({
  name,
  surName,
  isLoggedIn,
  age,
  friends,
  address,
}) {
  if (!isLoggedIn) {
    return <div>Giriş Yapmadınız.</div>;
    {
      /* isLoggedIn Değer almaz ise default değer false atanır ve ekrana sadece Giriş Yapmadınız Yazısı Çıkar. */
    }
  }

  return (
    <>
      <h1>{`Merhaba ${name} ${surName}, (${age})`}</h1>
      {address.title} {address.zip}
      <br />
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
  address: PropTypes.shape({
    title: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
  }),
};

User.defaultProps = {
  name: "İsimsiz",
  surName: "Soyisimsiz",
  age: 0,
  isLoggedIn: false,
};
