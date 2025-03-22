import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DeafultLayout";
import { GlobalProvider } from "./context/GlobalContext"


// PAGES 
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import AboutUsPage from "./pages/AbautUsPage";
import CreateMoviePage from "./pages/CreateMoviePage";

function App() {



  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MoviePage} />
            <Route path="/movies/create" Component={CreateMoviePage}/>
            <Route path="/about-us" Component={AboutUsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
