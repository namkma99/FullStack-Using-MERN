const User = require("../../models/User");
const jwt = require('jsonwebtoken');

class authUserController {

  //[POST]/api/admin/signup
  signup(req, res, next) {
    User.findOne({email: req.body.email}) 
        .exec((error, user) => {
          if(user) return res.status(400).json({
            message: 'Admin already resgistered'
          });

          const {
              firstName,
              lastName,
              email,
              password,
          } = req.body;
          const _user = new User({
            firstName,
            lastName,
            email,
            password,
            userName: Math.random().toString(),
            role: 'admin'
          });

          _user.save((error, data) => {
            if(error) {
              return  res.status(400).json({
                message: 'Someting went wrong'
              });
            };

            if(data) {
              return res.status(201).json({
                message: 'admin created succcessfully...!',
                user: data
              })
            }
          });
        });
  };

  //[POST]/api/admin/signin
  signin(req, res, next) {
      User.findOne({email: req.body.email})
          .exec((error, user) => {
              if(error) return res.status(400).json({error})
              if(user) {

                  if(user.authenticate(req.body.password) && user.role === 'admin') {
                      const token = jwt.sign({_id: user._id, role: user.role },process.env.JWT_SECRET, {expiresIn: '1h'});
                      const {
                          firstName,
                          lastName,
                          email,
                          role,
                          fullName
                      } = user;
                      res.status(200).json({
                          token,
                          user: {
                              firstName,
                              lastName,
                              email,
                              role,
                              fullName
                          },
                      })
                  };
              }
              else{
                return  res.status(400).json({
                    message: 'Invide Passsword'
                })
            }
              
          })
  };


    requireSignin(req, res, next) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }

}

module.exports = new authUserController();
