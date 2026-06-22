const getHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'manikanta-farms',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};
