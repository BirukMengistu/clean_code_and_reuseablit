type User = {
  name: string;
  age: number;
  income: number;
  role: string;
};

function shuffleUserObject(user: User): User {
  const keys = Object.keys(user) as (keyof User)[]; // Get keys with proper type
  const values = Object.values(user);

  // Shuffle the values array
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [values[i], values[j]] = [values[j], values[i]]; // Swap values
  }

  // Create a new object with shuffled keys and values
  const shuffledUser: Partial<User> = {};
  keys.forEach((key, index) => {
    shuffledUser[key] = values[index];
  });

  return shuffledUser as User;
}
