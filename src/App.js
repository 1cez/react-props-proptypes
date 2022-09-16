import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  const name = "Mehmet";
  const surName = "Kara";
  const isLoggedIn = true;
  const friends = [
    {
      id:1,
      name: "Ahmet"
    },
    {
      id:2,
      name: "Mehmet"
    },
    {
      id:3,
      name: "Ali"
    },
  ];

  return (
    <>
      <User
        name="Mehmet"
        surName="Çetin"
        isLoggedIn={true}
        age={29}
        friends={friends}
        address ={{
          title:'Ataşehir/İstanbul',
          zip:34732
        }}
      />
    </>
  );
}

export default App;
