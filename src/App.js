import React, { useState } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";

const App = () => {

    const [searchField, setSearchField] = useState(robots)

    const searchChange = (e) => {
        const searchedRobot = robots.filter(user =>
            user.name.toLowerCase().includes(e.toLowerCase())
        )

        // console.log(searchedRobot)
        setSearchField(searchedRobot)
    }

    return (
        <div className="tc">
            <h1>RobotFriend</h1>
            <SearchBox onSearch={searchChange} />
            <CardList robots={searchField} />
        </div>
    )
}

export default App;