import PrivateRoute from "./PrivateRoute.js";
import Home from "./Home.js";
import "./styles.scss";
import Applications from "./Applications.js";
import Navbart from "./Navbart.js";
import Study from "./Study.js";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound.js";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import ChatHome from "./ChatHome.js";
import { AuthProvider } from "./context/Context.js";



export default function App() {

  return (
    <AuthProvider>

      <Navbart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/study" element={<Study />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatHome />} />
        </Route>

      </Routes>

    </AuthProvider>

  )
}



