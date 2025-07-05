import Router from "/app/system/router/Router.js";
import pomodoro from "/app/modules/pomodoro/pomodoro.js";

const router = new Router();

router.set("/", pomodoro);

router.load();