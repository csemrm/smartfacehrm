/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

const Navigator = require("sf-core/ui/navigator");
const Router = require("sf-core/ui/router");
const stylerBuilder = require("library/styler-builder");
const settings = require("./settings.json");
stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme.currentTheme);
var regsNavigator = new Navigator();
regsNavigator.add("registration", require("./pages/registrationPage001")); 
Router.add("registration", regsNavigator);

var navigator = new Navigator();
navigator.add("pgLogin", require("./pages/login/pgLogin"));
const loader = require("./loader");
loader.load();
var tablistNavigator = new Navigator();
tablistNavigator.add("tablist", require("./pages/tab/tablist")); 
Router.add("tablist", tablistNavigator);

var profileDetailsNavigator = new Navigator();
profileDetailsNavigator.add("profiledetails", require("./pages/tab/profile/profiledetails")); 
Router.add("profiledetails", profileDetailsNavigator);

 var employeeNavigator = new Navigator();
 employeeNavigator.add("hr", require("./pages/hrListPage")); 
Router.add("hr", employeeNavigator);





Router.add("login", navigator);
Router.go("login/pgLogin");