/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend'); 
const Color = require('sf-core/ui/color');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const Label = require('sf-core/ui/label');
const FlexLayout = require('sf-core/ui/flexlayout');
const Router = require("sf-core/ui/router");
const personnelInfos = require("../../../model/personnelInfos")
const ImageView = require('sf-core/ui/imageview');
const rau = require("sf-extension-utils").rau;


var myDataSet = [];


const PgListView = extend()(
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
  const page = this;
  personnelInfos.getPersonnelInfo(function(err, personnelInfos) {
    if (err)
      return alert("There is an error");

    myDataSet = personnelInfos;
    page.myListView.itemCount = myDataSet.length;
    page.myListView.refreshData();
    page.myListView.visible = true; 
    
    rau.checkUpdate();
    
  });


}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
  const page = this;

  var myListView = new ListView({
    flexGrow: 1,
    rowHeight: 200,
    backgroundColor: Color.LIGHTGRAY,
    itemCount: myDataSet.length,
    visible: false
  });
  myListView.refreshEnabled = false;

  myListView.onRowCreate = function() {
    var myListViewItem = new ListViewItem();
    myListViewItem.flexDirection = FlexLayout.FlexDirection.ROW;
    var myImageView = new ImageView({
      flexGrow: 1,
      imageFillType: ImageView.FillType.STRETCH,
      id: 101
    });
    myListViewItem.addChild(myImageView);
    var myLabelTitle = new Label({
      id: 102,
      height: 40,
      width: 100,
      alignSelf: FlexLayout.AlignSelf.CENTER
    });
    myListViewItem.addChild(myLabelTitle);
    return myListViewItem;
  };

  myListView.onRowBind = function(listViewItem, index) {
    var myImageView = listViewItem.findChildById(101);
    var myLabelTitle = listViewItem.findChildById(102);
    myLabelTitle.text = myDataSet[index].name;
    myImageView.loadFromUrl(
      "http://groomingapp.softvalleysolutions.com/uploads/" +
      myDataSet[index].picture
    );

    // myLabelTitle.backgroundColor = myDataSet[index].backgroundColor;
  };

  myListView.onRowSelected = function(listViewItem, index) {
    console.log("selected index = " + index);
     
  };

  page.layout.addChild(myListView);
  page.myListView = myListView;

}

module && (module.exports = PgListView);
