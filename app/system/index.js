import Router from "/app/system/router/Router.js";
import DefaultScreenController from "/app/modules/defaultScreen/DefaultScreenController.js";

const router = Router.RouterInstance;

router.setDefault(DefaultScreenController);

router.load();