const Page = require("sf-core/ui/page");
const extend = require("js-base/core/extend");
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');




var Page1 = extend(Page)(
    function(_super) {
        _super(this, {
            onShow: function(params) {
                this.statusBar.visible = false;
                this.headerBar.visible = false;

            }
        });
        this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
        this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
        this.layout.alignItems = FlexLayout.AlignItems.CENTER;

        var myLabel = new Label({
            width: 300,
            height: 60,
            top:10,
            backgroundColor: Color.create("#00A1F1"),
            text: "Welcome TO Grameen Solutionsss",
            textAlignment: TextAlignment.MIDCENTER
        });

        this.layout.addChild(myLabel);
    }
);
module.exports = Page1;