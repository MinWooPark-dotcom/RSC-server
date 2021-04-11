// ? 이 파일 실행시키면 models/index.js 실행되네??
const express = require("express");
const router = express.Router();

const {
  landing,
  myLocation,
  userInfo,
  signUp,
  signIn,
  // content,
  // friends,
  // mypage,
  // logout,
  // callback,
} = require("../controllers");

// * GET /
router.get("/", landing.get);

// GET /my-location
router.post("/myLocation", myLocation.post)

// * POST /sign-up
router.post("/sign-up", signUp.post);

// * POST /sign-in
router.post("/sign-in", signIn.post);

// * GET /userInfo
router.get("/userInfo", userInfo.get);

// // * GET /friends
// router.post("/friends", friends.post);

// // * POST /mypage
// router.post("/mypage", mypage.post);

// // * POST /logout
// router.post("/logout", logout.post);

// // * POST /callback Authorization
// router.post("/callback", callback.post);

module.exports = router;
