import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { goToFeedPage, goToLoginPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedPage(navigate);
    }
  }, [navigate]);
};

export default useUnprotectedPage;
