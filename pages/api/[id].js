export default function getById(req, res) {
  res.status = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(req.query.id)
}

