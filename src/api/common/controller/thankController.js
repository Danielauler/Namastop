import mongoose from 'mongoose';
import thankSchema from '../../models/thanks';

const Thank = mongoose.model('Thank', thankSchema);

// add new thanks to the database
export function addNewThank(req, res) {
  const thank = req.body;
  let reply = '';
  if (thank.text.includes('@')) {
    const newThank = new Thank(req.body);
    newThank.save((error, thank) => {
      if (error) { res.json(error); }
      reply = {
        text: `Belo agradecimento ${thank.user_name}. Lembre-se, em um coração onde mora a gratidão, também habitará sempre a felicidade.`,
        //   attachments: [
        //     {
        //       title: '1) /meetupbot-show <location> & <interest>',
        //       text: 'use this to find meetup-events based on your location and interests \nfor ex: /meetupbot-show Mumbai & Javascript (Dont forget to use ampersand (&).)',
        //       color: '#764FA5',
        //     },
        //   ],
      };
      res.json(reply);
    });
  } else {
    reply = {
      text: `Opsss! ${thank.user_name} para seu agradecimento ser aceito ele deve conter um usuário marcado na mensagem`,
    };
    res.json(reply);
  }
}

// get all thanks from the database
export function getThanks(req, res) {
  Thank.find({}, (error, thanks) => {
    if (error) { res.json(error); }
    res.status(200).json(thanks);
  });
}

// get single thanks based on the id
export function getThank(req, res) {
  Thank.findById(req.params.id, (error, thank) => {
    if (error) { res.json(error); }
    res.json(thank);
  });
}

// update the thanks information based on id
export function updateThank(req, res) {
  Thank.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, thank) => {
    if (error) { res.json(error); }
    res.json(thank);
  });
}

// delete the download from the database.
export function deleteThank(req, res) {
  Thank.remove({ _id: req.params.id }, (error, thank) => {
    if (error) { res.json(error); }
    res.json(thank);
  });
}
