import Card from "./comp/Card";
import "./styles.css";
import { useEffect, useState } from "react";
import ShuffleUserObject from "./comp/shuffle";
import Search from "./comp/search";
//The user's device location is assigned to a different country, as shown in the attached file. Fernando has submitted a request to update the asset location. Once the task is completed, the process can move to the next steps.
export default function App() {
  const [listUsers, setListUsers] = useState<User[] | null>(User);
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (!User) return null;
  const handleSearch = (query) => {
    if (!query) return null;

    const result = User.filter((user) =>
      Object.values(user).some((value: { value: string | number }) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );

    console.log(result);
    setListUsers(result);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, []);
  return (
    <div className="App">
      <h1>Clean Code</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <div className="search-container">
          {/*  <input
            className="search-input"
            placeholder="search user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
          <Search onChange={handleSearch} />
          <button className="search-button"> Shuffle</button>
        </div>
      </div>

      <div className="grid-container">
        {listUsers &&
          listUsers.map((user, index) => <Card key={index} user={user} />)}
      </div>
    </div>
  );
}
declare interface User {
  name: string;
  age: number;
  income: number;
  role: string;
}
const User: User[] = [
  {
    name: "Alice Johnson",
    age: 28,
    income: 55000,
    role: "Developer",
  },
  {
    name: "Bob Smith",
    age: 35,
    income: 72000,
    role: "Project Manager",
  },
  {
    name: "Charlie Davis",
    age: 24,
    income: 48000,
    role: "Designer",
  },
  {
    name: "Diana Roberts",
    age: 40,
    income: 85000,
    role: "Product Owner",
  },
];
