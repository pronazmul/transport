/* eslint-disable no-undef */
const express = require('express')
const { check } = require('express-validator')

const verifyAuth = require('../middleware/check-auth')

const usersController = require('../controllers/users-controllers')
// const fileUpload = require("../middleware/file-upload");
// Configure multer for file uploads

const router = express.Router()

router.get('/', usersController.getUsers)

router.get('/:uid', verifyAuth.signin, usersController.getSpecificUser)

router.post(
  '/signup',
  // fileUpload.single("image"),
  [
    check('fullName').trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 }),
  ],
  usersController.signup
)

router.post('/login', usersController.login)
router.post('/logout', usersController.logout)

router.post('/bookmark/:pid/:uid', usersController.bookmarkPost)

router.post(
  '/notification/:uid/:event',
  verifyAuth.signin,
  usersController.addNotifications
)

router.delete(
  '/notification/:uid',
  verifyAuth.signin,
  usersController.clearNotifications
)

router.post('/verify/:uid', verifyAuth.signin, usersController.verifyAccount)

router.post(
  '/saveVerificationDetails/:uid',
  verifyAuth.signin,
  usersController.saveVerificationDetails
)

router.post('/users/pay', verifyAuth.signin, usersController.makePayment)

router.post(
  '/users/subscribe/:uid/:planId',
  verifyAuth.signin,
  usersController.subscribeUser
)

router.post(
  '/users/message',
  verifyAuth.requireSignin,
  usersController.sendMessage
)

router.get(
  '/users/message',
  verifyAuth.requireSignin,
  usersController.getMessage
)

router.post(
  '/users/block/:uid',
  verifyAuth.requireSignin,
  usersController.blockUser
)

router.post(
  '/users/mute/:uid',
  verifyAuth.requireSignin,
  usersController.muteUser
)

router.post(
  '/users/report/:uid',
  verifyAuth.requireSignin,
  usersController.reportUser
)

router.post(
  '/addPaymentMethod/:uid',
  verifyAuth.requireSignin,
  usersController.addPaymentMethod
)

router.get(
  '/getAccessRights/:uid',
  verifyAuth.requireSignin,
  usersController.getAccessRights
)

router.get(
  '/getUserByString/:subName',
  verifyAuth.requireSignin,
  usersController.getUserByString
)

module.exports = router
