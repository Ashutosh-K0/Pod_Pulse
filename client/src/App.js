import { Fragment } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import LikedSongs from "./pages/LikedSongs";
import Profile from "./pages/Profile";

const App = () => {
  const user = true;
  const location = useLocation();

  return (
    <Fragment>
      {user &&
        location.pathname !== "/login" &&
        location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/not-found" && (
          <Fragment>
            <Navbar />
            <Sidebar />
            <AudioPlayer />
          </Fragment>
        )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/home"
          element={<PrivateRoute user={user} component={<Home />} />}
        />
        <Route
          path="/collection/tracks"
          element={<PrivateRoute user={user} component={<LikedSongs />} />}
        />
        <Route
          path="/collection/playlists"
          element={<PrivateRoute user={user} component={<Library />} />}
        />
        <Route
          path="/search"
          element={<PrivateRoute user={user} component={<Search />} />}
        />
        <Route
          path="/playlist/:id"
          element={<PrivateRoute user={user} component={<Playlist />} />}
        />
        <Route
          path="/me"
          element={<PrivateRoute user={user} component={<Profile />} />}
        />
        {user && <Route path="/signup" element={<Navigate to="/home" />} />}
        {user && <Route path="/login" element={<Navigate to="/home" />} />}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
