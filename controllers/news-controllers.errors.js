exports.invalidPath = (req, res) => {

  res.status(404).send({msg: "Invalid path"});

};

exports.handle500errors = (err, req, res) => {
  res.status(500).send("Server error");
}