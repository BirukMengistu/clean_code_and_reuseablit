interface User {
  name: string;
  age: number;
  income: number;
  role: string;
}

function Card({ user }: { user: User }) {
  return (
    <div className="card">
      <h3>
        {" "}
        Name - <span>{user.name} </span>
      </h3>
      <h3 style={{ font: "blod", gap: "1.2rem" }}>
        age {"  "}
        {user.age}
      </h3>
      <h3 style={{ font: "blod", gap: "1.2rem" }}>
        Role {"  "}
        {user.role}
      </h3>
    </div>
  );
}

export default Card;
