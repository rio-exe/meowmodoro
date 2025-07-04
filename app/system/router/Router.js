import View from "/app/system/view/View.js";

export default class Router {

    views = new Map();

    load() {

        // RETRIEVE ENDPOINT
        const endpoint = window.location.pathname;

        // LOAD HTML FILE BASED ON ENDPOINT
        if(this.views.has(endpoint)) {
            console.log("FOUND A MATCH");

            // RENDER THE VIEW
            const view = this.views.get(endpoint);
            view.render();
            
        }

    }

    set(endpoint, controller) {
        const view = new View(controller)
        this.views.set(endpoint, view);
    }

}