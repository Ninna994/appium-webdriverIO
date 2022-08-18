import AddNoteScreen from "../screenobjects/android/add-note.screen";

describe("Real app Android", () => {
  it("Skips tutorial if it is displayed", async () => {
    await AddNoteScreen.theSkipButton.click();

    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it("Add new text note", async () => {
    await AddNoteScreen.theAddButton.click();
    await AddNoteScreen.theAddTextButton.click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();
    await AddNoteScreen.theTextTitleField.setValue("Fav anime list");
    await AddNoteScreen.theTextField.setValue("Naruto\nOne Piece\n AOT");

    //click back twice
    // once to close keyboard
    //second time to save changes
    await AddNoteScreen.saveNote();

    await expect(AddNoteScreen.theEditButton).toBeDisplayed();
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
