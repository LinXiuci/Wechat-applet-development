// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // tab切换
    currentTab: 0,
    navScrollLeft:0,
    tabIndex: 0,

    //轮播图连接
    imgUrls:[
      'https://image2.suning.cn/uimg/cms/img/161190603420928629.jpg?format=_is_1242w_610h',
      'https://oss.suning.com/adpp/creative_kit/material/picture/20210127-b26ed02d7a5f4dedb972b19b457608852e9efbc9297e420a.jpg?format=_is_1242w_610h',
      'https://oss.suning.com/adpp/creative_kit/material/picture/20210121-e760c5e37afa4d46ab38f02b9f567aa66b44d1739a4943fc.jpg?format=_is_1242w_610h',
      'http://oss.suning.com/aps/aps_learning/iwogh/2021/01/25/10/iwoghBannerPicture/58f1cb05bf8e48539896a637cc732378.png?format=_is_1242w_610h',
      'http://oss.suning.com/aps/aps_learning/iwogh/2021/01/29/17/iwoghBannerPicture/ef59a8e47aec42a1b2709bb2ba6dee8d.png?format=_is_1242w_610h',
      'http://oss.suning.com/aps/aps_learning/iwogh/2021/01/25/11/iwoghBannerPicture/cfd5b50a181446439b5fda812c4262d9.png?format=_is_1242w_610h',
      'https://oss.suning.com/adpp/creative_kit/material/picture/20210129-a2e6949fe22341a8acc32db91c36278fa8db615499d1432a.jpg?format=_is_1242w_610h',
      'http://oss.suning.com/aps/aps_learning/iwogh/2021/01/25/10/iwoghBannerPicture/8e75bafb3a7845f98a5d0a81ead10ef5.png?format=_is_1242w_610h'
    ],

    /* 广告展示位 */
    AdPlacement:{ 
      imageUrl:[
        'https://image1.suning.cn/uimg/cms/img/161294060172825365.jpg?from=mobile',
       /*  'https://image2.suning.cn/uimg/cms/img/161294625827261301.gif', */
      ],
      navigatorSrc:[

      ]
    },

    /* 三个小广告栏 */
    ThreeSmallAdvertisingColumns:{
      imageUrl:[
        'https://image1.suning.cn/uimg/cms/img/161166606112743894.jpg?from=mobile',
        'https://image2.suning.cn/uimg/cms/img/161107181900678418.png?from=mobile',
        'https://image3.suning.cn/uimg/cms/img/161166609932072121.jpg?from=mobile',
        
      ],
      navigatorSrc:[

      ]
    },

    /* 多选项菜单 */
    MultipleOptionMenu: {
      iconOne:[
        {
          name: "苏宁秒杀",
          src: "https://image1.suning.cn/uimg/cms/img/160518006726907674.png?from=mobile",
          url: "../../navigators/SuningSpike/SuningSpike/SuningSpike"
        }, 

        {
          name: "苏宁超市",
          src: "https://image3.suning.cn/uimg/cms/img/158225094251284751.png?from=mobile",
          url: "../../navigators/SuningSupermarket/SuningSupermarket/SuningSupermarket"
        }, 

        {
          name: "苏宁拼购",
          src: "https://image2.suning.cn/uimg/cms/img/158225098618947382.png?from=mobile",
          url: ""
        }, 

        {
          name: "手机数码",
          src: "https://image3.suning.cn/uimg/cms/img/159919108574328432.png?from=mobile",
          url: ""
        }, 
        
        {
          name: "苏宁家电",
          src: "https://image1.suning.cn/uimg/cms/img/158225106790473382.png?from=mobile",
          url: ""
        },
        
        {
          name: "免费水果",
          src: "https://image1.suning.cn/uimg/cms/img/158225110605546246.png?from=mobile",
          url: ""
        }, 
        
        {
          name: "supper会员",
          src: "https://image1.suning.cn/uimg/cms/img/161052021813568183.gif",
          url: ""
        }, 
        
        {
          name: "签到有礼",
          src: "https://image2.suning.cn/uimg/cms/img/158225123358512204.png?from=mobile",
          url: ""
        },

        {
          name: "领卷中心",
          src: "https://image2.suning.cn/uimg/cms/img/158225129991255185.png?from=mobile",
          url: ""
        }, 
        
        {
          name: "更多频道",
          src: "https://image3.suning.cn/uimg/cms/img/158225135374622745.png?from=mobile",
          url: ""
        },  
      ],
      iconTwo:[  
        {
          name: "领卷中心",
          src: "https://image2.suning.cn/uimg/cms/img/158225129991255185.png?from=mobile",
          url: ""
        }, 
        
        {
          name: "更多频道",
          src: "https://image3.suning.cn/uimg/cms/img/158225135374622745.png?from=mobile",
          url: ""
        }, 
        
        {
          name: "",
          src: "",
          url: ""
        },   
      ]
      
    },

    /* 新人红包 */
    NewcomerRedEnvelopeArea:{
      imageSrc:[
        "https://image3.suning.cn/uimg/cms/img/160415964665844208.png",
        "https://image3.suning.cn/uimg/cms/img/160415965447533335.gif",
        "https://image2.suning.cn/uimg/cms/img/160415966314573447.gif",
      ],
      navigatorUrl:[

      ] 
    },

      /* <!-- 限时秒杀 --> */
      LimitedTimeSpike:{
        title:[
          "限时秒杀",
        ],
        description:[
          "人气好货限时抢",
        ],
        imageSrc:[
          "http://image1.suning.cn/uimg/nmps/MBLSPZT/10080322510568628847picH_1_370x370.jpg",
          "http://imgservice.suning.cn/uimg1/b2c/image/84l7AQgeOz29a6Mbti6b_g.jpg?format=_is_400w_400h",
        ],
        price:[
          "¥1.1",
          "¥2.9",
        ],
        navigatorUrl:[
          "../../navigators/SuningSpike/SuningSpike/SuningSpike",
          "../../navigators/SuningSpike/SuningSpike/SuningSpike"
        ]
      },
      /* <!-- 大聚惠--> */
      Dajuhui:{
        title:[
          "大聚惠",
        ],
        description:[
          "聚优品 · 惠生活",
        ],
        imageSrc:[
          "http://imgservice.suning.cn/uimg1/b2c/image/IgAtrswh14QJx28lmZU9OA.jpg?format=_is_200w_200h_4e.webp",
          "http://imgservice.suning.cn/uimg1/b2c/image/iNguMO_mD_njHN58QmPl4w.jpg?format=_is_200w_200h_4e.webp",
        ],
        price:[
          "Apple",
          "茅台(MOUTAI)",
        ],
        navigatorUrl:[

        ]
      },

      /* 新品首发 */
      newProductLaunch:{
        title:[
          "新品首发",
        ],
        description:[
          "防疫新品伴春节",
        ],
        imageSrc:[
          "https://image3.suning.cn/uimg/cms/img/161249079215873557.jpg?format=_is_200w_200h.webp",
          "https://image2.suning.cn/uimg/cms/img/161283204294675545.jpg?format=_is_200w_200h.webp",
        ],
        price:[
          "",
          "",
        ], 
        navigatorUrl:[

        ]       
      },

      /*苏宁拼购  */
      SuningBuying:{
        title:[
          "苏宁拼购",
        ],
        description:[
          "2人拼更实惠 全场包邮",
        ],
        imageSrc:[
          "http://imgservice.suning.cn/uimg1/sniss/improve/xGyubZkBJxrBDeCclwOB4g.jpg?format=_is_200w_200h_4e.webp",
          "http://image.suning.cn/uimg/b2c/qrqm/0000000000000000000126525311.jpg?format=_is_200w_200h_4e.webp",
        ],
        price:[
          "2人拼199",
          "2人拼19.8",
        ], 
        navigatorUrl:[

        ]  
      },

      

      //为您推荐
      RecommendForYou:[
        {
          title:"为您推荐",
          text:"精选频道",
          navigatorUrl:""
        }
      ],
      //4个推荐位(苏宁国际、苏宁Outlets、会员抢购、Super会员)
      fourRecommendedPlace:[
        {
          title:"苏宁国际",
          imageSrc:"https://image3.suning.cn/uimg/b2c/qrqm/0070211884000000012190253755_200x200.jpg?format=_is_200w_200h_4e.webp",
          navigatorUrl:"",
        },
        {
          title:"苏宁Outlets",
          imageSrc:"https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000011056705052_200x200.jpg?format=_is_200w_200h_4e.webp",
          navigatorUrl:"",
        },
        {
          title:"会员抢购",
          imageSrc:"https://image1.suning.cn/uimg/cms/img/160941888895990187.png?from=mobile",
          navigatorUrl:"",
        },
        {
          title:"Super会员",
          imageSrc:"https://image2.suning.cn/uimg/cms/img/160941866483066340.png?from=mobile",
          navigatorUrl:"",
        },
      ],

      /*   <!-- 4个推荐位2(春节好酒、智能数码、极物特惠、手机通讯) --> */
      fourRecommendedPlace_two:[
        {
          title:"春节好酒",
          text:"每200减20",
          bgColor:"#5DADE2 ",
          color:"#5DADE2 ",
          imageSrc:"https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000012123781321_200x200.jpg?ver=2000&from=mobile",
          url:"",
          go:"GO>",
        },
        {
          title:"智能数码",
          text:"至高12期免息",
          bgColor:"#F08080",
          color:"#F08080",
          imageSrc:"https://image2.suning.cn/uimg/b2c/qrqm/0000000000000000011325712107_200x200.jpg?ver=2000&from=mobile",
          url:"",
          go:"GO>",
        },
        {
          title:"极物特惠",
          text:"爆款不止5折",
          bgColor:"#EB984E",
          color:"#EB984E",
          imageSrc:"https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000011417066405_200x200.jpg?ver=2000&from=mobile",
          url:"",
          go:"GO>",
        },
        {
          title:"手机通讯",
          text:"9.9元秒杀",
          bgColor:"#A569BD ",
          color:"#A569BD ",
          imageSrc:"https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000012122946298_200x200.jpg?ver=2000&from=mobile",
          url:"",
          go:"GO>",
        },
      ],



      /* <!-- 推荐榜单 -->  */
      RecommendedList:[
        {
          content:[
            {
              src:"http://imgservice.suning.cn/uimg1/sniss/improve/sdkaDeSK2kCIYjUlyJxUlQ.jpg?format=_is_200w_200h_4e.webp",
              color:"#F5CBA7",
              title:"人气热销手机榜",
              text:"卖爆5.0万件",
              bgColor:"#ffffff",
              borderColor:"#F7BC35",
            },
            {
              src:"http://imgservice.suning.cn/uimg1/sniss/improve/ar5Fqn9fIRxvDBZbeai-xA.jpg?format=_is_200w_200h_4e.webp",
              color:"",
              title:"热卖保温壶榜",
              text:"卖爆2588件",
              bgColor:"#ffffff",
              borderColor:"#ffa500",
        
            },
            {
              src:"http://imgservice.suning.cn/uimg1/sniss/improve/zSVvIhu7RED8SxQJRLJWeg.jpg?format=_is_200w_200h_4e.webp",
              color:"",
              title:"多功能电火锅榜",
              text:"卖爆8233件",
              bgColor:"#ffffff",
              borderColor:"#F7BC35",
            },
          ]
        }
      ],

      /* 广告推荐5 */
      Ad_recommendation_5:[
        {
          content:[
            {
              src:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000104231704.jpg?format=_is_200w_200h_4e.webp",
              src2:"https://imgservice.suning.cn/uimg1/sniss/improve/t6p15mjvo0Oc73_WSdVKKQ.jpg?format=_is_200w_200h_4e.webp",
              title:"多功能汤锅榜",
              text:"卖爆1223件",
              popularity_list:"人气榜",
              url:"",
            },
            {
              src:"https://imgservice.suning.cn/uimg1/sniss/improve/VREoULXf3fADWAvhveTGRw.jpg?format=_is_200w_200h_4e.webp",
              src2:"https://imgservice.suning.cn/uimg1/sniss/improve/iOD92sRP64xs0HS7bZAENg.jpg?format=_is_200w_200h_4e.webp",
              title:"日常通用口罩榜",
              text:"卖爆1.0万件",
              popularity_list:"人气榜",
              url:"",
            },
            {
              src:"https://imgservice.suning.cn/uimg1/sniss/improve/EClCiYWCYdiRsHddtpBlkQ.jpg?format=_is_200w_200h_4e.webp",
              src2:"//imgservice.suning.cn/uimg1/sniss/improve/YRUTPYs2S7WdlIKbsdLTwA.jpg?format=_is_200w_200h_4e.webp",
              title:"甄选回香红酒榜",
              text:"卖爆1.0万件",
              popularity_list:"人气榜",
              url:"",
            },
            {
              src:"https://imgservice.suning.cn/uimg1/sniss/improve/CkQFlx3UevpuCQUW1ei6_Q.jpg?format=_is_200w_200h_4e.webp",
              src2:"https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000610267497.jpg?format=_is_200w_200h_4e.webp",
              title:"必备手机配件榜",
              text:"卖爆4804件",
              popularity_list:"人气榜",
              url:"",
            },

          ],
        },
      ],

 

  },
    // 滑动切换tab
    bindChange: function( e ) {
      var that = this;
      that.setData( { currentTab: e.detail.current });
    },
  
    // 点击tab切换
    swichNav: function( e ) {
      var that = this;
      if( this.data.currentTab === e.target.dataset.current ) {
      return false;
      }else{
      that.setData( {
        currentTab: e.target.dataset.current
      })
      }
    },
  
     // 处理点击tab
     onTabClick(e) {
      let id = e.currentTarget.id;
      this.setData({
        tabIndex: id,
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