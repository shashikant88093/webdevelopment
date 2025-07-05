import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./components/profile";
import Login from "./components/login";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
