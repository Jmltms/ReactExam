import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Base from "./pages/Base";
import Sports from "./pages/Sports";
import Favorites from "./pages/Favorites";
import Invite from "./pages/Invite";
import CasinoLive from "./pages/CasinoLive";
import Cashier from "./pages/Cashier";
import { useEffect, useState } from "react";
import fetchData from "./utils/MockApi";

interface mockApiGame {
  id: number;
  gameProvider: string;
  category: string;
  name: string;
  image: string;
  favorite: boolean;
}

interface DataResponse {
  data: mockApiGame[];
}

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // mockApiGame is a typeof data types from json
  const [data, setData] = useState<mockApiGame[] | null>([]);

  // use effect to re-direct user in index sa landing page
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/");
    }
    // // since i dont have a real api i create a fetchData function to perform async and await
    const getData = async () => {
      const response: DataResponse = await fetchData();
      setData(response.data);
    };

    getData();
  }, [navigate]);

  // function that update favorite to not favorite
  const makeFavorites = (id: number) => {
    console.log(id);

    if (data) {
      const newState = [...data];
      newState[id - 1].favorite = !newState[id - 1].favorite;
      setData(newState);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="sports" element={<Sports />} />
          <Route
            path="favorites"
            element={<Favorites data={data} makeFavorites={makeFavorites} />}
          />
          <Route path="invite" element={<Invite />} />
          <Route
            path="casino-live"
            element={<CasinoLive data={data} makeFavorites={makeFavorites} />}
          />
          <Route path="cashier" element={<Cashier />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
