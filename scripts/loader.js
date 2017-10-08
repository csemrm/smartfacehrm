
/* globals lang */
const TabBarItem = require("sf-core/ui/tabbaritem");
const Image = require("sf-core/ui/image");
const Navigator = require("sf-core/ui/navigator");
const BottomTabBar = require("sf-core/ui/bottomtabbar");
const Color = require("sf-core/ui/color");
//const settings = require("./settings.json");
const Router = require("sf-core/ui/router");
var tabBar;

exports.load = function load() {
    if (tabBar) {
        tabBar.setIndex("profile");
        return true;
    }

   // var itemColor = Color.create((settings.config.theme.currentTheme === "Style1" ? "#1775D0" : "#00B9FF"));
    tabBar = new BottomTabBar({
        backgroundColor: Color.create("#EAEAEB"),
        
    });

    var profileNavigator = new Navigator();
    profileNavigator.add("profile", require("./pages/tab/profile/profile"));
    profileNavigator.add("profiledetails", require("./pages/tab/profile/profiledetails"));
    profileNavigator.go("profile");
    tabBar.add("profile", new TabBarItem({
        title: "Profile",
        icon: Image.createFromFile("images://icon_tab_profile.png"),
        route: profileNavigator
    }));
    
    
    
    
    

    var hrNavigator = new Navigator();
    hrNavigator.add("hr", require("./pages/hrListPage"));
    //hrNavigator.add("newLeaveRequest", require("./pages/tabs/hr/pgNewLeaveRequest"));
    hrNavigator.go("hr");
    tabBar.add("hr", new TabBarItem({
         title: "Employee",
       icon: Image.createFromFile("images://icon_tab_hr.png"),
        route: hrNavigator
    }));

 

    var settingsNavigator = new Navigator();
    settingsNavigator.add("settings", require("./pages/settingsPage001"));
    settingsNavigator.go("settings");
    tabBar.add("settings", new TabBarItem({
        title: "Settings",
        icon: Image.createFromFile("images://icon_tab_settings.png"),
        route: settingsNavigator
    }));
    
    var rssFeddNavigator = new Navigator();
    rssFeddNavigator.add("rssfeed", require("./pages/rssfeed"));
    rssFeddNavigator.go("rssfeed");
    tabBar.add("rssfeed", new TabBarItem({
        title: "Rss Feed",
        icon: Image.createFromFile("images://icon_tab_settings.png"),
        route: rssFeddNavigator
    }));
    
    
    tabBar.setIndex("profile");
    Router.add("tabs", tabBar);
    return true;
};

  

