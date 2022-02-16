import React, { useEffect } from "react";
import Header from "./Header";

function Home() {
    useEffect(() => {
        fetch("/users")
        .then((r) => r.json())
        .then(data => console.log(data))
    })

  return (
    <div className="homepage">
    <Header />
        display all profiles here
    </div>
  );
}

export default Home;