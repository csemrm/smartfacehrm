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
const ImageView = require('sf-core/ui/imageview');
const Font = require('sf-core/ui/font');


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
    this.headerBar.title = "Profile Details";
    this.headerBar.titleColor = Color.create("#1786a5");
    this.headerBar.leftItemEnabled = false;
     
    this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = true;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
    
    var myFlexLayout = new FlexLayout({
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width:400,
            height:170,
            //positionType: FlexLayout.PositionType.ABSOLUTE,
            //flexDirection: FlexLayout.FlexDirection.ROW,
            backgroundColor: Color.create("#1786a5")

    });
    
    this.layout.addChild(myFlexLayout);
    
    var myImageView = new ImageView({
     // flexGrow: 1,
      height: 120,
      width: 120,
      imageFillType: ImageView.FillType.Normal,
      alignSelf: FlexLayout.AlignSelf.CENTER,
      id: 101
    });
     myImageView.loadFromUrl(
      "http://hrm.swlbd.com/assets/images/personnel_infoemployee_id_54.jpeg"
    );
    
    var name = new Label({
        text: "Dr Mr XX",
        visible: true,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        textColor:Color.create("#e8ebef"),
        //top:2,
    });
    
    var nationality = new Label({
        text: "Bangladeshi",
        visible: true,
        textColor:Color.create("#e8ebef"),
        //stop:2,
         alignSelf: FlexLayout.AlignSelf.CENTER,
    });
   
    myFlexLayout.addChild(myImageView);
    myFlexLayout.addChild(name);
    myFlexLayout.addChild(nationality);
    
    var myFlexLayout2 = new FlexLayout({
            top: 2,
            left: 0,
            bottom: 0,
            right: 0,
            width:400,
            height:160,
            backgroundColor: Color.create("#c7d1dd"),
            borderColor:Color.create("#787f87")

    });
    
    var headlinePDetails = new Label({
        text: "Personal Details:",
        visible: true,
         left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.create("#1786a5"),
        //top:2,
    });
    
   headlinePDetails.font = Font.create("Arial", 16, Font.BOLD);
   myFlexLayout2.addChild(headlinePDetails);
 
   var fathersName = new Label({
        text: "Father's Name :"+ "MR Shamsur Rahman",
        visible: true,
        marginTop:2,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.create("#1786a5"),
        //top:2,
    });
    
    var MothersName = new Label({
        text: "Mothers's Name :"+ " Rokeya Begum",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.create("#1786a5"),
        //top:2,
    });
    
    var date_of_birth = new Label({
        text: "Date of Birth :"+ " 1962-11-30",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.create("#1786a5"),
        //top:2,
    });
    
     var blood_group = new Label({
        text: "Blood Group :"+ " A+",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.create("#1786a5"),
        //top:2,
    });
    var marital_status = new Label({
        text: "Marital Status :"+ " Marrired",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.create("#1786a5"),
        //top:2,
    });
    
    myFlexLayout2.addChild(fathersName);
    myFlexLayout2.addChild(MothersName);
    myFlexLayout2.addChild(date_of_birth);
    myFlexLayout2.addChild(blood_group);
    myFlexLayout2.addChild(marital_status);
    this.layout.addChild(myFlexLayout2);
    
    
    var myFlexLayout3 = new FlexLayout({
            top: 2,
            //left: 10,
            bottom: 0,
            right: 0,
            width:400,
            height:160,
            backgroundColor: Color.create("#1786a5"),
            borderColor:Color.create("#787f87")
            
            

    });
    
  var profDetails = new Label({
        text: "Professional Details:",
        visible: true,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.WHITE,
        left:2,
        //top:2,
    });
    
   profDetails.font = Font.create("Arial", 16, Font.BOLD);
   
   var employee_id = new Label({
        text: "Employee id :"+ "012",
        visible: true,
        marginTop:2,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.WHITE,
        //top:2,
    });
    
    var emp_category = new Label({
        text: "Category :"+ "Govt. Deputation",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.WHITE,
        //top:2,
    });
    
    var joining_date = new Label({
        text: "Joining Date :"+ "2012-08-12",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.WHITE,
        //top:2,
    });
    
    var designation_id = new Label({
        text: "Designation :"+ "2012-08-12",
        visible: true,
        left:2,
        alignSelf: FlexLayout.AlignSelf.AUTO,
        textColor:Color.WHITE,
        //top:2,
    });
   
   
   myFlexLayout3.addChild(profDetails);
   myFlexLayout3.addChild(employee_id);
   myFlexLayout3.addChild(emp_category);
   myFlexLayout3.addChild(joining_date);
   myFlexLayout3.addChild(designation_id);
   
   var back = new Button({
        width: 200,
        height: 50,
        borderRadius: 2,
        top: 5,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        backgroundColor: {
            normal: Color.create("#1786a5"),
            pressed: Color.CYAN
        },
        text: "Back",
        onPress: function() {
            console.log("Button pressed");
           Router.go("tabs/hr");



        }
    });
 myFlexLayout3.addChild(back);
 this.layout.addChild(myFlexLayout3);
    
    

}

// Page.onLoad -> This event is called once when page is created.
function onLoad() {}

module && (module.exports = Page_);