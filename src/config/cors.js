module.exports = (req, res, next) => {
  res.header('Access-Controle-Allow-Origin', '*');
  res.header('Access-Controle-Allow-Methor', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};
