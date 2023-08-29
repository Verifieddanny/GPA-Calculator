import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems([...items, item]);
    console.log(items);
  }

  function clearItems() {
    setItems([]);
  }
  return (
    <>
      <Header />
      <Form onAddItem={handleAddItems} />
      <Body items={items} clear={clearItems} />
      <Footer />
    </>
  );
}

export default App;
