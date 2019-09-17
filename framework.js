function openWebStore(url) {
	if (Sys.WaitBrowser('chrome').Exists) {
		Browsers.Item('chrome').Run();
		Browsers.Item('chrome').Navigate(url);
	} else {
		Browsers.Item('chrome').Run(url);
	}
}

function takeScreenshot(object) {
	Log.Picture(object);
}

function clickButton(object) {
	takeScreenshot(object);
	object.ClickButton();
}

function click(object) {
	object.click();
}

function setFocus(object) {
	object.SetFocus();
}

function dropDown(object) {
	object.DropDown();
}

function setText(object, string) {
	object.SetText(string);
}

function selectItem(object, item) {
	object.ClickItem(item);
}

function keys(object, string) {
	object.Keys(string);
}

function closeBrowser() {
	Aliases.Browser.Close();
}

function printInConsole(string) {
	Log.Message(string);
}
