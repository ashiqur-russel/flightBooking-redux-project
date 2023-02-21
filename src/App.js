import "./App.css";
import BookingData from "./components/BookingData/BookingData";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
      <BookingData />
    </div>
  );
}

export default App;
