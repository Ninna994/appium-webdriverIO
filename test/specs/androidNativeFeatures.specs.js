describe("Android native features", () => {
  xit("Access an Activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    await driver.pause(3000);
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  xit("Dialog / Alerts Android", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    await $("~OK Cancel dialog with a message").click();

    console.log("Alert text is: ", await driver.getAlertText());
    // await driver.acceptAlert();
    // await driver.dismissAlert();

    await $('//*[@resource-id="android:id/button1"]').click();

    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist;
  });

  xit("Vertical scrolling", async () => {
    // click on app
    //click on activity
    // scroll down to secure surfaces
    await $("~App").click();
    await $("~Activity").click();
    //scroll to the end (not so stable)
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    //more stable version scroll into view
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();
    // await $('~Secure Surfaces').click();

    await expect($("~Secure Dialog")).toExist();
  });

  xit("Horizontal scrolling", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );

    await driver.pause(3000);
  });

  it("Excercise scrolling", async () => {
    // Access the date widget - View - Date widgets - dialog
    //get the current date
    // click Change the date
    //scroll horiyontally to the right
    //pick 10th date from the month
    //sclick OK button
    //assert date is updated

    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );

    const currentDate = await $(
      "//android.widget.TextView[@resource-id='io.appium.android.apis:id/dateDisplay']"
    ).getText();

    await $("~change the date").click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    await $("~10 September 2022").click();
    await $("//android.widget.Button[@text='OK']").click();

    const newDate = await $(
      "//android.widget.TextView[@resource-id='io.appium.android.apis:id/dateDisplay']"
    ).getText();

    await expect(currentDate).not.toEqual(newDate);
  });
});
