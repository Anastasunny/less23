const createTestCafe = require('testcafe');

(async() => {
const testcafe = await createTestCafe('localhost', 1337, 1338);


try {
    const runner = testcafe.createRunner();

    const failedCount = await runner
        .src(['./src/tests/*.ts'])
        .browsers(['chrome'])
        .reporter('multiple-html')
        .screenshots('./screenshots', false)
        .run({
            skipJsErrors: true,
            quarantineMode: true,
            selectorTimeout: 10000,
            assertionTimeout: 10000,
            pageLoadTimeout: 40000,
        });


    testcafe.close();


    if (failedCount) {
        process.exit(1);
    } else {
        process.exit(0);}
    } catch (err) {
        console.error(err);
        testcafe.close();
        process.exit(1);
    }
    })();