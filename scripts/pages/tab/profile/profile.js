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
	function(_super){
		// Initalizes super class for this page scope
		_super(this, {
		    onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		});
});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
    this.headerBar.visible = true;
    this.headerBar.title = "Profile Management";
    this.headerBar.titleColor = Color.create("#000000");
    this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = true;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
    this.headerBar.leftItemEnabled = true;
    
    
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
    var myImageView = new ImageView({
        width:150,
        height: 150,
        top: 5,
        left: 0,
        bottom: 0,
        right: 0,
        imageFillType: ImageView.FillType.Normal,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        id: 101
    });
    myImageView.loadFromUrl(
        "http://hrm.swlbd.com/assets/images/personnel_infoemployee_id_54.jpeg"
    );
    
    var EditPhototitle = new Label({
        top: 2,
        text: "Edit Photo",
        left: 0,
        bottom: 0,
        right: 0,
        visible: true,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        textColor: Color.create("#1786a5"),
        //top:2,
    });

    EditPhototitle.font = Font.create("Arial", 16, Font.BOLD);

    var firstName = new TextBox({
        left: 2,
        top: 10,
        width: 300,
        height: 50,
        hint: "First Name",
        borderWidth: 1,
        text: 'Jessia',
        alignSelf: FlexLayout.AlignSelf.CENTER,
        borderColor: Color.create("#F0F0F0"),
        borderRadius: 5,
    });
    

  
    var lastName = new TextBox({
        left: 2,
        top: 10,
        width: 300,
        height: 50,
        hint: "Last Name",
        borderWidth: 1,
        text: 'Khan',
        alignSelf: FlexLayout.AlignSelf.CENTER,
        borderColor: Color.create("#F0F0F0"),
        borderRadius: 5,
    });
  
  
    var privateTitle = new Label({
        text: "Private Information",
        visible: true,
        left: 25,
        top:10,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor: Color.create("#cdd0d6"),
        //top:2,
    });

    privateTitle.font = Font.create("Arial", 16, Font.BOLD);
    
     var emailTitleBox = new TextBox({
        left: 2,
        top: 10,
        width: 300,
        height: 50,
        hint: "Email:",
        borderWidth: 1,
        text: 'Email:jessiasmith@gmail.com',
        alignSelf: FlexLayout.AlignSelf.CENTER,

        borderColor: Color.create("#F0F0F0"),
        borderRadius: 5,
    });
    
    var phoneitleBox = new TextBox({
        left: 2,
        top: 10,
        width: 300,
        height: 50,
        hint: "Phone:",
        borderWidth: 1,
        text: 'Phone:75843598345',
        alignSelf: FlexLayout.AlignSelf.CENTER,
        borderColor: Color.create("#F0F0F0"),
        borderRadius: 5,
    });
    
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
    
  
    myFlexLayout.addChild(myImageView);
    myFlexLayout.addChild(EditPhototitle);
    myFlexLayout.addChild(firstName);
    myFlexLayout.addChild(lastName);
    myFlexLayout.addChild(privateTitle);
    myFlexLayout.addChild(emailTitleBox);
    myFlexLayout.addChild(phoneitleBox);
    myFlexLayout.addChild(password);
   
    
    
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() {}

module && (module.exports = Page_);