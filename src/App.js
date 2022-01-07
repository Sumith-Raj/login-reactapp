import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes, Navigate
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { HomePage } from "./HomePage/HomePage";
import { history } from "./History/history";
import { ProductPage } from "./OtherPages/ProductPage";
import { AboutPage } from "./OtherPages/AboutPage";
import { ContactPage } from "./OtherPages/ContactPage";
import { LoginPage } from "./LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>
        <Routes>
          <Route exact path="" element={
            <PrivateRoute redirectTo="/login" >
              <HomePage />
            </PrivateRoute>

          } />
          <Route path="/product" element={<PrivateRoute redirectTo="/login" >
            <ProductPage />
          </PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute redirectTo="/login" >
            <AboutPage />
          </PrivateRoute>} />
          <Route path='/contact' element={<PrivateRoute redirectTo="/login" >
            <ContactPage />
          </PrivateRoute>} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
