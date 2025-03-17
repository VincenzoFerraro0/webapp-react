import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DeafultLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import AboutUsPage from "./pages/AbautUsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout} >
          <Route path="/" Component={HomePage}/>
          <Route path="/movies/:id" Component={MoviePage}/>
          <Route path="/about-us" Component={AboutUsPage}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
