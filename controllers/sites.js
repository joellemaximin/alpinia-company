const Site = require("../models/sites");
// const uploadToS3 = require('../services/file-upload')


exports.findAll = (req, res) => {
    Site.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Quelques erreurs sont parvenus dans le controller Site"
        });
      else res.send(data);
    });
};

//if user connect create a Site
exports.create = (req, res) => {
  const site = req.body;

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Veuillez remplir les champs"
    });
  }


  // Save Site in the database
  Site.create(site, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Quelques erreurs sont parvenus dans le controller Site."
      });
    else res.send(data);
  });


};

//findOne
exports.findOne = (req, res) => {
  Site.getId(req.params.id, (err, result) => {
    if (err){
      if (err.kind === "Pas trouvé") {
        res.status(404).send({
          message: `Ce Site n'exite pas ${req.params.id} .`
        });
      } else {
        res.status(500).send({
          message: "Retrouve pas ce Site " + req.params.id
        });
      }
    } else
    res.send(result)
  });
}

//update one
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Veuillez remplir les champs!"
    });
  }

  Site.updateId(
    req.params.id,
    new Site(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "Pas trouvé") {
          res.status(404).send({
            message: `Erreur id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Erreur pour cet update id" + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

//deleteOne
exports.delete = (req, res) => {
  Site.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "Pas trouvé") {
        res.status(404).send({
          message: `Erreur id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Impossible de supprimé id " + req.params.id
        });
      }
    } else res.send({ message: `Site supprimé =!` });
  });
};
