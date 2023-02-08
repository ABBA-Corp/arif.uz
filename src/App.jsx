import "./App.css";
import Redirect from "./Redirect";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      {/* <VideoPlayer /> */}
      <Redirect />
    </div>
  );
}

export default App;
