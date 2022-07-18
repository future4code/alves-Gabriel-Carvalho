import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="trips" element={<ListTripsPage />} />
          <Route path="trips/application" element={<ApplicationFormPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="login/admin" element={<AdminHomePage />} />
          <Route path="login/admin/create" element={<CreateTripPage />} />
          <Route path="login/admin/:id" element={<TripDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
