import View from "/app/system/view/View.js";

class Router {

    endpoints = new Map();
    defaultController = undefined;

    load() {
        const endpoint = window.location.pathname;
        let endpointController;

        if(this.endpoints.has(endpoint)) {
            endpointController = this.endpoints.get(endpoint);
        } else if (this.defaultController) {
            endpointController = this.defaultController;
        } else {
            window.location.href = "/";
            return;
        }

        const view = new View(new endpointController());
        view.render();
    }

    set(endpoint, controller) {
        this.endpoints.set(endpoint, controller);
    }

    setDefault(controller) {
        this.defaultController = controller;
    }

    navigate(endpoint) {

        history.pushState({}, '', endpoint);
        this.load();

    }

}

export default { RouterInstance: new Router() };