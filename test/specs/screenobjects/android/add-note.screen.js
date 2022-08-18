class AddNoteScreen {
  get theSkipButton() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    );
  }

  get theAddButton() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]'
    );
  }

  get theAddTextButton() {
    return $('//android.widget.TextView[@text="Text"]');
  }

  get theAddChecklistButton() {
    return $('//android.widget.TextView[@text="Checklist"]');
  }

  get theTextTitleField() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get theTextField() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get theEditButton() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    );
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

export default new AddNoteScreen();
