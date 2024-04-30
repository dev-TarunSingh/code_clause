import "./App.css";
import { useEffect, useState } from "react";
import logo from "./assets/spotify.png";
import Music from "./assets/apple_music_th.json";
import { TiMediaPlay, TiMediaPause, TiMediaRewind, TiMediaFastForward } from "react-icons/ti";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const Header = () => {
    

    function LoginBox () {
      return (
        <div className="login_details">
        <h1>Post</h1>
        <form>
          <input className="input-field" type="email" placeholder="Email" />
          <input className="input-field" type="password" placeholder="password"></input>
          <br />
          <button className="btn-s" onClick={() => setShowTaskDetails(true) && e.preventDefault() && setLoggedIn(true)}>Login</button>
          <button className="btn-s" onClick={() => setClosed(false)}>Cancel</button>
        </form>
      </div>

      );
    }

    return (
      <div className="header">
        <img
          className="logo"
          src={logo}
          alt="logo"
          style = {{ height: "50px", width: "50px", marginRight: "20px" }}
        />
        <h1>MIXify</h1>
        <div className="account">
          {loggedIn ? (
            <button>Account</button>
          ) : (
            <button onClick={() => setShowBox(!showBox)}>Login</button>
          )}
          {showBox && LoginBox()}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <Musiclist />
      <Media />
    </>
  );
}

const Musiclist = () => {

  const styles = {
    display: "flex",
    alignitems: "center",
    justifycontent: "center",
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "10px",
    flexdirection: "row",
    color: "green",
    margin: "10px",
    height: "300px",
    BiBorderRadius: "10px",
    boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
  };

  return (
    <div className="music-list">
      {Music.map((music) => (
        <div key={music.id} style={styles} className="music">
          <div className="music-info">
            <img src={music.artworkUrl100} alt={music.name} />
            <h2>{music.name.substring(0, 10)}</h2>
            <p>{music.artistName.substring(0, 10)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Media = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="media">
      <div className="media-controls">
        <TiMediaRewind className="media-control" />
        <div className="media-control" onClick={togglePlay}>
          {playing ? <TiMediaPause /> : <TiMediaPlay />}
        </div>
        <TiMediaFastForward className="media-control" />
      </div>
    </div>
  );
};

export default App;