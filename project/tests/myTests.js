const { remote } = require('webdriverio');
const phone_name = import('./config.js');

async function runTest() {
    const opts = {
        path: '/wd/hub',
        port: 4723,
        capabilities: {
            platformName: 'Android', // lub 'iOS' w zależności od platformy
            deviceName: phone_name,
            appPackage: 'com.viktoriia.kinash.projectFarm',
        },
    };

    const driver = await remote(opts);

    // Kliknięcie przycisku o określonym id
    await driver.$('~buttonId').click();

    // Wprowadzenie tekstu do pola tekstowego
    await driver.$('~inputFieldId').setValue('Hello, World!');

    // Zakończenie sesji
    await driver.deleteSession();
}

runTest();