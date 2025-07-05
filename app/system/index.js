import Router from "/app/system/router/Router.js";
import PomodoroController from "/app/modules/pomodoro/PomodoroController.js";
import defaultScreenComponent from "/app/modules/defaultScreenComponent/defaultScreenComponent.js";

const router = Router.RouterInstance;

router.set("/", PomodoroController);
router.set("/try", defaultScreenComponent);

router.setDefault(defaultScreenComponent);

router.load();