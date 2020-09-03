var work = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
var names = [];
var team = [];


function getNames() {
    for (i = 0; i < 7; i++) {
        var name = prompt('Введите имя');
        names.push(name);
    }
}


function createTeam(work, names) {
    for (j = 0; j < 7; j++) {
        var newEmploee = {};
        newEmploee.work = work[j];
        newEmploee.name = names[j];
        team.push(newEmploee);
    }

}


function setSalary() {
    for (q = 0; q < 7; q++) {
        if (work[q].indexOf('Junior') == 0) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            var money = getRandomInt(500, 1000);
            team[q].salary = money;


        } else if (work[q].indexOf('Middle') == 0) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            var money = getRandomInt(1500, 2000);
            team[q].salary = money;


        } else if (work[q].indexOf('Senior') == 0) {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            var money = getRandomInt(2500, 3000);
            team[q].salary = money;


        } else {
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            var money = getRandomInt(4000, 4500);
            team[q].salary = money;


        }

    }
}
function tellAboutTeam() {
    for (z = 0; z < 7; z++) {
        team[z].show();
    }
}

getNames();
createTeam(work, names);
setSalary();
for (k = 0; k < 7; k++) {
    team[k].show = function () {
        var info = 'Меня зовут ' + this.name + ' ' + ', я работаю ' + this.work +
            ', я зарабатываю ' + this.salary;
        return console.log(info);
    };
}
tellAboutTeam();