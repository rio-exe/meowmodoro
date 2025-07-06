import Router from "/app/system/router/Router.js";

export default class StatisticsController{

    constructor() {
        this.html = "/app/modules/statistics/statistics.html";
        this.style = "/app/modules/statistics/statistics.css";
    }

    run() {

        document.getElementById("goHomeButton").addEventListener("click", () => {
            Router.RouterInstance.navigate("/");
        });

    }

}