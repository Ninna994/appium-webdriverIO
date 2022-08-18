describe("Find Elements Tests", () => {
  xit("Find Element by accessibility Id", async () => {
    // find an element by acc.id
    //click on element
    //assert

    const appOption = await $("~App");
    await appOption.click();

    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  xit("Find element by className", async () => {
    //find element by class name
    const className = await $("android.widget.TextView");
    console.log(await className.getText());
    await expect(className).toHaveText("API Demos");
  });

  xit("Find elements by Xpath", async () => {
    // xpath - (//tagName)[@attribute=value]
    const appOption = await $("~App");
    const alertDialogs = await $(
      '//android.widget.TextView[@content-desc="Alert Dialogs"]'
    );
    const listDialog = await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    );
    const commandTwo = await $(
      '//android.widget.TextView[@text="Command two"]'
    );

    const successMessage = await $(
      '//android.widget.TextView[@resource-id="android:id/message"]'
    );

    await appOption.click();
    await alertDialogs.click();
    await listDialog.click();
    await commandTwo.click();
    await expect(successMessage).toHaveText("You selected: 1 , Command two");
  });

  xit("Find elements by UIAutomator", async () => {
    await $("~App").click();
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  xit("Find multiple elements", async () => {
    // get text for all options on home screen
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];

    const textList = await $$("android.widget.TextView");
    // loop through all elements
    for (const element of textList) {
      actualList.push(await element.getText());
    }
    // assert the entire text
    console.log("Actual list:" + actualList);
    console.log("Expected list:" + expectedList);

    await expect(actualList).toEqual(expectedList);
  });

  it("Text Field", async () => {
    //Adding text in text input field

    // Views / Auto Complete / ScreenTop

    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();

    //enter country name inside input
    const countryField = await $(
      '//*[@resource-id="io.appium.android.apis:id/edit"]'
    );
    const country = "Montengro";
    await countryField.addValue(country);

    await expect(countryField).toHaveText(country);
  });
});
