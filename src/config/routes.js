import { addNewThank, getThanks, getThank, updateThank, deleteThank } from '../api/common/controller/thankController';

const routes = (app) => {
  app.route('/thank')
    .get(getThanks)
    .post(addNewThank);

  app.route('/thank/:id')
    .get(getThank)
    .put(updateThank)
    .delete(deleteThank);
};

export default routes;
