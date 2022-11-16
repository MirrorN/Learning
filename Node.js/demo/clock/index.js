function setTime(objHour, objMinute, objSecond) {
    var nowTime = new Date();
    objHour.innerHTML = nowTime.getHours() >= 10 ? nowTime.getHours() : '0' + nowTime.getHours();
    objMinute.innerHTML = nowTime.getMinutes() >= 10 ? nowTime.getMinutes() : '0' + nowTime.getMinutes();
    objSecond.innerHTML = nowTime.getSeconds() >= 10 ? nowTime.getSeconds() : '0' + nowTime.getSeconds();
}