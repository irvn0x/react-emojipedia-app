import { useState, useEffect } from "react";

import axios from "axios";

// import "./App.css";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Hello World</h1>

        {loading && <Empty text="Loading..." />}
        {error && <p>Error</p>}
        {emojisData.length > 0 && <p>Emoji Data Berhasil</p>}
      </Container>
    </>
  );
}

export default App;
