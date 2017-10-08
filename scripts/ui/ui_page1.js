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
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Font = require('sf-core/ui/font');
const Button = require('sf-core/ui/button');

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const Page1_ = extend(Page)(
  //constructor
  function(_super, props) {
    // initalizes super class for this page scope
    _super(this, Object.assign({}, {
      onShow: onShow.bind(this),
      onLoad: onLoad.bind(this),
      orientation: Page.Orientation.PORTRAIT
    }, props || {}));

    const imgStyle = getCombinedStyle(".imageView", {
      left: NaN,
      top: NaN,
      right: 0,
      bottom: 0,
      height: 60.3,
      image: Image.createFromFile("images://smartface.png"),
      imageFillType: ImageFillType.ASPECTFIT,
      borderColor: Color.create(255, 255, 255, 255),
      borderWidth: 0,
      borderRadius: 0,
      visible: true,
      alpha: 1,
      width: NaN,
      marginLeft: NaN,
      marginRight: NaN,
      maxHeight: 60,
      marginTop: 10,
      positionType: FlexLayout.PositionType.RELATIVE,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      flexGrow: 4
    });
    var img = new ImageView(imgStyle);
    this.layout.addChild(img);

    const tesxt123_1_1_1Style = getCombinedStyle(".label", {
      left: NaN,
      top: NaN,
      right: NaN,
      bottom: NaN,
      height: 90,
      backgroundColor: Color.create(0, 255, 255, 255),
      borderColor: Color.create(255, 255, 255, 255),
      borderRadius: 0,
      borderWidth: 0,
      visible: true,
      textAlignment: TextAlignment.MIDCENTER,
      alpha: 1,
      width: NaN,
      text: "Hello Rakhi",
      marginLeft: NaN,
      marginRight: NaN,
      multiline: true,
      marginTop: NaN,
      maxHeight: 90,
      positionType: FlexLayout.PositionType.RELATIVE,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      flexGrow: 2,
      font: Font.create("Arial", 16, Font.NORMAL)

    });
    var tesxt123_1_1_1 = new Label(tesxt123_1_1_1Style);
    if (tesxt123_1_1_1Style.scrollEnabled === false)
      tesxt123_1_1_1.ios && (tesxt123_1_1_1.ios.scrollEnabled = false);
    this.layout.addChild(tesxt123_1_1_1);
    this.tesxt123_1_1_1 = tesxt123_1_1_1;

    const flexlayoutStyle = getCombinedStyle(".flexLayout", {
      right: NaN,
      bottom: NaN,
      height: 130,
      backgroundColor: Color.create(0, 255, 255, 255),
      borderColor: Color.create(255, 0, 0, 0),
      borderWidth: 0,
      visible: true,
      alpha: 1,
      width: NaN,
      left: NaN,
      marginLeft: NaN,
      marginRight: NaN,
      maxHeight: 130,
      alignContent: FlexLayout.AlignContent.STRETCH,
      alignItems: FlexLayout.AlignItems.STRETCH,
      justifyContent: FlexLayout.JustifyContent.CENTER,
      flexWrap: FlexLayout.FlexWrap.NOWRAP,
      flexDirection: FlexLayout.FlexDirection.COLUMN,
      positionType: FlexLayout.PositionType.RELATIVE,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      flexGrow: 3
    });
    var flexlayout = new FlexLayout(flexlayoutStyle);
    this.layout.addChild(flexlayout);
    this.flexlayout = flexlayout;

    flexlayout.children = {};
    flexlayout.children["btn"] = (function() {
      const btnStyle = getCombinedStyle(".button", {
        left: NaN,
        top: NaN,
        right: 0,
        bottom: 0,
        height: 60,
        text: "Click me!",
        backgroundColor: Color.create(255, 0, 161, 241),
        borderColor: Color.create(255, 255, 255, 255),
        borderRadius: 0,
        borderWidth: 0,
        visible: true,
        alpha: 1,
        width: NaN,
        positionType: FlexLayout.PositionType.RELATIVE,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create("Arial", 16, Font.NORMAL)

      });
      var btn = new Button(btnStyle);
      this.btn = btn;

      return btn;
    }).call(this);
    flexlayout.addChild(flexlayout.children["btn"]);

    flexlayout.children["btnNext"] = (function() {
      const btnNextStyle = getCombinedStyle(".button", {
        left: NaN,
        top: 10,
        right: 0,
        bottom: 0,
        height: 60,
        text: "Next Page",
        backgroundColor: Color.create(255, 0, 161, 241),
        borderColor: Color.create(255, 255, 255, 255),
        borderWidth: 0,
        borderRadius: 0,
        visible: true,
        alpha: 1,
        width: NaN,
        positionType: FlexLayout.PositionType.RELATIVE,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create("Arial", 16, Font.NORMAL)

      });
      var btnNext = new Button(btnNextStyle);
      this.btnNext = btnNext;

      return btnNext;
    }).call(this);
    flexlayout.addChild(flexlayout.children["btnNext"]);

    const button1Style = getCombinedStyle(".button", {});
    var button1 = new Button(button1Style);
    this.layout.addChild(button1);

    const label1Style = getCombinedStyle(".label", {});
    var label1 = new Label(label1Style);
    if (label1Style.scrollEnabled === false)
      label1.ios && (label1.ios.scrollEnabled = false);
    this.layout.addChild(label1);

    //assign the children to page 
    this.children = Object.assign({}, {
      img: img,
      tesxt123_1_1_1: tesxt123_1_1_1,
      flexlayout: flexlayout,
      button1: button1,
      label1: label1
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
    visible: true
  });

  Object.assign(this.statusBar, statusBarStyle);

  if (statusBarStyle.color)
    this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
  if (statusBarStyle.style)
    this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
    title: "page1",
    titleColor: Color.create(255, 0, 0, 0),
    visible: true
  });

  Object.assign(this.headerBar, headerBarStyle);

}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad() {

  const pageStyle = getCombinedStyle(".page", {
    backgroundColor: Color.create("#EEEEEE"),
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: NaN,
    paddingBottom: 10,
    flexDirection: FlexLayout.FlexDirection.COLUMN,
    alignItems: FlexLayout.AlignItems.CENTER,
    direction: FlexLayout.Direction.INHERIT,
    flexWrap: FlexLayout.FlexWrap.NOWRAP,
    justifyContent: FlexLayout.JustifyContent.SPACE_AROUND
  });

  Object.assign(this.layout, pageStyle);

}

module && (module.exports = Page1_);