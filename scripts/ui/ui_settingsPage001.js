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
const Label = require('sf-core/ui/label');
const Color = require('sf-core/ui/color');
const Button = require('sf-core/ui/button');
const Switch = require('sf-core/ui/switch');
const TextAlignment = require('sf-core/ui/textalignment');
const Font = require('sf-core/ui/font');

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const SettingsPage001_ = extend(Page)(
  //constructor
  function(_super, props) {
    // initalizes super class for this page scope
    _super(this, Object.assign({}, {
      onShow: onShow.bind(this),
      onLoad: onLoad.bind(this)
    }, props || {}));

    const themeRowStyle = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: 60,
      flexDirection: FlexLayout.FlexDirection.ROW
    });
    var themeRow = new FlexLayout(themeRowStyle);
    this.layout.addChild(themeRow);

    themeRow.children = {};
    themeRow.children["label1"] = (function() {
      const label1Style = getCombinedStyle(".label", {
        height: NaN,
        width: NaN,
        text: "Theme",
        textColor: Color.create(255, 66, 66, 66),
        flexGrow: 1
      });
      var label1 = new Label(label1Style);
      if (label1Style.scrollEnabled === false)
        label1.ios && (label1.ios.scrollEnabled = false);

      return label1;
    }).call(this);
    themeRow.addChild(themeRow.children["label1"]);

    themeRow.children["colorContainer"] = (function() {
      const colorContainerStyle = getCombinedStyle(".flexLayout", {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Color.create(255, 168, 168, 168),
        marginRight: 5,
        justifyContent: FlexLayout.JustifyContent.CENTER,
        alignContent: FlexLayout.AlignContent.CENTER,
        alignItems: FlexLayout.AlignItems.CENTER,
        alignSelf: FlexLayout.AlignSelf.CENTER
      });
      var colorContainer = new FlexLayout(colorContainerStyle);
      colorContainer.children = {};
      colorContainer.children["blueButton"] = (function() {
        const blueButtonStyle = getCombinedStyle(".button", {
          text: "",
          width: 30,
          height: 30,
          borderRadius: 5
        });
        var blueButton = new Button(blueButtonStyle);

        return blueButton;
      }).call(this);
      colorContainer.addChild(colorContainer.children["blueButton"]);

      return colorContainer;
    }).call(this);
    themeRow.addChild(themeRow.children["colorContainer"]);

    themeRow.children["colorcontainer_1"] = (function() {
      const colorcontainer_1Style = getCombinedStyle(".flexLayout", {
        width: 40,
        height: 40,
        borderRadius: 8,
        borderWidth: NaN,
        borderColor: Color.create(255, 168, 168, 168),
        marginRight: 5,
        justifyContent: FlexLayout.JustifyContent.CENTER,
        alignContent: FlexLayout.AlignContent.CENTER,
        alignItems: FlexLayout.AlignItems.CENTER,
        alignSelf: FlexLayout.AlignSelf.CENTER
      });
      var colorcontainer_1 = new FlexLayout(colorcontainer_1Style);
      colorcontainer_1.children = {};
      colorcontainer_1.children["redButton"] = (function() {
        const redButtonStyle = getCombinedStyle(".button", {
          text: "",
          width: 30,
          height: 30,
          borderRadius: 5,
          backgroundColor: Color.create(255, 208, 2, 27)
        });
        var redButton = new Button(redButtonStyle);

        return redButton;
      }).call(this);
      colorcontainer_1.addChild(colorcontainer_1.children["redButton"]);

      return colorcontainer_1;
    }).call(this);
    themeRow.addChild(themeRow.children["colorcontainer_1"]);

    const lineStyle = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: 1,
      backgroundColor: Color.create(255, 194, 194, 194)
    });
    var line = new FlexLayout(lineStyle);
    this.layout.addChild(line);

    const notificationsRowStyle = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: 60,
      flexDirection: FlexLayout.FlexDirection.ROW
    });
    var notificationsRow = new FlexLayout(notificationsRowStyle);
    this.layout.addChild(notificationsRow);

    notificationsRow.children = {};
    notificationsRow.children["label1_1"] = (function() {
      const label1_1Style = getCombinedStyle(".label", {
        height: NaN,
        width: NaN,
        text: "Notifications",
        textColor: Color.create(255, 66, 66, 66),
        flexGrow: 1
      });
      var label1_1 = new Label(label1_1Style);
      if (label1_1Style.scrollEnabled === false)
        label1_1.ios && (label1_1.ios.scrollEnabled = false);

      return label1_1;
    }).call(this);
    notificationsRow.addChild(notificationsRow.children["label1_1"]);

    notificationsRow.children["switch1"] = (function() {
      const switch1Style = getCombinedStyle(".switch", {
        width: 61,
        minHeight: 31,
        minWidth: 51,
        height: NaN,
        thumbOnColor: Color.create(255, 205, 95, 196),
        toggleOnColor: Color.create(110, 255, 0, 237),
        thumbOffColor: Color.create(255, 229, 174, 225),
        backgroundColor: Color.create(0, 0, 0, 0),
        toggleOffColor: Color.create(138, 229, 174, 225),
        toggle: true,
        alignSelf: FlexLayout.AlignSelf.CENTER
      });
      var switch1 = new Switch(switch1Style);
      if (switch1Style.toggleOffColor)
        switch1.android && (switch1.android.toggleOffColor = switch1Style.toggleOffColor);

      return switch1;
    }).call(this);
    notificationsRow.addChild(notificationsRow.children["switch1"]);

    const line_1Style = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: 1,
      backgroundColor: Color.create(255, 194, 194, 194)
    });
    var line_1 = new FlexLayout(line_1Style);
    this.layout.addChild(line_1);

    const label2Style = getCombinedStyle(".label", {
      text: "About        V1.0.1",
      marginTop: 40,
      width: 242,
      height: 37,
      multiline: false,
      htmlText: ""
    });
    var label2 = new Label(label2Style);
    if (label2Style.scrollEnabled === false)
      label2.ios && (label2.ios.scrollEnabled = false);
    this.layout.addChild(label2);

    const label2_1Style = getCombinedStyle(".label", {
      text: "Lorem ipsum dolor sit amet, veniam melius duo ei, ea his esse sonet, eu rebum tation vituperatoribus his. Lorem ipsum dolor sit amet, veniam melius duo ei eu rebum tation vituperatoribus his.",
      marginTop: NaN,
      width: 289,
      height: 100,
      htmlText: "",
      multiline: true,
      textAlignment: TextAlignment.TOPLEFT,
      textColor: Color.create(255, 160, 160, 160),
      font: Font.create(Font.DEFAULT, 14, Font.NORMAL)

    });
    var label2_1 = new Label(label2_1Style);
    if (label2_1Style.scrollEnabled === false)
      label2_1.ios && (label2_1.ios.scrollEnabled = false);
    this.layout.addChild(label2_1);

    //assign the children to page 
    this.children = Object.assign({}, {
      themeRow: themeRow,
      line: line,
      notificationsRow: notificationsRow,
      line_1: line_1,
      label2: label2,
      label2_1: label2_1
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
    color: Color.create(255, 55, 134, 255)
  });

  Object.assign(this.statusBar, statusBarStyle);

  if (statusBarStyle.color)
    this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
  if (statusBarStyle.style)
    this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
    title: "Settings",
    backgroundColor: Color.create(255, 55, 134, 255),
    titleColor: Color.create(255, 255, 255, 255)
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  });

  Object.assign(this.layout, pageStyle);

}

module && (module.exports = SettingsPage001_);