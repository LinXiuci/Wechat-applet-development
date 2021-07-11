// pages/user/user.js
Page({
  data: {

    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    /* Super */
    Super:{
      imageSrc:[
          '/icon/super_member.png',
          '/icon/super_jiaru.png',
          '/icon/super_lianmingka.png'
      ],
      imageId:[
          'Super会员',
          '加入Super',
          '银行联名卡',
      ],
      text:[
          '最高20倍返云钻>',
          '送140元津贴>',
          '办卡送Super>',
      ],
      navigatorUrl:[

      ]
    },

    /* 我的订单菜单 */
    MyOrder:{
      imageSrc:[
          '/icon/Tobepaid.png',
          '/icon/Tobereceived.png',
          '/icon/shopping-cart-del.png',
          '/icon/PoliteEvaluation.png',
          '/icon/order.png',
      ],
      imageId:[
          ' 等待支付',
          ' 等待收货',
          ' 评价有礼',
          '退换/售后',
          ' 常购清单',
      ],
      navigatorUrl:[

      ]
    },
    
    EssentialTools:{
      imageSrc:[
        'http://image.suning.cn/uimg/cms/img/157250874743127029.png',
        'http://image.suning.cn/uimg/cms/img/157250876042530564.png',
        'http://image.suning.cn/uimg/cms/img/160266084132266426.png',
        'http://image.suning.cn/uimg/cms/img/157136450994431031.png',
        'http://image.suning.cn/uimg/cms/img/157251063564774447.png',
        'http://image.suning.cn/uimg/cms/img/157136454213083878.png',
        'http://image.suning.cn/uimg/cms/img/157251073785756292.png',
        'http://image.suning.cn/uimg/cms/img/157136448419617333.png',
      ],
      imageId:[
        '红包',
        '店铺关注',
        '我的预约',
        '客户服务',
        '必抢清单',
        '拼购',
        '校园VIP',
        '我的试用',
      ],
      navigatorUrl:[

      ]
    },


    /* 展示商品推荐的数据 */
    show:[
      {
        image: "http://uimgproxy.suning.cn/uimg1/pcpv/pcpv/2021/02/11/07/iwoghBannerPicture/pgx1RjhrMD1612998183183.png_374w_374h_4e?from=mobile",
        name: "Apple iPhone 12 mini 128G 白色 移动联通电信5G全网通手机",
        price:"¥5999.00"
      },
      {
        image: "http://imgservice.suning.cn/uimg1/b2c/image/KqY7pUFuUDxb2BE-j7_0Xg.jpg?from=mobile",
        name: "【全新原装正品】Apple 苹果iPhone XR 移动联通电信4G全网通智能手机美版有锁未激活 64GB 黑色【裸机】",
        price:"¥2829.00"
      },
      {
        image: "http://imgservice.suning.cn/uimg1/b2c/image/-VJUUww0UwsBbAU46yc2ZA.jpg?from=mobile",
        name: "绿联Ugreen HDMI转DP转换器连接线 Displayport母4K高清视频转换头线 笔记本电视投影仪40238",
        price:"¥169.00"
      },
      {
        image: "http://imgservice.suning.cn/uimg1/b2c/image/XFewmRlUcb-iaYn-4c713g.jpg?from=mobile",
        name: "正版 架构修炼之道——亿级网关、平台开放、分布式、微服务、容错等核心技术修炼实践_64_421",
        price:"¥169.00"
      },
      {
        image: "http://imgservice.suning.cn/uimg1/b2c/atmosphere/m_r4j46K-aBbfiUIgeLiuQ.png_374w_374h_4e?from=mobile",
        name: "伊利 谷粒多 谷物牛奶饮品 红谷牛奶 粗粮牛奶 12盒*250ml 营养成人学生早餐奶",
        price:"¥36.00"
      },
      {
        image: "http://imgservice.suning.cn/uimg1/b2c/image/R2ZrBpJJBFGNMLYiI5H0pQ.png?from=mobile",
        name: "【二手 95新】苹果/Apple iphoneX 二手手机 64G 银色 二手苹果x 二手 iphonex 国行正品",
        price:"¥2258.00"
      }
      ]


  },
  onLoad: function() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              that.setData({
                result:'ok',// 结果
                nickName:res.userInfo.nickName,// 微信昵称
                avatarUrl:res.userInfo.avatarUrl,// 微信头像
              })
            }
          })
        }else{
          // 未授权，结果返回null
          that.setData({
            result:'null',// 结果
          })
        }
      }
    })
  },
  // 请求API授权，获得用户头像和昵称
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo.nickName)
    var that = this;
    that.setData({
      result:'ok',// 结果
      nickName:e.detail.userInfo.nickName,// 微信昵称
      avatarUrl:e.detail.userInfo.avatarUrl,// 微信头像
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})