import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  const name = "Mehmet";
  const surName = "Kara";
  const isLoggedIn = true;

  return (
    <>
      <User name="Mehmet" surName="Çetin" isLoggedIn={false}/>
    </>
  );
}

export default App;
