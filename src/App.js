import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
//swiper js
import "swiper/css";
import "swiper/css/navigation";
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
