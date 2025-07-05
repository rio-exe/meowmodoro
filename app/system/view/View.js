export default class View {

    controller = undefined;
    html = undefined;

    constructor(controller) {
        this.controller = controller;
        this.html = controller.html;
    }

    render() {
        fetch(this.html).then(response => response.text().then((result) => {
            document.getElementById("app").innerHTML = result;
        }).then(() => {
            this.runController();
        }).catch((textError) => {
            // ERROR WHILE READING FILE
            console.error("An error occurred while getting file: " + this.html + ". Details: " + textError);
        }).catch((fetchError) => {
            // ERROR WHILE GETTING FILE
            console.error("An error occurred while getting file: " + this.html + ". Details: " + fetchError);
        }));
    }

    get getController() {
        return this.controller;
    }

    get getHtml() {
        return this.html;
    }

    runController() {
        this.controller.run();
    }

}