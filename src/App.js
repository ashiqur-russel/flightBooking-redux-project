import { Provider } from "react-redux";

import "./App.css";
import BookingData from "./components/BookingData/BookingData";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Form />
        <BookingData />
      </div>
    </Provider>
  );
}

export default App;
