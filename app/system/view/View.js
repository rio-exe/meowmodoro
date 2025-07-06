export default class View {

    controller = undefined;
    html = undefined;
    style = undefined;

    constructor(controller) {
        this.controller = controller;
        this.html = controller.html;
        this.style = controller.style;
    }

    render() {
        fetch(this.html).then(response => response.text().then((result) => {
            document.getElementById("app").innerHTML = result;

            const linkElements = document.getElementsByTagName("link");
            Array.from(linkElements).forEach((element) => {
                if (element.getAttribute("module-endpoint") && element.getAttribute("module-endpoint") !== window.location.pathname) {
                    element.remove();
                }
            });
            
            if (this.style) {
                const cssLinkElement = document.createElement("link");
                cssLinkElement.setAttribute("rel", "stylesheet");
                cssLinkElement.setAttribute("href", this.style);
                cssLinkElement.setAttribute("module-endpoint", window.location.pathname);
      
                document.head.append(cssLinkElement);
            }

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