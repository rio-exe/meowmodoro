import Router from "/app/system/router/Router.js";

export default class StoreController{

    constructor() {
        this.html = "/app/modules/store/store.html";
        this.style = "/app/modules/store/store.css";
    }

    run() {

        document.getElementById("goHomeButton").addEventListener("click", () => {
            Router.RouterInstance.navigate("/");
        });

    }

}