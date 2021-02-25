const usersRouter = require('./user');
const adminRouter = require('./admin/auth');
const categoryRouter = require('./category');
const productRouter = require('./product');
function routes(app) {

    app.use('/api',usersRouter );
    app.use('/api',adminRouter );
    app.use('/api',categoryRouter );
    app.use('/api',productRouter );
  }
  
  module.exports = routes;
  