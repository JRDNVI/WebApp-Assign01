import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviePage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorDetailsPage from "./pages/actorDetailsPage";
import TopRatedPage from "./pages/topRatedMoviePage"
import InTheatresPage from "./pages/InTheatresPage";
import AuthOptionsPage from "./pages/authOptionPage";
import UserProvider from "./components/auth/UserProvider";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmx7udH48OtH044h7tlFjgp_K2dL65B2U",
  authDomain: "web-app-940c1.firebaseapp.com",
  projectId: "web-app-940c1",
  storageBucket: "web-app-940c1.appspot.com",
  messagingSenderId: "1093837811286",
  appId: "1:1093837811286:web:0923b93495fb01bb0115f7"
};



const checkAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in:', user);
    } else {
      console.log('No user is signed in.');
    }
  });
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <UserProvider>
        <SiteHeader user={auth} />
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/topRated" element={<TopRatedPage />} />
          <Route path="/movies/playingNow" element={<InTheatresPage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/actor/:name" element={<ActorDetailsPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/authPage/" element={<AuthOptionsPage/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
        </UserProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);