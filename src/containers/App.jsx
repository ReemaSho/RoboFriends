import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
// state is a description of your application, State is an object that describes your application
// Props are simply things that come out of state
//state is able to change the props

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const Robots = await data.json();
      setRobots(Robots);
    };
    fetchData();
  }, []);

  const OnSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };
  const FilterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField);
  });

  return !robots.length ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f2 ma3">RoboFriends</h1>
      <Searchbox searchChange={OnSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={FilterRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
