export default function handler(req, res) {
  console.log(req.cookies);
  console.log(req.query);
  console.log(req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ aadadad: '才早存易末' });
}
