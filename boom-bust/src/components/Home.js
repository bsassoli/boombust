import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Hero from "./Hero";
import Container from "./Container";
import SimpleTable from "./SimpleTable";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `/web/signals/`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const signalsList = [
    {
      id: 21,
      signal: "NE",
      date: "2022-05-03",
      opening_price: "22.00",
      closing_price: "23.00",
      performance_usd: "3.00",
      performance_percentage: "1.50",
      note: "None",
      shade: "None",
      asset: 25,
    },
    {
      id: 3,
      signal: "OB",
      date: "2022-05-03",
      opening_price: "120.00",
      closing_price: "123.00",
      performance_usd: "1.50",
      performance_percentage: "4.00",
      note: "",
      shade: "",
      asset: 2,
    },
    {
      id: 4,
      signal: "BB",
      date: "2022-05-03",
      opening_price: "124.00",
      closing_price: "123.00",
      performance_usd: "2.50",
      performance_percentage: "3.00",
      note: "",
      shade: "",
      asset: 2,
    },
    {
      id: 5,
      signal: "OB",
      date: "2022-05-03",
      opening_price: "2000.00",
      closing_price: "1900.00",
      performance_usd: "100.00",
      performance_percentage: "-5.00",
      note: "Ukraine",
      shade: "Blue",
      asset: 44,
    },
  ];

  return (
    <div>
      <NavBar />
      <Container>
        <h1>API Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data && (Object.keys(data))}
        <ul>
          {data &&
            data.map(({ id, asset, signal, date }) => (
              <li key={id}>
                <h3>
                  {date} {signal} {asset} {id}
                </h3>
              </li>
            ))}
        </ul>

        <Hero />
        <SimpleTable signalsData={signalsList} />
      </Container>
    </div>
  );
};

export default Home;
