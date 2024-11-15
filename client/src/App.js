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
  const user = true; // Replace with actual user authentication logic
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
          element={<PrivateRoute user={user} element={<Home />} />}
        />
        <Route
          path="/collection/tracks"
          element={<PrivateRoute user={user} element={<LikedSongs />} />}
        />
        <Route
          path="/collection/playlists"
          element={<PrivateRoute user={user} element={<Library />} />}
        />
        <Route
          path="/search"
          element={<PrivateRoute user={user} element={<Search />} />}
        />
        <Route
          path="/playlist/:id"
          element={<PrivateRoute user={user} element={<Playlist />} />}
        />
        <Route
          path="/me"
          element={<PrivateRoute user={user} element={<Profile />} />}
        />

        {/* Allow direct access to Login/Signup routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Fragment>
  );
};

export default App;
