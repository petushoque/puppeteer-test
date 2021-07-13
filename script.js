//подключить модуль с Puppeteer`ом
const puppeteer = require('puppeteer'); 

async function testTaxiResult(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false, // выключен безголовый режим
        slowMo: 100, // замедление, чтобы отслеживать выполнение теста
        defaultViewport: null, //развернуть окно
        args: ['--start-maximized'] 
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto('https://www.avito.ru/barnaul/doma_dachi_kottedzhi/dom_68_m_na_uchastke_5_sot._2197340652');

    await page.screenshot({path: 'testTaxiResult.png'});

    // самого теста всё ещё нет

    console.log('Закрытие браузера');
    await browser.close();
}

testTaxiResult(); 