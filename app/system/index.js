import Router from "/app/system/router/Router.js";
import PomodoroController from "/app/modules/pomodoro/PomodoroController.js";
import DefaultScreenController from "/app/modules/defaultScreen/DefaultScreenController.js";
import StoreController from "/app/modules/store/StoreController.js";
import StatisticsController from "/app/modules/statistics/StatisticsController.js";

const router = Router.RouterInstance;

router.set("/", PomodoroController);
router.set("/store", StoreController);
router.set("/statistics", StatisticsController);

router.setDefault(DefaultScreenController);

router.load();