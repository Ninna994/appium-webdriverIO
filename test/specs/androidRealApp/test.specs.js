describe("Real app Android", () => {
  it("Skips tutorial if it is displayed", async () => {
    const skipTutorial = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    );

    await skipTutorial.click();

    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it("Add new text note", async () => {
    const addButton = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]'
    );

    const addTextButton = await $('//android.widget.TextView[@text="Text"]');

    const addChecklistButton = await $(
      '//android.widget.TextView[@text="Checklist"]'
    );

    const textTitleField = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );

    const textField = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );

    await addButton.click();
    await addTextButton.click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    await textTitleField.setValue("Fav anime list");

    await textField.setValue("Naruto\nOne Piece\n AOT");

    //click back twice
    // once to close keyboard
    //second time to save changes

    await driver.back();
    await driver.back();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();
  });

  it("Delete note", async () => {
    const note = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).getText();

    // await $(
    //   '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    // ).click();

    await $("~More").click();
    await $('//android.widget.TextView[@text="Delete"]').click();
    await driver.acceptAlert();

    await expect(note).not.toExist();

    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    ).click();

    await $('//*[@text="Trash Can"]').click();
    const trashItem = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
    await expect(trashItem).toHaveText(note);
  });
});
