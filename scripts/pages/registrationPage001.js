/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const RegistrationPage001Design = require('ui/ui_registrationPage001');
const Button = require('sf-core/ui/button');
const FlexLayout = require('sf-core/ui/flexlayout');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const Router = require("sf-core/ui/router");
const RegistrationPage001 = extend(RegistrationPage001Design)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
  
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
  
    var back = new Button({
        width: 200,
        height: 80,
        borderRadius: 2,
        top: 30,
        alignSelf: FlexLayout.AlignSelf.CENTER,
        backgroundColor: {
            normal: Color.create("#1786a5"),
            pressed: Color.CYAN
        },
        text: "Back",
        onPress: function() {
            console.log("Button pressed");
           Router.go("pp");


        }
    });
 myFlexLayout.addChild(back);
  
  
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
}

module && (module.exports = RegistrationPage001);