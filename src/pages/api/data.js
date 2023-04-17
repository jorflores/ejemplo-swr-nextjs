export default async (req, res) => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const data = await response.json();
  res.status(200).json(data);
};
