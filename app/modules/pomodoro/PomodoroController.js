import Router from "/app/system/router/Router.js";

export default class PomodoroController {

    constructor() {
        this.html = "/app/modules/pomodoro/pomodoro.html";
    }

    run() {

        document.getElementById('try').addEventListener('click', () => {
            Router.RouterInstance.navigate('/try');
        });


    }

}