/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const HrListPageDesign = require('ui/ui_hrListPage')
const Color = require('sf-core/ui/color');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const Label = require('sf-core/ui/label');
const FlexLayout = require('sf-core/ui/flexlayout');
const personnelInfos = require("model/personnelInfos")
const ImageView = require('sf-core/ui/imageview');
const rau = require("sf-extension-utils").rau;
const Router = require("sf-core/ui/router");
const Navigator = require("sf-core/ui/navigator");
const Font = require('sf-core/ui/font');


var myDataSet = [];

const HrListPage = extend(HrListPageDesign)(
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
  
     this.headerBar.visible = true;
     this.headerBar.title = "Rss Feed";
     this.headerBar.titleColor = Color.create("#1786a5");
      const page = this;
  
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad()
  
  const page = this;


  var myDataSet = [
    {
        title: 'Rss Feed Title 1',
        //backgroundColor:  Color.create("#1786a5"),
        textColor:Color.WHITE,
    },
    {
        title: 'Rss Feed Title 2',
        textColor:Color.WHITE,
        //backgroundColor: Color.create("#1786a5"),
    },
    {
        title: 'Rss Feed Title 3',
        textColor:Color.WHITE,
        //backgroundColor:  Color.create("#1786a5"),
    },
    {
        title: 'Rss Feed Title 4',
        textColor:Color.WHITE,
        //backgroundColor:  Color.create("#1786a5"),
    },
     {
        title: 'Rss Feed Title 5',
        textColor:Color.WHITE,
        //backgroundColor: Color.create("#1786a5"),
    },
    {
        title: 'Rss Feed Title 6',
        textColor:Color.WHITE,
        //backgroundColor:  Color.create("#1786a5"),
    }, {
        title: 'Rss Feed Title 7',
        //backgroundColor:  Color.create("#1786a5"),
        textColor:Color.WHITE,
    },
    {
        title: 'Rss Feed Title 8',
        textColor:Color.WHITE,
        //backgroundColor: Color.create("#1786a5"),
    },
    {
        title: 'Rss Feed Title 9',
        textColor:Color.WHITE,
        //backgroundColor:  Color.create("#1786a5"),
    },
    {
        title: 'Rss Feed Title 10',
        textColor:Color.WHITE,
        //backgroundColor:  Color.create("#1786a5"),
    },
     {
        title: 'Rss Feed Title 11',
        textColor:Color.WHITE,
        //backgroundColor: Color.create("#1786a5"),
    },
];

var myListView = new ListView({
    flexGrow:1,
    rowHeight: 60,
    backgroundColor: Color.create("#e89968"),
    itemCount: myDataSet.length,
});

myListView.onRowCreate = function(){
    var myListViewItem = new ListViewItem();
     myListViewItem.flexDirection = FlexLayout.FlexDirection.ROW;
    
    var myImageView = new ImageView({
      flexGrow: 1,
      height: 50,
      width: 40,
      top:10,
      left:5,
      imageFillType: ImageView.FillType.STRETCH,
      id: 101
    });
     myImageView.loadFromUrl(
      "https://cdn2.iconfinder.com/data/icons/sleekxp/Newsfeed-RSS.png"
    );
    var myLabelTitle = new Label({
        id: 102,
        height: 40,
        left:10,
        top:12,
        width: 300,
        alignSelf: FlexLayout.AlignSelf.AUTO
    });
    
        myLabelTitle.font = Font.create("Arial", 16, Font.BOLD);

    
    //myLabelTitle.textAlignment = TextAlignment.MIDCENTER;
    myListViewItem.addChild(myImageView);
    myListViewItem.addChild(myLabelTitle);
    return myListViewItem;
};

myListView.onRowBind = function(listViewItem,index){
    var myLabelTitle = listViewItem.findChildById(102);
    myLabelTitle.text = myDataSet[index].title;
    //myLabelTitle.backgroundColor = myDataSet[index].backgroundColor;
    myLabelTitle.textColor = myDataSet[index].textColor;
      
};

myListView.onRowSelected = function(listViewItem,index){
    console.log("selected index = " + index)
};

myListView.onPullRefresh = function(){
    myDataSet.push({
        title: 'Smartface Title '+myDataSet.length,
        backgroundColor: Color.RED,
    })
    myListView.itemCount = myDataSet.length;
    myListView.refreshData();
    myListView.stopRefresh();
};

  page.layout.addChild(myListView);
  page.myListView = myListView;
}

module && (module.exports = HrListPage)