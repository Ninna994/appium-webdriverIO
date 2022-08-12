describe('Find Elements Tests', () => {
    it('Find Element by accessibility Id', async () => {
        // find an element by acc.id
        //click on element
        //assert

        const appOption = await $('~App');
        await appOption.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();

    });

    it.only('Find element by className', async () => {
        //find element by class name
        const className = await $('android.widget.TextView');
        console.log(await className.getText());
        await expect(className).toHaveText("API Demos");
    });
});