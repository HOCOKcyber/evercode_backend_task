const log = require("./logger.js")

log("Планировщик инициализирован")


function addSchedulerTask(name, interval, task){
    if (typeof name != 'string'){
        log(`name: ${name} это не строка. Задача прервана`)
        return
    }
    if (typeof interval != 'number' || interval <= 0){
        log(`interval должен быть числом или быть больше нуля. Задача прервана`)
        return
    }
    if (typeof task != 'function' ){
        log(`task не является функцией. Задача прервана`)
        return
    }

    setInterval(() => {
        task()
    }, interval)
    log(`Задача ${name} успешно запущена`)
}

module.exports = addSchedulerTask