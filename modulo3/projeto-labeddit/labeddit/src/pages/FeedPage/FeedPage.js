import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

function FeedPage() {
  useProtectedPage();
  return (
    <div>
      <Header />
      FeedPage
    </div>
  );
}

export default FeedPage;
