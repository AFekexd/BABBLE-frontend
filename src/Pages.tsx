import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Notfound from "./Pages/Notfound";
import Register from "./Pages/Register";
import Navigation from "./components/Navigation/Navigation";
import Forum from "./Pages/Forum";
import ForumContent from "./components/Forum/ForumContent";
import Admin from "./Pages/Admin";
import RequireAuth from "./Pages/RequireAuth";

const Pages = () => {
  //use the react redux to check if the user is logged in

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth roles={["MUNKALAP_CREATE"]} />}>
          <Route
            index
            path="/"
            element={
              <div className="flex flex-col items-center justify-center h-screen gap-4">
                <Navigation />
                <Home />
              </div>
            }
          ></Route>
          <Route
            index
            path="/chat"
            element={
              <>
                <Navigation />
                <Messages />
              </>
            }
          ></Route>
          <Route
            index
            path="/forum"
            element={
              <>
                <Navigation />
                <Forum />
              </>
            }
          ></Route>

          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center h-screen gap-4">
                <Navigation />
                <Notfound />
              </div>
            }
          ></Route>
          <Route
            path="/forum/:forumId"
            element={
              <>
                <Navigation />
                <ForumContent />
              </>
            }
          ></Route>
          {true && (
            <Route
              path="/admin"
              element={
                <>
                  <Navigation />
                  <Admin />
                </>
              }
            ></Route>
          )}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center h-screen gap-4">
                <Navigation />
                <Notfound />
              </div>
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
