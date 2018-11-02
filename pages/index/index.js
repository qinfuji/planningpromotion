import { $stopWuxRefresher } from "../../libs/wux/index";
//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    //滚动广告部分
    imgUrls: [
      "../../assets/images/tooopen_sy_143912755726.jpg",
      "../../assets/images/tooopen_sy_175866434296.jpg",
      "../../assets/images/tooopen_sy_175833047715.jpg"
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),

    //当前选择的tab
    current: "tab1",

    //菜单贴顶
    menuTop: "",

    //卷列表
    ticketList: [
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      },
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      },
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      },
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      },
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      },
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      },
      {
        imageUrl: "../../assets/images/tooopen_sy_175833047715.jpg",
        descr: "我在测试描述",
        time: "时间",
        use_info: "使用情况"
      }
    ]
  },

  onShow: function() {
    var that = this;
    var query = wx.createSelectorQuery(); //创建节点查询器 query
    query.select("#fix").boundingClientRect(); //选择Id的节点，获取节点位置信息的查询请求
    query.exec(function(res) {
      //console.log(res[0].top); // #fix节点的上边界坐标
      that.setData({
        menuTop: res[0].top
      });
    });
  },

  onPageScroll: function(e) {
    //console.log(e);//{scrollTop:99}
    var that = this;
    //当页面滚动距离scrollTop > menuTop某元素距离文档顶部的距离时，某元素固定定位
    if (e.scrollTop > that.data.menuTop) {
      that.setData({
        menuFixed: true
      });
    } else {
      that.setData({
        menuFixed: false
      });
    }
  },

  /**
   * 监听用户上拉触底事件。
   */
  onReachBottom() {
    console.log("---->onReachBottom");
  },

  onPulling() {
    console.log("onPulling");
  },
  onRefresh() {
    console.log("onRefresh");
    setTimeout(() => {
      this.setData({
        // items: [{
        //   title: new Date,
        //   content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        // }, ...this.data.items],
      });

      $stopWuxRefresher();
    }, 2000);
  },

  onChange(e) {
    this.setData({
      current: e.detail.key
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
