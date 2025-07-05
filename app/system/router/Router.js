import View from "/app/system/view/View.js";

export default class Router {

    endpoints = new Map();

    load() {
        const endpoint = window.location.pathname;

        if(this.endpoints.has(endpoint)) {
            const endpointController = this.endpoints.get(endpoint);
            const view = new View(new endpointController());

            view.render();
        }
    }

    set(endpoint, controller) {
        this.endpoints.set(endpoint, controller);
    }

}