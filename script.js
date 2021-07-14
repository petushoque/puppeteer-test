//подключить модуль с Puppeteer`ом
const puppeteer = require('puppeteer'); 

async function test(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false, // выключен безголовый режим
        slowMo: 200, // замедление, чтобы отслеживать выполнение теста
        defaultViewport: null, //развернуть окно
        args: ['--start-maximized'] 
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto('https://2gis.ru/barnaul');

    await page.screenshot({path: 'screen.png'});

    // самого теста всё ещё нет

    console.log('Закрытие браузера');
    await browser.close();
}

test(); 