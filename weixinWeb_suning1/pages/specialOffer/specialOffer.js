// pages/specialOffer/specialOffer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 十款拍照出彩的全面屏手机推荐 */
    Mobile_phone:[
      {
        title:"十款拍照出彩的全面屏手机推荐",
        ten_products:"10商品",
        title_Picture_Background:"http://imgservice.suning.cn/uimg1/scos/content/JzLL-dr4grNgo6YthMg76w.png_40-0-710-320a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"http://imgservice.suning.cn/uimg1/b2c/image/tekpo-lZxpANeceNTIZmlg.jpg?format=400h_400w_4e_80q.webp",
            src_name:"中兴ZTE 天机Axon 11 8G+128G 轻薄AMOLED双曲面屏 6400万四摄 视频防抖骁龙765 游戏拍照双模 5G手机",
            price:"¥2518",
            collar_Roll:" ",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/LxCXDcCAR6tbgCq2gFOY4A.jpg?format=400h_400w_4e_80q.webp",
            src_name:"三星Galaxy S21 Ultra 16GB+512GB 幽夜黑 5G手机 1.08亿100倍双长焦专业摄像 6.8英寸120Hz超顺滑护目屏 骁龙888 5nm旗舰芯片",
            price:"¥10699",
            collar_Roll:"领券200元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/suJuwPH9NJ-xl4LQuizwzQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"OPPO Reno5 Pro 5G 星河入梦 8GB+128GB 全网通 天玑1000+ 6400万水光人像四摄65W闪充 轻薄机身拍照美颜游戏智能手机",
            price:"¥3399",
            collar_Roll:" ",
          },
        ]
      },
    ],
    /*十大控温精准更锁鲜的风冷冰箱  */
    Air_cooled_refrigerator:[
      {
        title:"十大控温精准更锁鲜的风冷冰箱",
        ten_products:"10商品",
        title_Picture_Background:"//imgservice.suning.cn/uimg1/scos/content/TZtcZqiggLEM0YRdELtong.jpg_0-213-2000-900a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/ACnH7d39bRrNaMp-cbsfJA.jpg?format=400h_400w_4e_80q.webp",
            src_name:"海信（Hisense）436升 对开门冰箱 变频风冷无霜 电脑控温 家用（幻彩金）BCD-436WFK1DPQ",
            price:"¥2399",
            collar_Roll:" ",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/wBco7CcWNd44uZMZgq4clQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"西门子（SIEMENS）501升 超薄对开门冰箱 家用双开门 风冷无霜变频节能 BCD-501W(KX50NA30TI)",
            price:"¥5999",
            collar_Roll:"",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/V8et5G9csjhq47cXjWjvEw.jpg?format=400h_400w_4e_80q.webp",
            src_name:"苏宁极物小Biu 468升 对开门冰箱家用双开门电冰箱 智能双变频 一级节能 风冷无霜 纤薄大容量 JSE4628LP",
            price:"¥1999",
            collar_Roll:" ",
          },
        ]
      },
    ],

    /* 可远程操控的10款智控冰箱推荐 */
    Intelligent_control_refrigerator:[
      {
        title:"可远程操控的10款智控冰箱推荐",
        ten_products:"10商品",
        title_Picture_Background:"//imgservice.suning.cn/uimg1/scos/content/sjdwOeh6qeSt90Kgv0Ddqw.jpg_0-0-1770-799a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/SpPJORso_YFKgU1IthNYOQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"容声（Ronshen）501升多门四门对开门十字电冰箱家用风冷无霜变频一级智能 母婴 节能BCD-501WD18FP",
            price:"¥6999",
            collar_Roll:"领券500元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/PeYxZE5-WF9neQnZVsgpUQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"容声（Ronshen）645升对开门电冰箱大容量 双变频风冷无霜 一级能效双开门静音节能BCD-645WD18HPA",
            price:"¥5999",
            collar_Roll:"领券500元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/kIiARJgL9VWT3rJuWyw2Ww.jpg?format=400h_400w_4e_80q.webp",
            src_name:"海信（Hisense）579升家用对开门大容量电冰箱一级变频节能手机控制WIFi风冷无霜BCD-579WFK1DPUT",
            price:"¥2999",
            collar_Roll:" ",
          },
        ]
      },
    ],
    /* 十款清扫不留痕的扫地机器人 */
    Sweeping_robot:[
      {
        title:"十款清扫不留痕的扫地机器人",
        ten_products:"10商品",
        title_Picture_Background:"//imgservice.suning.cn/uimg1/scos/content/L-VA4CgSEAB7rkZ-Xk3qkw.jpg_13-27-928-418a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/7npl3539mnUX4jkBU3tTUw.jpg?format=400h_400w_4e_80q.webp",
            src_name:"云米 扫地机器人自动集尘扫地拖地吸尘三合一家用扫拖一体机器人 VXVC11-JC",
            price:"¥3299",
            collar_Roll:"领券1000元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/441sL_dKXIYjtOJHMOiTPA.jpg?format=400h_400w_4e_80q.webp",
            src_name:"科沃斯（Ecovacs）扫地机器人地宝N8智能家用全自动吸尘器除菌扫拖擦地一体机",
            price:"¥1599",
            collar_Roll:"领券300元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/twN3wp1NxncbLWTb2_ccZQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"科沃斯（Ecovacs）扫地机器人地宝T8Max 家用吸尘器 全自动智能 规划清扫 激光导航 扫拖一体 APP智控",
            price:"¥2599",
            collar_Roll:"领券800元",
          },
        ]
      },
    ],

    /* 十款开黑不卡顿的游戏手机精选 */
    Game_mobile_selection:[
      {
        title:"十款开黑不卡顿的游戏手机精选",
        ten_products:"10商品",
        title_Picture_Background:"//imgservice.suning.cn/uimg1/scos/content/meqQE6lYfKzpnKEfFf3mRA.png_0-6-925-416a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/HTu6XEkS4csApdGMsCelfg.jpg?format=400h_400w_4e_80q.webp",
            src_name:"OPPO Reno5 5G 星河入梦 8GB+128GB 全网通 骁龙765G 6400万水光人像四摄 65W闪充 轻薄机身拍照美颜游戏智能手机",
            price:"¥2699",
            collar_Roll:"领券200元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/zsGDnYqoIkHKNwhlW0KoFQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"三星Galaxy S20 FE 5G（SM-G7810）8GB+128GB 异想蓝 骁龙865 游戏手机 拍照手机 5G",
            price:"¥3848",
            collar_Roll:"领券3元",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/zucDCX7OtRiQgzkNq5rWCQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"OPPO K7x 黑镜 6GB+128GB 全网通 双模5G 30W闪充4800万四摄 5000mAh长续航 90Hz电竞屏 拍照美颜游戏智能手机",
            price:"¥1499",
            collar_Roll:"领券30元",
          },
        ]
      },
    ],

    /* 十款激战不卡顿的游戏主机 */
    Game_host:[
      {
        title:"十款激战不卡顿的游戏主机",
        ten_products:"10商品",
        title_Picture_Background:"//imgservice.suning.cn/uimg1/scos/content/p_WHvv7PAEfwdIYWTcR8TQ.png_37-0-709-320a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/ELL-lO6hrAN1j6NKdyIbXA.jpg?format=400h_400w_4e_80q.webp",
            src_name:"攀升 战神 水冷游戏台式电脑主机(十代酷睿 i5 10400F 新品RTX3060Ti 8G 240G高速固态）台式电脑 主机 DIY组装电脑台式机 组装机游戏台式机",
            price:"¥7899",
            collar_Roll:" ",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/Xfuj1YC4vaBpU1u4KKlbWA.jpg?format=400h_400w_4e_80q.webp",
            src_name:"宏碁(acer)商祺SQN4270宏基高性能娱乐家用高效办公台式电脑主机 (十代酷睿i5-10400 8G 512GSSD Wifi Win10）",
            price:"¥2959",
            collar_Roll:"",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/nTU5yfaCinMzVQWw4TZ1dA.jpg?format=400h_400w_4e_80q.webp",
            src_name:"宏碁(acer) 暗影骑士·威N50-C90宏基游戏台式机吃鸡电竞游戏电脑主机(十代酷睿i5-10400F 8G 512SSD GTX1650 4G)",
            price:"¥4099",
            collar_Roll:"",
          },
        ]
      },
    ],

    /* 十款运行快速的高性能办公轻薄本 */
    Office_Lightweight:[
      {
        title:"十款运行快速的高性能办公轻薄本",
        ten_products:"10商品",
        title_Picture_Background:"//imgservice.suning.cn/uimg1/scos/content/kkOmIz6CeyhwdCF8zf1DbA.jpg_0-309-1600-720a?from=mobile",
        url:"",
        imageSrc:[
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/sYDpzigmAC992YxgN4ew3A.jpg?format=400h_400w_4e_80q.webp",
            src_name:"笔记本新品 戴尔 DELL 成就5502 15.6英寸笔记本电脑 定制 高配置 商务办公 学习 轻薄便携 手提电脑 金色 (i7-1165G7 12GB 512GB 2GB独显)",
            price:"¥6799",
            collar_Roll:" ",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/A5wPkBSaIOMpy9nJGDjp7Q.jpg?format=400h_400w_4e_80q.webp",
            src_name:"联想(Lenovo)YOGA Pro 14s 2021款 14英寸全面屏超轻薄笔记本电脑(i7-1165G7 16G 1TB 3D弧面触控屏 4K超高清 )黑色皮革版",
            price:"¥13499",
            collar_Roll:"",
          },
          {
            src:"//imgservice.suning.cn/uimg1/b2c/image/BlXvxT9ninBjeq2cfOj2DQ.jpg?format=400h_400w_4e_80q.webp",
            src_name:"联想(Lenovo)YOGA Pro 14c 2021款 14英寸全面屏超轻薄笔记本电脑(i7-1185G7 16G 1TB 4K超高清触控屏)慧眼识金",
            price:"¥12499",
            collar_Roll:" ",
          },
        ]
      },
    ]
    /* 
      {
        title:"",
        ten_products:"10商品",
        title_Picture_Background:"",
        url:"",
        imageSrc:[
          {
            src:"",
            src_name:"",
            price:"",
            collar_Roll:" ",
          },
          {
            src:"",
            src_name:"",
            price:"",
            collar_Roll:"",
          },
          {
            src:"",
            src_name:"",
            price:"",
            collar_Roll:" ",
          },
        ]
      },
    */
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