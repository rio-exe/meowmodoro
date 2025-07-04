import Router from "/app/system/router/Router.js";
import pomodoro from "/app/modules/pomodoro/pomodoro.js";
import profile from "/app/modules/profile/profile.js";

const router = new Router();

router.set("/", new pomodoro());
router.set("/profile", new profile());

router.load();




