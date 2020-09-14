// 定义全局变量 方便结束定时器
var task = null;

const startFlash = () => {
    task = setInterval(flash, 500);
}

const endFlash = () => {
    clearInterval(task);
    const elements = document.getElementsByClassName("box");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "orange";
    }
}

const flash = () => {
    const elements = document.getElementsByClassName("box");
    const randomNum = getRandomNum(3);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "orange";
    }
    for (let i = 0; i < randomNum.length; i++) {
        const element = elements[randomNum[i]];
        element.style.backgroundColor = getRandomColor();
    }
}

const getRandomColor = () => {
    return '#' + Math.floor( Math.random() * 0xffffff ).toString(16);
}

const getRandomNum = (n) => {
    const res = [];
    const arr = [];
    for (let i = 0; i < 9; i++) {
        arr[i] = i;
    }
    while (true) {
        const index = Math.floor(Math.random() * 9);
        if (arr[index] == undefined) continue;
        res.push(arr[index]);
        arr.splice(index, 1);
        if (res.length == n) break;
    }
    return res;
}