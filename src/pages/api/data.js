export default async (req, res) => {
  const { page } = req.query;
  console.log(`Page in api: ${page}`);
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const data = await response.json();
  res.status(200).json(data);
};
