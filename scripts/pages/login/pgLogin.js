const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const TextAlignment = require('sf-core/ui/textalignment');
const Label = require('sf-core/ui/label');
const TextBox = require('sf-core/ui/textbox');
const Button = require('sf-core/ui/button');
const Router = require("sf-core/ui/router");
const Navigator = require("sf-core/ui/navigator");
const Font = require('sf-core/ui/font');
const ImageView = require('sf-core/ui/imageview');



const Page_ = extend(Page)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this, {
            onShow: onShow.bind(this),
            onLoad: onLoad.bind(this)
        });



    });

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
    // this.headerBar.visible = true;
    //  this.headerBar.title = "GSL HRM";
    // this.headerBar.titleColor = Color.create("#1786a5");
    // this.he/aderBar.leftItemEnabled = false;

    //   this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = true;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
    var myFlexLayout = new FlexLayout({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // alignSelf:FlexLayout.AlignSelf.CENTER,
        //positionType: FlexLayout.PositionType.ABSOLUTE,
        //flexDirection: FlexLayout.FlexDirection.ROW,
        backgroundColor: Color.WHITE

    });

    this.layout.addChild(myFlexLayout);
    var getStartedtitle = new Label({
        text: "GET STARTED",
        visible: true,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        textColor: Color.create("#606060"),
        //top:2,
    });
    getStartedtitle.font = Font.create("Arial", 20, Font.BOLD);
    var myImageView = new ImageView({
        // flexGrow: 1,
        height: 105,
        top: 20,
        width: 200,
        imageFillType: ImageView.FillType.Normal,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        id: 101
    });
    myImageView.loadFromUrl(
        "https://s1.postimg.org/1kar8t5d1b/attachment_9201736_2.png"
    );

    var usernametitle = new Label({
        top: 10,
        text: "Username/email:",
        visible: true,
        left: 25,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor: Color.create("#1786a5"),
        //top:2,
    });

    usernametitle.font = Font.create("Arial", 16, Font.BOLD);
    var username = new TextBox({
        left: 2,
        top: 10,
        width: 300,
        height: 65,
        hint: "Username",
        borderWidth: 1,
        text: 'jessia@gmail.com',
        alignSelf: FlexLayout.AlignSelf.CENTER,
        borderColor: Color.create("#F0F0F0"),
        borderRadius: 5,
    });
    var passwordtitle = new Label({
        text: "Password:",
        visible: true,
        left: 25,
        top: 10,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor: Color.create("#1786a5"),
        //top:2,
    });

    passwordtitle.font = Font.create("Arial", 16, Font.BOLD);

    var password = new TextBox({
        left: 2,
        top: 10,
        width: 300,
        height: 65,
        hint: "Password",
        borderColor: Color.create("#F0F0F0"),
        alignSelf: FlexLayout.AlignSelf.CENTER,
        isPassword: true,
        text: '123456',
        borderRadius: 5,
        borderWidth: 1
    });

    var loginButton = new Button({
        width: 200,
        height: 70,
        borderRadius: 2,
        top: 25,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        backgroundColor: {
            normal: Color.create("#1786a5"),
            pressed: Color.CYAN
        },
        text: "Login",
        onPress: function() {
            console.log("Button pressed");
            Router.go("tablist");


        }
    });



   var creatNew = new Button({
        width: 200,
        height: 70,
        borderRadius: 2,
        //borderColor: Color.WHITE,
        top: 25,
        textColor:Color.create("#d1ed76"),
        id:3333,
        bottom: 10,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        backgroundColor: {
            normal: Color.create("#1786a5"),
            pressed: Color.CYAN
        },
        text: "User Registration",
        onPress: function() {
            console.log("Button pressed2");
            Router.go("registration");


        }
    });
    
    creatNew.textAlignment = TextAlignment.MIDCENTER;
    
    
    

    myFlexLayout.addChild(myImageView);
    myFlexLayout.addChild(getStartedtitle);
    myFlexLayout.addChild(usernametitle);
    myFlexLayout.addChild(username);
    myFlexLayout.addChild(passwordtitle);
    myFlexLayout.addChild(password);
    myFlexLayout.addChild(loginButton);
    myFlexLayout.addChild(creatNew);




}

// Page.onLoad -> This event is called once when page is created.
function onLoad() {}

module && (module.exports = Page_);