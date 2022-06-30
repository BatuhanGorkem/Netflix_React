import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="UpComing" fetch={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetch={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetch={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetch={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetch={requests.requestHorror} />
    </>
  );
};

export default Home;
