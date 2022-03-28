const {Router} = require('express')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
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
            const {email, password, isDoctor} = request.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return response.status(400).json({message: 'Такой пользователь уже существует'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword, isDoctor})
            await user.save()

            response.status(201).json({message: 'Пользователь создан'})
        } catch (e) {
            response.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    })

router.post('/login', async (request, response) => {

})

module.exports = router