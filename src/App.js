import { Routes, Route } from "react-router-dom";
import Home from "./Components/Routes/Home/Home";
import Navigation from "./Components/Routes/Navigation/Navigation";
import SignIn from "./Components/Routes/Sign-In/Sign-In";

const Shop = () => {
  return <h1>I am the shop page</h1>;
}

const App = () =>  {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
