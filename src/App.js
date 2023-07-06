
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";



function App() {
  return (
    <Layout>
    
    <Routes>
    <Route path="/" element={<AllMeetups/>}></Route>
    <Route path="/favourites" element={<Favourites/>}> </Route>
    <Route path="/new-meetup" element={<NewMeetups/>}></Route>
    </Routes>
    
    
    
    
    </Layout>
  );
}

export default App;
