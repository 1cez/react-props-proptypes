export default function User({ name, surName, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Merhaba ${name} ${surName}, ${age}`
          : "Lütfen Giriş Yapınız."}
      </h1>

      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  );
}
