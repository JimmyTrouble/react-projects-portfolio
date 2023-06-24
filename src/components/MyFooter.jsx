import React from "react";

function MyFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Liam Turner ⓒ {year}</p>
    </footer>
  );
}

export default MyFooter;
