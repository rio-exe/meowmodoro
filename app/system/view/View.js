export default class View {

    controller = undefined;
    html = undefined;

    constructor(controller) {
        this.controller = controller;
        this.html = controller.html;
    }

    render() {
        // RENDER THE MODULE

        // READ THE HTML FILE
        fetch(this.html).then(response => response.text().then((result) => {
            // INJECT RESULT INTO MAIN DIV
            document.getElementById("app").innerHTML = result;
            console.log("MODULE WAS SUCCESSFULLY RENDERED!");

        }).then(() => {
            this.runController();
        }).catch((textError) => {
            // ERROR WHILE READING FILE
            console.log("An error occurred while getting file: " + this.html);
        }).catch((fetchError) => {
            // ERROR WHILE GETTING FILE
            console.log("An error occurred while getting file: " + this.html);
        }));

        // TAKE THE MAIN APP DIV

        // INJECT THE VIEW INSIDE IT
    }

    runController() {
        this.controller.run();
    }

}