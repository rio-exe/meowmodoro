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

            // CHECK FOR COMPONENTS AND THEN LOAD THEM
            this.loadComponents();

            // LOAD STYLE
            this.loadStyle();

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

    loadStyle() {

        const linkElements = document.getElementsByTagName("link");
        Array.from(linkElements).forEach((element) => {
            if (element.getAttribute("component") || element.getAttribute("module-endpoint") && element.getAttribute("module-endpoint") !== window.location.pathname) {
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
    }

    loadComponents() {
        const componentElements = Array.from(document.querySelector("body").querySelectorAll("*")).filter((element) => {
            return element.tagName.toLowerCase().includes("-component");
        });
        
        componentElements.forEach((element) => {

            // LOAD COMPONENT HTML INTO COMPONENT TAG
            const componentName = element.tagName.toLowerCase();
            import("/app/components/"+componentName+"/"+componentName+".js").then((component) => {
                const componentController = new component.default();

                // EXECUTE COOMPONENT'S CONTROLLER
                fetch(componentController.html).then(response => response.text().then((result) => {
                    element.innerHTML = result;
                }).catch((textError) => {
                    // ERROR WHILE READING FILE
                    console.error("An error occurred while getting file: " + this.html + ". Details: " + textError);
                }).catch((fetchError) => {
                    // ERROR WHILE GETTING FILE
                    console.error("An error occurred while getting file: " + this.html + ". Details: " + fetchError);
                }));
                
                // CLEAR AND RUN CSS STYLES
                const linkElements = document.getElementsByTagName("link");
                Array.from(linkElements).forEach((element) => {
                    if (element.getAttribute("component")) {
                        element.remove();
                    }
                });
                    
                if (componentController.style) {
                    const cssLinkElement = document.createElement("link");
                    cssLinkElement.setAttribute("rel", "stylesheet");
                    cssLinkElement.setAttribute("href", componentController.style);
                    cssLinkElement.setAttribute("component", componentName);
            
                    document.head.append(cssLinkElement);
                }

                componentController.run();
            }).catch((e) => {
                console.error("An error ocurred while searching for " + componentName + " component. It could not be imported!");
                throw e;
            });
        });
    }

}