//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const Font = require('sf-core/ui/font');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const ProfilePage002_ = extend(Page)(
  //constructor
  function(_super, props) {
    // initalizes super class for this page scope
    _super(this, Object.assign({}, {
      onShow: onShow.bind(this),
      onLoad: onLoad.bind(this)
    }, props || {}));

    const profileHeaderStyle = getCombinedStyle(".flexLayout", {
      width: NaN,
      left: NaN,
      backgroundColor: Color.create(255, 255, 255, 255),
      height: NaN,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      flexGrow: 3,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var profileHeader = new FlexLayout(profileHeaderStyle);
    this.layout.addChild(profileHeader);

    profileHeader.children = {};
    profileHeader.children["imageview1"] = (function() {
      const imageview1Style = getCombinedStyle(".imageView", {
        height: NaN,
        imageFillType: ImageFillType.ASPECTFIT,
        image: Image.createFromFile("images://user_profile.png"),
        width: NaN,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        flexGrow: 5,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var imageview1 = new ImageView(imageview1Style);

      return imageview1;
    }).call(this);
    profileHeader.addChild(profileHeader.children["imageview1"]);

    profileHeader.children["fullname"] = (function() {
      const fullnameStyle = getCombinedStyle(".label", {
        height: NaN,
        width: NaN,
        textAlignment: TextAlignment.MIDCENTER,
        text: "Anna Miracle",
        textColor: Color.create(255, 29, 29, 38),
        flexGrow: 1,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create(Font.DEFAULT, 24, Font.NORMAL)

      });
      var fullname = new Label(fullnameStyle);
      if (fullnameStyle.scrollEnabled === false)
        fullname.ios && (fullname.ios.scrollEnabled = false);

      return fullname;
    }).call(this);
    profileHeader.addChild(profileHeader.children["fullname"]);

    profileHeader.children["location"] = (function() {
      const locationStyle = getCombinedStyle(".label", {
        height: NaN,
        width: NaN,
        textAlignment: TextAlignment.MIDCENTER,
        text: "San Francisco, CA ",
        textColor: Color.create(255, 179, 179, 179),
        flexGrow: 1,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create(Font.DEFAULT, 14, Font.NORMAL)

      });
      var location = new Label(locationStyle);
      if (locationStyle.scrollEnabled === false)
        location.ios && (location.ios.scrollEnabled = false);

      return location;
    }).call(this);
    profileHeader.addChild(profileHeader.children["location"]);

    const tabsStyle = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: NaN,
      flexGrow: 1,
      flexDirection: FlexLayout.FlexDirection.ROW,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var tabs = new FlexLayout(tabsStyle);
    this.layout.addChild(tabs);

    tabs.children = {};
    tabs.children["friendsInfo"] = (function() {
      const friendsInfoStyle = getCombinedStyle(".flexLayout", {
        width: NaN,
        height: NaN,
        flexGrow: 1,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var friendsInfo = new FlexLayout(friendsInfoStyle);
      friendsInfo.children = {};
      friendsInfo.children["friendsCount"] = (function() {
        const friendsCountStyle = getCombinedStyle(".label", {
          width: NaN,
          height: NaN,
          textAlignment: TextAlignment.MIDCENTER,
          text: "417",
          flexGrow: 2,
          font: Font.create(Font.DEFAULT, 24, Font.NORMAL)

        });
        var friendsCount = new Label(friendsCountStyle);
        if (friendsCountStyle.scrollEnabled === false)
          friendsCount.ios && (friendsCount.ios.scrollEnabled = false);

        return friendsCount;
      }).call(this);
      friendsInfo.addChild(friendsInfo.children["friendsCount"]);
      friendsInfo.children["friendsLbl"] = (function() {
        const friendsLblStyle = getCombinedStyle(".label", {
          width: NaN,
          height: NaN,
          textAlignment: TextAlignment.TOPCENTER,
          textColor: Color.create(255, 180, 180, 180),
          text: "FRIENDS",
          flexGrow: 1,
          font: Font.create(Font.DEFAULT, 14, Font.NORMAL)

        });
        var friendsLbl = new Label(friendsLblStyle);
        if (friendsLblStyle.scrollEnabled === false)
          friendsLbl.ios && (friendsLbl.ios.scrollEnabled = false);

        return friendsLbl;
      }).call(this);
      friendsInfo.addChild(friendsInfo.children["friendsLbl"]);
      friendsInfo.children["line"] = (function() {
        const lineStyle = getCombinedStyle(".label", {
          width: NaN,
          height: 2,
          text: " ",
          textColor: Color.create(255, 214, 103, 205),
          backgroundColor: Color.create(255, 214, 103, 205),
          flexGrow: 0,
          font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

        });
        var line = new Label(lineStyle);
        if (lineStyle.scrollEnabled === false)
          line.ios && (line.ios.scrollEnabled = false);

        return line;
      }).call(this);
      friendsInfo.addChild(friendsInfo.children["line"]);

      return friendsInfo;
    }).call(this);
    tabs.addChild(tabs.children["friendsInfo"]);

    tabs.children["followinInfo"] = (function() {
      const followinInfoStyle = getCombinedStyle(".flexLayout", {
        width: NaN,
        height: NaN,
        flexGrow: 1,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var followinInfo = new FlexLayout(followinInfoStyle);
      followinInfo.children = {};
      followinInfo.children["followingCount"] = (function() {
        const followingCountStyle = getCombinedStyle(".label", {
          width: NaN,
          height: NaN,
          textAlignment: TextAlignment.MIDCENTER,
          text: "1192",
          flexGrow: 2,
          font: Font.create(Font.DEFAULT, 24, Font.NORMAL)

        });
        var followingCount = new Label(followingCountStyle);
        if (followingCountStyle.scrollEnabled === false)
          followingCount.ios && (followingCount.ios.scrollEnabled = false);

        return followingCount;
      }).call(this);
      followinInfo.addChild(followinInfo.children["followingCount"]);
      followinInfo.children["followingLbl"] = (function() {
        const followingLblStyle = getCombinedStyle(".label", {
          width: NaN,
          height: NaN,
          textAlignment: TextAlignment.TOPCENTER,
          textColor: Color.create(255, 180, 180, 180),
          text: "FOLLOWING",
          flexGrow: 1,
          font: Font.create(Font.DEFAULT, 14, Font.NORMAL)

        });
        var followingLbl = new Label(followingLblStyle);
        if (followingLblStyle.scrollEnabled === false)
          followingLbl.ios && (followingLbl.ios.scrollEnabled = false);

        return followingLbl;
      }).call(this);
      followinInfo.addChild(followinInfo.children["followingLbl"]);
      followinInfo.children["followingLine"] = (function() {
        const followingLineStyle = getCombinedStyle(".label", {
          width: NaN,
          height: 2,
          text: " ",
          visible: false,
          textColor: Color.create(255, 214, 103, 205),
          backgroundColor: Color.create(255, 214, 103, 205),
          flexGrow: 0,
          font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

        });
        var followingLine = new Label(followingLineStyle);
        if (followingLineStyle.scrollEnabled === false)
          followingLine.ios && (followingLine.ios.scrollEnabled = false);

        return followingLine;
      }).call(this);
      followinInfo.addChild(followinInfo.children["followingLine"]);

      return followinInfo;
    }).call(this);
    tabs.addChild(tabs.children["followinInfo"]);

    tabs.children["followersInfo"] = (function() {
      const followersInfoStyle = getCombinedStyle(".flexLayout", {
        width: NaN,
        height: NaN,
        flexGrow: 1,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var followersInfo = new FlexLayout(followersInfoStyle);
      followersInfo.children = {};
      followersInfo.children["followersCount"] = (function() {
        const followersCountStyle = getCombinedStyle(".label", {
          width: NaN,
          height: NaN,
          textAlignment: TextAlignment.MIDCENTER,
          text: "866",
          flexGrow: 2,
          font: Font.create(Font.DEFAULT, 24, Font.NORMAL)

        });
        var followersCount = new Label(followersCountStyle);
        if (followersCountStyle.scrollEnabled === false)
          followersCount.ios && (followersCount.ios.scrollEnabled = false);

        return followersCount;
      }).call(this);
      followersInfo.addChild(followersInfo.children["followersCount"]);
      followersInfo.children["followersLbl"] = (function() {
        const followersLblStyle = getCombinedStyle(".label", {
          width: NaN,
          height: NaN,
          textAlignment: TextAlignment.TOPCENTER,
          textColor: Color.create(255, 180, 180, 180),
          text: "FOLLOWERS",
          flexGrow: 1,
          font: Font.create(Font.DEFAULT, 14, Font.NORMAL)

        });
        var followersLbl = new Label(followersLblStyle);
        if (followersLblStyle.scrollEnabled === false)
          followersLbl.ios && (followersLbl.ios.scrollEnabled = false);

        return followersLbl;
      }).call(this);
      followersInfo.addChild(followersInfo.children["followersLbl"]);
      followersInfo.children["followersLine"] = (function() {
        const followersLineStyle = getCombinedStyle(".label", {
          width: NaN,
          height: 2,
          text: " ",
          visible: false,
          textColor: Color.create(255, 214, 103, 205),
          backgroundColor: Color.create(255, 214, 103, 205),
          flexGrow: 0,
          font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

        });
        var followersLine = new Label(followersLineStyle);
        if (followersLineStyle.scrollEnabled === false)
          followersLine.ios && (followersLine.ios.scrollEnabled = false);

        return followersLine;
      }).call(this);
      followersInfo.addChild(followersInfo.children["followersLine"]);

      return followersInfo;
    }).call(this);
    tabs.addChild(tabs.children["followersInfo"]);

    const infoListViewStyle = getCombinedStyle(".listView", {
      width: NaN,
      height: NaN,
      flexGrow: 4,
      positionType: FlexLayout.PositionType.RELATIVE,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var infoListView = new ListView(infoListViewStyle);
    infoListView.onRowCreate = function() {
      return new ListViewItem();
    };
    this.layout.addChild(infoListView);

    const userListItemStyle = getCombinedStyle(".flexLayout", {
      left: 0,
      top: NaN,
      width: NaN,
      height: 116,
      right: 0,
      bottom: 65,
      positionType: FlexLayout.PositionType.ABSOLUTE,
      flexDirection: FlexLayout.FlexDirection.ROW
    });
    var userListItem = new FlexLayout(userListItemStyle);
    this.layout.addChild(userListItem);

    userListItem.children = {};
    userListItem.children["userPhoto"] = (function() {
      const userPhotoStyle = getCombinedStyle(".imageView", {
        height: NaN,
        width: NaN,
        flexGrow: 2,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var userPhoto = new ImageView(userPhotoStyle);

      return userPhoto;
    }).call(this);
    userListItem.addChild(userListItem.children["userPhoto"]);

    userListItem.children["userInfo"] = (function() {
      const userInfoStyle = getCombinedStyle(".flexLayout", {
        width: NaN,
        height: NaN,
        visible: true,
        paddingLeft: 10,
        maxWidth: NaN,
        flexGrow: 6,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var userInfo = new FlexLayout(userInfoStyle);
      userInfo.children = {};
      userInfo.children["userFullname"] = (function() {
        const userFullnameStyle = getCombinedStyle(".label", {
          width: NaN,
          height: 40,
          textColor: Color.create(255, 74, 74, 74),
          text: "Antony Bell",
          textAlignment: TextAlignment.BOTTOMLEFT,
          font: Font.create(Font.DEFAULT, 22, Font.NORMAL)

        });
        var userFullname = new Label(userFullnameStyle);
        if (userFullnameStyle.scrollEnabled === false)
          userFullname.ios && (userFullname.ios.scrollEnabled = false);

        return userFullname;
      }).call(this);
      userInfo.addChild(userInfo.children["userFullname"]);
      userInfo.children["userEmail"] = (function() {
        const userEmailStyle = getCombinedStyle(".label", {
          width: NaN,
          height: 40,
          textColor: Color.create(255, 180, 180, 180),
          text: "antonybell@template.com",
          font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

        });
        var userEmail = new Label(userEmailStyle);
        if (userEmailStyle.scrollEnabled === false)
          userEmail.ios && (userEmail.ios.scrollEnabled = false);

        return userEmail;
      }).call(this);
      userInfo.addChild(userInfo.children["userEmail"]);

      return userInfo;
    }).call(this);
    userListItem.addChild(userListItem.children["userInfo"]);

    userListItem.children["imageview2"] = (function() {
      const imageview2Style = getCombinedStyle(".imageView", {
        width: NaN,
        height: NaN,
        image: Image.createFromFile("images://rightArrow.png"),
        maxWidth: 40,
        flexGrow: 1,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var imageview2 = new ImageView(imageview2Style);

      return imageview2;
    }).call(this);
    userListItem.addChild(userListItem.children["imageview2"]);

    //assign the children to page 
    this.children = Object.assign({}, {
      profileHeader: profileHeader,
      tabs: tabs,
      infoListView: infoListView,
      userListItem: userListItem
    });

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar", {
    color: Color.create(255, 55, 134, 255),
    font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

  });

  Object.assign(this.statusBar, statusBarStyle);

  if (statusBarStyle.color)
    this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
  if (statusBarStyle.style)
    this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
    title: "Profile",
    backgroundColor: Color.create(255, 55, 134, 255),
    titleColor: Color.create(255, 255, 255, 255),
    font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

  });

  Object.assign(this.headerBar, headerBarStyle);

}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad() {

  const pageStyle = getCombinedStyle(".page", {
    backgroundColor: Color.create(255, 255, 255, 255),
    flexDirection: FlexLayout.FlexDirection.COLUMN,
    flexWrap: FlexLayout.FlexWrap.WRAP,
    font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

  });

  Object.assign(this.layout, pageStyle);

}

module && (module.exports = ProfilePage002_);