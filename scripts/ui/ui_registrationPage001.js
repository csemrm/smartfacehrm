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
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const TextBox = require('sf-core/ui/textbox');
const Button = require('sf-core/ui/button');

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const RegistrationPage001_ = extend(Page)(
  //constructor
  function(_super, props) {
    // initalizes super class for this page scope
    _super(this, Object.assign({}, {
      onShow: onShow.bind(this),
      onLoad: onLoad.bind(this)
    }, props || {}));

    const signUpPageHeaderStyle = getCombinedStyle(".flexLayout", {
      width: NaN,
      height: NaN,
      right: NaN,
      backgroundColor: Color.create(0, 255, 255, 255),
      maxHeight: NaN,
      alignItems: FlexLayout.AlignItems.CENTER,
      justifyContent: FlexLayout.JustifyContent.FLEX_START,
      flexGrow: 3,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var signUpPageHeader = new FlexLayout(signUpPageHeaderStyle);
    this.layout.addChild(signUpPageHeader);

    signUpPageHeader.children = {};
    signUpPageHeader.children["headerIcon"] = (function() {
      const headerIconStyle = getCombinedStyle(".label", {
        backgroundColor: Color.create(0, 255, 255, 255),
        textAlignment: TextAlignment.MIDCENTER,
        textColor: Color.create(255, 47, 47, 56),
        text: "Sign up",
        width: NaN,
        height: NaN,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        flexGrow: 1,
        font: Font.create("Nunito", 14, Font.NORMAL)

      });
      var headerIcon = new Label(headerIconStyle);
      if (headerIconStyle.scrollEnabled === false)
        headerIcon.ios && (headerIcon.ios.scrollEnabled = false);

      return headerIcon;
    }).call(this);
    signUpPageHeader.addChild(signUpPageHeader.children["headerIcon"]);

    signUpPageHeader.children["imageview1"] = (function() {
      const imageview1Style = getCombinedStyle(".imageView", {
        image: Image.createFromFile("images://sign_up_head_image.png"),
        width: NaN,
        height: NaN,
        imageFillType: ImageFillType.ASPECTFIT,
        flexGrow: 3,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var imageview1 = new ImageView(imageview1Style);

      return imageview1;
    }).call(this);
    signUpPageHeader.addChild(signUpPageHeader.children["imageview1"]);

    const userNameStyle = getCombinedStyle(".flexLayout", {
      backgroundColor: Color.create(0, 255, 255, 255),
      width: NaN,
      height: NaN,
      minHeight: NaN,
      marginTop: 10,
      paddingBottom: 4,
      flexGrow: 2,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      justifyContent: FlexLayout.JustifyContent.FLEX_END,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var userName = new FlexLayout(userNameStyle);
    this.layout.addChild(userName);

    userName.children = {};
    userName.children["userNameLbl"] = (function() {
      const userNameLblStyle = getCombinedStyle(".label", {
        height: 21,
        width: 334,
        backgroundColor: Color.create(0, 255, 255, 255),
        textAlignment: TextAlignment.MIDLEFT,
        textColor: Color.create(255, 160, 160, 160),
        text: "USERNAME",
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var userNameLbl = new Label(userNameLblStyle);
      if (userNameLblStyle.scrollEnabled === false)
        userNameLbl.ios && (userNameLbl.ios.scrollEnabled = false);

      return userNameLbl;
    }).call(this);
    userName.addChild(userName.children["userNameLbl"]);

    userName.children["userNameText"] = (function() {
      const userNameTextStyle = getCombinedStyle(".textBox", {
        width: 334,
        height: 40,
        text: "annamiracle",
        backgroundColor: Color.create(0, 255, 255, 255),
        borderColor: Color.create(255, 197, 197, 197),
        textColor: Color.create(255, 63, 63, 63),
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var userNameText = new TextBox(userNameTextStyle);
      if (userNameTextStyle.hintTextColor)
        userNameText.android && (userNameText.android.hintTextColor = userNameTextStyle.hintTextColor);
      if (userNameTextStyle.elevation)
        userNameText.android && (userNameText.android.elevation = userNameTextStyle.elevation);
      if (userNameTextStyle.keyboardAppearance)
        userNameText.ios && (userNameText.ios.keyboardAppearance = userNameTextStyle.keyboardAppearance);
      if (userNameTextStyle.clearButtonEnabled)
        userNameText.ios && (userNameText.ios.clearButtonEnabled = userNameTextStyle.clearButtonEnabled);
      if (userNameTextStyle.minimumFontSize)
        userNameText.ios && (userNameText.ios.minimumFontSize = userNameTextStyle.minimumFontSize);
      if (userNameTextStyle.adjustFontSizeToFit)
        userNameText.ios && (userNameText.ios.adjustFontSizeToFit = userNameTextStyle.adjustFontSizeToFit);

      return userNameText;
    }).call(this);
    userName.addChild(userName.children["userNameText"]);

    userName.children["userNameLine"] = (function() {
      const userNameLineStyle = getCombinedStyle(".flexLayout", {
        borderWidth: 0,
        backgroundColor: Color.create(255, 226, 226, 226),
        height: 1,
        width: NaN,
        borderColor: Color.create(255, 226, 226, 226),
        bottom: NaN,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var userNameLine = new FlexLayout(userNameLineStyle);

      return userNameLine;
    }).call(this);
    userName.addChild(userName.children["userNameLine"]);

    const emailStyle = getCombinedStyle(".flexLayout", {
      backgroundColor: Color.create(0, 255, 255, 255),
      width: NaN,
      height: NaN,
      minHeight: NaN,
      marginTop: NaN,
      paddingBottom: NaN,
      maxHeight: 70,
      flexGrow: 2,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      justifyContent: FlexLayout.JustifyContent.CENTER,
      alignItems: FlexLayout.AlignItems.STRETCH,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var email = new FlexLayout(emailStyle);
    this.layout.addChild(email);

    email.children = {};
    email.children["emailLbl"] = (function() {
      const emailLblStyle = getCombinedStyle(".label", {
        height: 21,
        width: 334,
        backgroundColor: Color.create(0, 255, 255, 255),
        textAlignment: TextAlignment.MIDLEFT,
        textColor: Color.create(255, 160, 160, 160),
        text: "EMAIL",
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var emailLbl = new Label(emailLblStyle);
      if (emailLblStyle.scrollEnabled === false)
        emailLbl.ios && (emailLbl.ios.scrollEnabled = false);

      return emailLbl;
    }).call(this);
    email.addChild(email.children["emailLbl"]);

    email.children["emailText"] = (function() {
      const emailTextStyle = getCombinedStyle(".textBox", {
        width: 334,
        height: 40,
        text: "annamiracle@template.com",
        backgroundColor: Color.create(0, 255, 255, 255),
        borderColor: Color.create(255, 197, 197, 197),
        textColor: Color.create(255, 63, 63, 63),
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var emailText = new TextBox(emailTextStyle);
      if (emailTextStyle.hintTextColor)
        emailText.android && (emailText.android.hintTextColor = emailTextStyle.hintTextColor);
      if (emailTextStyle.elevation)
        emailText.android && (emailText.android.elevation = emailTextStyle.elevation);
      if (emailTextStyle.keyboardAppearance)
        emailText.ios && (emailText.ios.keyboardAppearance = emailTextStyle.keyboardAppearance);
      if (emailTextStyle.clearButtonEnabled)
        emailText.ios && (emailText.ios.clearButtonEnabled = emailTextStyle.clearButtonEnabled);
      if (emailTextStyle.minimumFontSize)
        emailText.ios && (emailText.ios.minimumFontSize = emailTextStyle.minimumFontSize);
      if (emailTextStyle.adjustFontSizeToFit)
        emailText.ios && (emailText.ios.adjustFontSizeToFit = emailTextStyle.adjustFontSizeToFit);

      return emailText;
    }).call(this);
    email.addChild(email.children["emailText"]);

    email.children["emailLine"] = (function() {
      const emailLineStyle = getCombinedStyle(".flexLayout", {
        borderWidth: 0,
        backgroundColor: Color.create(255, 226, 226, 226),
        height: 1,
        width: NaN,
        borderColor: Color.create(255, 226, 226, 226),
        bottom: NaN,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var emailLine = new FlexLayout(emailLineStyle);

      return emailLine;
    }).call(this);
    email.addChild(email.children["emailLine"]);

    const birthdayStyle = getCombinedStyle(".flexLayout", {
      backgroundColor: Color.create(0, 255, 255, 255),
      width: NaN,
      height: NaN,
      minHeight: NaN,
      marginTop: NaN,
      paddingBottom: NaN,
      maxHeight: 70,
      flexGrow: 2,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      justifyContent: FlexLayout.JustifyContent.CENTER,
      alignItems: FlexLayout.AlignItems.STRETCH,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var birthday = new FlexLayout(birthdayStyle);
    this.layout.addChild(birthday);

    birthday.children = {};
    birthday.children["birthdayLbl"] = (function() {
      const birthdayLblStyle = getCombinedStyle(".label", {
        height: 21,
        width: 334,
        backgroundColor: Color.create(0, 255, 255, 255),
        textAlignment: TextAlignment.MIDLEFT,
        textColor: Color.create(255, 160, 160, 160),
        text: "BIRTHDAY",
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var birthdayLbl = new Label(birthdayLblStyle);
      if (birthdayLblStyle.scrollEnabled === false)
        birthdayLbl.ios && (birthdayLbl.ios.scrollEnabled = false);

      return birthdayLbl;
    }).call(this);
    birthday.addChild(birthday.children["birthdayLbl"]);

    birthday.children["birthdayText"] = (function() {
      const birthdayTextStyle = getCombinedStyle(".textBox", {
        width: 334,
        height: 40,
        text: "May 15, 1984",
        backgroundColor: Color.create(0, 255, 255, 255),
        borderColor: Color.create(255, 197, 197, 197),
        textColor: Color.create(255, 63, 63, 63),
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var birthdayText = new TextBox(birthdayTextStyle);
      if (birthdayTextStyle.hintTextColor)
        birthdayText.android && (birthdayText.android.hintTextColor = birthdayTextStyle.hintTextColor);
      if (birthdayTextStyle.elevation)
        birthdayText.android && (birthdayText.android.elevation = birthdayTextStyle.elevation);
      if (birthdayTextStyle.keyboardAppearance)
        birthdayText.ios && (birthdayText.ios.keyboardAppearance = birthdayTextStyle.keyboardAppearance);
      if (birthdayTextStyle.clearButtonEnabled)
        birthdayText.ios && (birthdayText.ios.clearButtonEnabled = birthdayTextStyle.clearButtonEnabled);
      if (birthdayTextStyle.minimumFontSize)
        birthdayText.ios && (birthdayText.ios.minimumFontSize = birthdayTextStyle.minimumFontSize);
      if (birthdayTextStyle.adjustFontSizeToFit)
        birthdayText.ios && (birthdayText.ios.adjustFontSizeToFit = birthdayTextStyle.adjustFontSizeToFit);

      return birthdayText;
    }).call(this);
    birthday.addChild(birthday.children["birthdayText"]);

    birthday.children["birthdayline"] = (function() {
      const birthdaylineStyle = getCombinedStyle(".flexLayout", {
        borderWidth: 0,
        backgroundColor: Color.create(255, 226, 226, 226),
        height: 1,
        width: NaN,
        borderColor: Color.create(255, 226, 226, 226),
        bottom: NaN,
        alignSelf: FlexLayout.AlignSelf.STRETCH,
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var birthdayline = new FlexLayout(birthdaylineStyle);

      return birthdayline;
    }).call(this);
    birthday.addChild(birthday.children["birthdayline"]);

    const passwordStyle = getCombinedStyle(".flexLayout", {
      backgroundColor: Color.create(0, 255, 255, 255),
      width: NaN,
      height: NaN,
      bottom: NaN,
      top: NaN,
      minHeight: NaN,
      maxHeight: NaN,
      marginBottom: 10,
      flexGrow: 2,
      justifyContent: FlexLayout.JustifyContent.FLEX_START,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var password = new FlexLayout(passwordStyle);
    this.layout.addChild(password);

    password.children = {};
    password.children["passwordLbl"] = (function() {
      const passwordLblStyle = getCombinedStyle(".label", {
        height: 21,
        width: 334,
        backgroundColor: Color.create(0, 255, 255, 255),
        textAlignment: TextAlignment.MIDLEFT,
        textColor: Color.create(255, 160, 160, 160),
        text: "PASSWORD",
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var passwordLbl = new Label(passwordLblStyle);
      if (passwordLblStyle.scrollEnabled === false)
        passwordLbl.ios && (passwordLbl.ios.scrollEnabled = false);

      return passwordLbl;
    }).call(this);
    password.addChild(password.children["passwordLbl"]);

    password.children["passwordText"] = (function() {
      const passwordTextStyle = getCombinedStyle(".textBox", {
        width: 334,
        height: 40,
        text: "12345",
        backgroundColor: Color.create(0, 255, 255, 255),
        borderColor: Color.create(255, 197, 197, 197),
        textColor: Color.create(255, 63, 63, 63),
        top: NaN,
        isPassword: true,
        font: Font.create("Nunito", 16, Font.NORMAL)

      });
      var passwordText = new TextBox(passwordTextStyle);
      if (passwordTextStyle.hintTextColor)
        passwordText.android && (passwordText.android.hintTextColor = passwordTextStyle.hintTextColor);
      if (passwordTextStyle.elevation)
        passwordText.android && (passwordText.android.elevation = passwordTextStyle.elevation);
      if (passwordTextStyle.keyboardAppearance)
        passwordText.ios && (passwordText.ios.keyboardAppearance = passwordTextStyle.keyboardAppearance);
      if (passwordTextStyle.clearButtonEnabled)
        passwordText.ios && (passwordText.ios.clearButtonEnabled = passwordTextStyle.clearButtonEnabled);
      if (passwordTextStyle.minimumFontSize)
        passwordText.ios && (passwordText.ios.minimumFontSize = passwordTextStyle.minimumFontSize);
      if (passwordTextStyle.adjustFontSizeToFit)
        passwordText.ios && (passwordText.ios.adjustFontSizeToFit = passwordTextStyle.adjustFontSizeToFit);

      return passwordText;
    }).call(this);
    password.addChild(password.children["passwordText"]);

    password.children["passwordLine"] = (function() {
      const passwordLineStyle = getCombinedStyle(".flexLayout", {
        borderWidth: 0,
        backgroundColor: Color.create(255, 226, 226, 226),
        height: 1,
        width: NaN,
        borderColor: Color.create(255, 226, 226, 226),
        font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

      });
      var passwordLine = new FlexLayout(passwordLineStyle);

      return passwordLine;
    }).call(this);
    password.addChild(password.children["passwordLine"]);

    const loginbuttonStyle = getCombinedStyle(".button", {
      backgroundColor: Color.create(255, 54, 134, 255),
      width: NaN,
      text: "Sign up",
      height: NaN,
      minHeight: NaN,
      maxHeight: 60,
      flexGrow: 1,
      font: Font.create("Nunito", 16, Font.BOLD)

    });
    var loginbutton = new Button(loginbuttonStyle);
    this.layout.addChild(loginbutton);

    const signUpPageFooterStyle = getCombinedStyle(".flexLayout", {
      backgroundColor: Color.create(0, 255, 255, 255),
      width: NaN,
      height: NaN,
      minHeight: NaN,
      maxHeight: NaN,
      flexDirection: FlexLayout.FlexDirection.ROW,
      alignItems: FlexLayout.AlignItems.FLEX_START,
      justifyContent: FlexLayout.JustifyContent.CENTER,
      flexGrow: 2,
      alignSelf: FlexLayout.AlignSelf.STRETCH,
      font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

    });
    var signUpPageFooter = new FlexLayout(signUpPageFooterStyle);
    this.layout.addChild(signUpPageFooter);

    signUpPageFooter.children = {};
    signUpPageFooter.children["footerText"] = (function() {
      const footerTextStyle = getCombinedStyle(".label", {
        backgroundColor: Color.create(0, 255, 255, 255),
        height: 20,
        text: "ALREADY HAVE AN ACCOUNT",
        width: 183,
        marginTop: 10,
        textColor: Color.create(255, 133, 133, 133),
        font: Font.create("Nunito", 12, Font.NORMAL)

      });
      var footerText = new Label(footerTextStyle);
      if (footerTextStyle.scrollEnabled === false)
        footerText.ios && (footerText.ios.scrollEnabled = false);

      return footerText;
    }).call(this);
    signUpPageFooter.addChild(signUpPageFooter.children["footerText"]);

    signUpPageFooter.children["footerSignupLbl"] = (function() {
      const footerSignupLblStyle = getCombinedStyle(".label", {
        backgroundColor: Color.create(0, 255, 255, 255),
        height: 20,
        text: "SIGN IN",
        width: 57,
        marginTop: 10,
        textColor: Color.create(255, 31, 31, 31),
        font: Font.create("Nunito", 12, Font.BOLD)

      });
      var footerSignupLbl = new Label(footerSignupLblStyle);
      if (footerSignupLblStyle.scrollEnabled === false)
        footerSignupLbl.ios && (footerSignupLbl.ios.scrollEnabled = false);

      return footerSignupLbl;
    }).call(this);
    signUpPageFooter.addChild(signUpPageFooter.children["footerSignupLbl"]);

    //assign the children to page 
    this.children = Object.assign({}, {
      signUpPageHeader: signUpPageHeader,
      userName: userName,
      email: email,
      birthday: birthday,
      password: password,
      loginbutton: loginbutton,
      signUpPageFooter: signUpPageFooter
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
    font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

  });

  Object.assign(this.statusBar, statusBarStyle);

  if (statusBarStyle.color)
    this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
  if (statusBarStyle.style)
    this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
    title: "Login",
    visible: false,
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
    backgroundColor: Color.create(255, 238, 238, 238),
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: NaN,
    paddingTop: 20,
    justifyContent: FlexLayout.JustifyContent.FLEX_START,
    alignContent: FlexLayout.AlignContent.STRETCH,
    alignItems: FlexLayout.AlignItems.STRETCH,
    flexDirection: FlexLayout.FlexDirection.COLUMN,
    flexWrap: FlexLayout.FlexWrap.WRAP,
    font: Font.create(Font.DEFAULT, 16, Font.NORMAL)

  });

  Object.assign(this.layout, pageStyle);

}

module && (module.exports = RegistrationPage001_);