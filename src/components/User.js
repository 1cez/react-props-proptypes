export default function User(props) {
  return (
    <h1>
        {
            props.isLoggedIn ? `Merhaba ${props.name} ${props.surName}` : "Lütfen Giriş Yapınız."
        }
    </h1>
  );
}
