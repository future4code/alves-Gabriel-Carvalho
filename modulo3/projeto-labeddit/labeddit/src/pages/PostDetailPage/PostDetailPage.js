import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

function PostDetailPage() {
  useProtectedPage();
  return (
    <div>
      <Header />
      PostDetailPage
    </div>
  );
}

export default PostDetailPage;
