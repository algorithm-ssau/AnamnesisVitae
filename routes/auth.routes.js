const {Router} = require('express')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const router = Router()
const auth = require("../middleware/auth.middleware");

router.post(
    '/register',
    [
        check('email', 'Некорректный email').normalizeEmail().isEmail(),
        check('password', 'Минимальная длина пароля 4 символа')
            .isLength({min: 4})
    ],
    async (request, response) => {
        try {
            const errors = validationResult(request)
            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные регистрации'
                })
            }
            const {email, password, accountType} = request.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return response.status(400).json({message: 'Такой пользователь уже существует'})
            }
            
            const hashedPassword = await bcrypt.hash(password, 12)
            if (accountType===false){
                const answers=" "
                const user = new User({email, password: hashedPassword, accountType, answers})
                await user.save()
            }
            else
            {
                const user = new User({email, password: hashedPassword, accountType})
                await user.save()
            }
           

            response.status(201).json({message: 'Пользователь создан'})
        } catch (e) {
            response.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    })

router.post('/login',
    [
        check('email', 'Некорректный mail').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (request, response) => {
        try {
            const errors = validationResult(request)
            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }

            const {email, password} = request.body

            const user = await User.findOne({email})

            if (!user) {
                return response.status(400).json({message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return response.status(400).json({message: 'Неверный пароль, попробуйте снова'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            response.json({token, userId: user.id, accountType: user.accountType})


        } catch (e) {
            response.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    })

    router.post("/finish", auth, async (req, res) => {
      try {
        const { from, answerTime } = req.body;

        const user = await User.findById(req.user.userId);
        console.log(req.user)
        
        if (!user || user.accountType === true) {
          return response
            .status(400)
            .json({ message: "Ошибка входа/типа аккаунта" });
        }
          
        User.findByIdAndUpdate(
          req.user.userId,
          {
              answers: from,
              answerTime: answerTime
          },
          function (err, result) {
            if (err) return console.log(err);
            //console.log(result);
          }
        );
        console.log(user)

        res.json({ answers: from, message: "Ответы добавлены успешно" });
      } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так" });
      }
    });
    

      router.post("/isAnswersFilled",auth, async (req, res) => {
        try {
          const user = await User.findById(req.user.userId);
          console.log(user)

          res.send({  isFilled :user.answers !==' ' });
        } catch (e) {
          res.status(500).json({ message: "Что-то пошло не так" });
        }
      });

      router.post("/patients", async (req, res) => {
        try {
            const users = await User.find()
            const filteredPatients = users.filter(function (el) {
                return el.accountType === false && (!!el.answers && el.answers !== ' ')
            });

            filteredPatients.sort(function(objA, objB) {
                let a = new Date(objA.answerTime);
                let b = new Date(objB.answerTime)
                return a>b ? -1 : a<b ? 1 : 0;
            });

            res.send({patients :filteredPatients})
        } catch (e) {
          res.status(500).json({ message: "Что-то пошло не так" });
        }
      });


    router.post("/profile", auth, async (req, res) => {
        try {
            const { name } = req.body;

            const user = await User.findById(req.user.userId);

            if (!user || user.accountType === true) {
                return response
                    .status(400)
                    .json({ message: "Ошибка входа/типа аккаунта" });
            }

            User.findByIdAndUpdate(
                req.user.userId,
                {
                    name: name
                },
                function (err, result) {
                    if (err) return console.log(err);
                }
            );
            console.log(user)

            res.json({ name: name, message: "Данные изменены успешно" });
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так" });
        }
    });

    router.post("/profileData", auth, async (req, res) => {
        try {
           
            const user = await User.findById(req.user.userId);

            if (!user || user.accountType === true) {
                return response
                    .status(400)
                    .json({ message: "Ошибка входа/типа аккаунта" });
            }

            console.log(user)
            if (user.name !== " ") {
                const name = user.name.split(" ")[0]
                const surname = user.name.split(" ")[1]
                res.json({ name: name, surname: surname });
            }
            else res.json({ name: user.name,  message: "Данных нет" });

            
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так" });
        }
    });


module.exports = router


// на случай очистки БД:
// User.deleteMany({accountType: false}, function(err, result){
            //     console.log(User.find());
            // });