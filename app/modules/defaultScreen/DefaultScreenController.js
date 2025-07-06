import Router from "/app/system/router/Router.js";

export default class DefaultScreenController {

    html = undefined;
    style = undefined;

    constructor() {
        this.html = "/app/modules/defaultScreen/defaultScreen.html";
        this.style = "/app/modules/defaultScreen/defaultScreen.css";
    }

    run() {
        
        document.getElementById("goHomeButton").addEventListener("click", () => {
            Router.RouterInstance.navigate("/");
        });

    }

}