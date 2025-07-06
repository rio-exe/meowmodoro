import Router from "/app/system/router/Router.js";

export default class PomodoroController {

    html = undefined;
    css = undefined;

    constructor() {
        this.html = "/app/modules/pomodoro/pomodoro.html";
        this.style = "/app/modules/pomodoro/pomodoro.css";
    }

    run() {
        document.getElementById("goToStoreButton").addEventListener("click", () => {
            Router.RouterInstance.navigate("/store");
        });

        document.getElementById("goToDefaultButton").addEventListener("click", () => {
            Router.RouterInstance.navigate("/doesNotExist");
        });

        document.getElementById("goToStatisticsButton").addEventListener("click", () => {
            Router.RouterInstance.navigate("/statistics");
        });
    }

}