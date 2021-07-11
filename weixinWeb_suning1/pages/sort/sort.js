// pages/sort/sort.js
var searchTitle = ['热门推荐','食品酒水','牛奶冲调','饮料饮品','居家生活','苏宁生鲜','生活家电','苏宁国际','手机数码','美妆洗护','医药健康','电脑办公','苏宁电竞','女装女鞋'];
/* ,'男装男鞋','童装玩具','智能设备','钟表眼镜','礼品乐器','图书音像']; */

var searchContent = [
  {
    title: '热门推荐',
    content: [
      { ic: 'https://file11info.ppdai.com/15a426eea250402da56db04b75782cf8.jpeg', icname: '年货礼盒' },
      { ic: 'https://img30.360buyimg.com/n1/jfs/t1/19571/24/10546/133110/5c88975cEb7a963c7/9a112f213412acb8.jpg', icname: '中外名酒' },
      { ic: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1570673207.65634242.jpg', icname: '冰箱' },
      { ic: 'https://cw1.tw/CW/images/article/201801/article-5a53213c71b6b.jpg', icname: '巧克力' },
      { ic: 'https://www.healthy-masks.com/wp-content/uploads/2020/07/%E4%B8%89%E5%B1%A4%E6%88%90%E4%BA%BA%E5%A4%96%E7%A7%91%E5%8F%A3%E7%BD%A9Lv2-1.png', icname: '口罩' },
      { ic: 'https://img12.360buyimg.com/n1/jfs/t1/100188/19/209/272663/5da95045E673af724/827bae920b090203.jpg', icname: '车厘子' },
      { ic: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022219953', icname: 'iPhone' },
      { ic: 'https://www.nyhqsm.com/static/upload/images/goods/2020/06/09/1591671932101264.jpg', icname: '生活用纸' },
      { ic: 'https://img.pconline.com.cn/images/product/7342/734273/MU6300-Q.jpg', icname: '电视' },
      { ic: 'https://www.wanwupai.com/upload/product/20190914-1/d0e6365e7f3f2b0787b16edf83ea14da.jpg',icname:'食用油'},
      { ic: 'https://img11.360buyimg.com/n1/jfs/t1/152740/12/15189/731875/60067531E352c3a8e/c43df69267b6b4d8.png',icname:'坚果礼盒'},
      { ic: 'https://img13.360buyimg.com/n1/jfs/t1/11275/39/4103/306058/5c259bb1E7fd321c4/c5f14c97ee04c661.jpg',icname:'纯牛奶'},
      { ic: 'https://cdn.huarenstore.com/media/catalog/product/cache/b51095040162ac29443a128b7e1b2bc0/a/_/a_3_2.jpg',icname:'电饭煲'},
      { ic: 'https://5b0988e595225.cdn.sohucs.com/images/20191101/81e105566f344152bb3e179bbaec8571.jpeg',icname:'平板电脑'},
      { ic: 'https://pic4.zhimg.com/80/v2-c7682ff41c607ca8e6186351a20b24c3_1440w.jpg',icname:'电吹风'},
      { ic: 'https://www.etungo.com.tw/files/TC_PSpec/PS_Pic/TOT-3007As.jpg',icname:'烤箱'},
      { ic: 'https://s1.ig.meishij.net/p/20120905/ffc33db440c03255cdf8eb4b53a9cfcd.jpg',icname:'大米'},
      { ic: 'http://kaola-pop.oss.kaolacdn.com/fbe3afffa7fe4548a5fe9c6963a0af4e_800_800.jpg?x-oss-process=image/resize,w_400,h_0/quality,q_95',icname:'休闲食品'},
      { ic: 'https://file.diangongwu.com/img/20/1809/rhrm1ksktvd.jpg',icname:'变频空调'},
      { ic: '',icname:''}
    ]
  },
  {
    title: '食品酒水',
    content: [
      { ic: 'https://www.wanwupai.com/upload/product/20190923-1/2eb9fc33e67b1fee7e38fb8d9f7f5179.png',icname:'白酒'},
      { ic: 'https://5b0988e595225.cdn.sohucs.com/images/20180420/2552613df7fe49eea93d3f7e6e94ec3c.jpeg',icname:'保健酒'},
      { ic: 'https://img10.360buyimg.com/n1/jfs/t26491/136/1736029681/48508/fdcb0bed/5beb9e63Na4936f7e.jpg',icname:'黄酒'},
      { ic: 'https://img.zcool.cn/community/013c7d59f06046a801202b0c5926c7.JPG@1280w_1l_2o_100sh.jpg',icname:'预调酒'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1570696115535_imgWap_tmndir.jpg',icname:'葡萄酒'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1535596161964_imgWap_tmndir.jpg',icname:'啤酒'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1603159684886_imgWap_tmndir.jpg',icname:'清酒'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1603160438076_imgWap_tmndir.jpg',icname:'陈年老酒'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1535596705089_imgWap_tmndir.jpg',icname:'洋酒'},
      { ic: '',icname:''},
    ]
  },
  {
    title: '牛奶冲调',
    content: [
      { ic: 'https://img10.360buyimg.com/n1/jfs/t30364/51/120382472/246331/9e4505f0/5be84708N2986d589.jpg', icname: '纯牛奶' },
      { ic: 'https://img14.360buyimg.com/n1/jfs/t1/155096/37/13008/102688/5ff085d4E02e14e8e/4e11815a1a2e44c1.jpg', icname: '酸牛奶' },
      { ic: 'https://www.sanyuan.com.cn/media/tz_portfolio_plus/article/cache/maixiangninaian-279_o.jpg', icname: '风味奶' },
      { ic: 'https://www1.pcbaby.com.cn/yongping656.jpg', icname: '成人奶粉' },
      { ic: 'https://keewah.com/pub/media/catalog/product/cache/484bd534df80d026834f8358e630e944/1/9/19_tea_l_ti_kuan_yin_1000x1000.jpg', icname: '茗茶' },
      { ic: 'https://img30.360buyimg.com/n1/jfs/t19372/333/974476430/193379/4442b8c7/5ab477f5N649786ad.jpg', icname: '咖啡' },
      { ic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1973546033,1050552531&fm=26&gp=0.jpg', icname: '蜂蜜' },
      { ic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp02.sfimg.cn%2F2019%2F6000343269%2Foriginal_6000343269_1_1.jpg&refer=http%3A%2F%2Fp02.sfimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614615227&t=b04aa655aa8517cc41045b19d9fb4d39', icname: '麦片' },
      { ic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=218598899,75087442&fm=26&gp=0.jpg', icname: '红茶' },
      { ic: '',icname:''},
    ]
  },
  {
    title: '饮料饮品',
    content: [
      { ic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.t-chs.com%2FtuhsJDEwLmFsaWNkbi5jb20vaTQvNzkyNTQ3NzY3L08xQ04wMUh1d1QxVDI3RktqTmpleVFPXyEhNzkyNTQ3NzY3JDk.jpg&refer=http%3A%2F%2Fwww.t-chs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614616832&t=9230e9daa7ecd1a4f8880688c8bdb5ab',icname:'饮用水'},
      { ic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180101%2F4c930737a5894671849ea3cd8ec1e86c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614616928&t=c5b4ae11e38536ab5f44355cff0cdb55',icname:'果汁'},
      { ic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3282971734,820149390&fm=26&gp=0.jpg',icname:'碳酸饮料'},
      { ic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3815373008,1670492079&fm=26&gp=0.jpg',icname:'功能饮料'},
      { ic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.t-chs.com%2FtuhsJDEwLmFsaWNkbi5jb20vdGZzY29tL2kyLzI4MDk0MTcxOTIvVEIyemEzTmRsalRCS05qU1pGRFhYYlZnVlhhXyEhMjgwOTQxNzE5MiQ5.jpg&refer=http%3A%2F%2Fwww.t-chs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614617060&t=5630cd253e499c8805cec67134619d27',icname:'苏打水'},
      { ic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mfqyw.com%2Ffile%2Fupload%2F201803%2F21%2F14%2F14-50-59-36-1012246.jpg&refer=http%3A%2F%2Fwww.mfqyw.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614617084&t=8657cec3bb9f72855ec249949125dc46',icname:'茶饮料'},
      { ic: '',icname:''},
    ]
  },
  {
    title: '居家生活',
    content: [
      { ic: 'http://www.kao.com/cn/kao_imgs/attack/atk_liquid_bright_00_img_l.jpg', icname: '洗衣液' },
      { ic: 'https://img13.360buyimg.com/n1/jfs/t1/101999/35/14927/166334/5e6b59edEb66678a7/f89bc69b6e9811c6.jpg', icname: '洗衣粉' },
      { ic: 'https://www.wanwupai.com/upload/product/20190924-1/8767e853f598c2822558c5e53105c3f9.jpg', icname: '洗洁精' },
      { ic: 'https://www.dettol.com.cn/resource/images/cp/cp2-6-0-1.jpg', icname: '消毒液' },
      { ic: 'https://img14.360buyimg.com/n1/jfs/t1/4934/26/3181/290774/5b986fc2Ef279310b/32c521544d03d37b.jpg', icname: '洁厕剂' },
      { ic: 'https://img3.bangli.us/images/cms/2020/03/mwbn9uzBSzdSq6vzkTSA4hVW3bd1cHcUagKqFct9.jpeg', icname: '清洁拖把' },
      { ic: 'https://images-cn.ssl-images-amazon.cn/images/I/61Opekr2TwL._AC_SY450_.jpg', icname: '百洁软具' },
      { ic: 'https://img11.360buyimg.com/n1/jfs/t3493/60/1708382426/146769/d6dd7197/582ec8bfN508b79c2.jpg', icname: '擦玻璃器' },
      { ic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdimg.52bjw.cn%2Fimage%2Fupload%2F72%2F94%2Ff9%2F62%2F7294f9627ccb5b2e118d47c411cf87e3.jpg&refer=http%3A%2F%2Fdimg.52bjw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615556384&t=3d11fe525e4b444e0e48f4c6b52d9cb0',icname:'卷纸'},
      { ic: 'https://static1.qiang100.com/images/zhuanti-icon/original/400/chouzhi.jpg',icname:'抽纸'},
      { ic: 'https://img10.360buyimg.com/n1/jfs/t1/152153/13/792/116421/5f6d679fE9db05483/edf6143efe3ccfe9.jpg',icname:'手帕纸'},
      { ic: 'https://image3.buy.ccb.com/merchant/201506/242802512/1575556298120_4.jpg',icname:'厨房用纸'},
      { ic: 'https://img12.360buyimg.com/n1/jfs/t1/105131/6/10811/526708/5e212f36E948f38ea/1e5f8b2ad40633b9.jpg',icname:'平板纸'},
      { ic: 'https://img13.360buyimg.com/n1/jfs/t17308/151/815969554/125875/95cf2ffe/5aa88938N3163c498.jpg',icname:'湿巾纸'},
      { ic: 'https://www.blbll.com/uploadpic/2016/11/1479966690.JPG',icname:'毛巾浴巾'},
      { ic: 'http://www1.pcbaby.com.cn/yongping891.jpg',icname:'被子'},
      { ic: 'https://images-cn.ssl-images-amazon.cn/images/I/71oo6xUnQrL._AC_UL200_SR200,200_.jpg',icname:'枕头'},
      { ic: 'https://image3.buy.ccb.com/merchant/201412/185933229/1585622896464_4.jpg',icname:'床品套件'},
      
    ]
  },
  {
    title: '苏宁生鲜',
    content: [
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1606291504836_imgWap_tmndir.jpg', icname: '水果集市' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1575353514672_imgWap_tmndir.jpg', icname: '车厘子' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1606292622998_imgWap_tmndir.jpg', icname: '橘子' },
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1560586294368_imgWap_tmndir.png', icname: '百香果' },
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1560586528839_imgWap_tmndir.jpg', icname: '哈密瓜' },
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1560588142220_imgWap_tmndir.jpg', icname: '榴莲' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1560765175683_imgWap_tmndir.jpg', icname: '蛋类' },
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1606295211249_imgWap_tmndir.jpg',icname:'鸭肉类'},   
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1560764588141_imgWap_tmndir.jpg',icname:'鸡肉类'},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1560742764100_imgWap_tmndir.jpg',icname:'猪肉类'},   
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1560742242106_imgWap_tmndir.png',icname:'羊肉类'},   
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1560742144678_imgWap_tmndir.png',icname:'牛肉类'},   
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1560592375064_imgWap_tmndir.jpg',icname:'海参'},   
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1606296775880_imgWap_tmndir.jpg',icname:'鱼类'}, 
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1606296947394_imgWap_tmndir.jpg',icname:'虾类'}, 
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1606297019424_imgWap_tmndir.jpg',icname:'蟹类'},   
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1606297074076_imgWap_tmndir.jpg',icname:'贝类'}, 
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1560590634529_imgWap_tmndir.jpg',icname:'鱿鱼'}, 
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1606449099295_imgWap_tmndir.jpg',icname:'叶菜类'}, 
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1606374482031_imgWap_tmndir.jpg',icname:'根茎类'}, 
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1606374739217_imgWap_tmndir.jpg',icname:'葱姜蒜椒'}, 
    ]
  },
  {
    title: '生活家电',
    content: [
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1604489915896_imgApp_tmndir.jpg', icname: '取暖器' },
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1493987210753_pc_list.jpg', icname: '空气炸锅' },
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1574912073870_imgApp_tmndir.jpg', icname: '电饭煲' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1574762401782_app_wap_list.jpg', icname: '微波炉' },
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1606286067068_imgApp_tmndir.jpg', icname: '电热毯' },
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1555426090790_imgApp_tmndir.jpg', icname: '保温杯' },
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1574912629356_imgApp_tmndir.jpg', icname: '电火锅' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1574762253761_app_wap_list.jpg', icname: '加湿器' },
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1555425529044_imgApp_tmndir.jpg', icname: '炒锅' },
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1574762091030_app_wap_list.jpg', icname: '电动剃须刀' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1520250930258_imgWap_tmndir.jpg', icname: '电动牙刷' },
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1574762266663_app_wap_list.jpg', icname: '颈椎按摩器' },
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1509981809343_pc_list.jpg', icname: '美的' },
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1494233343322_pc_list.jpg',icname:'九阳'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1576571872447_imgApp_tmndir.jpg',icname:'飞利浦'},

    ]
  },
  {
    title: '苏宁国际',
    content: [
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1590406512874_imgWap_tmndir.jpg',icname:'纸尿裤'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1590406676606_imgWap_tmndir.png',icname:'防晒'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1590406811317_imgWap_tmndir.png',icname:'面膜'},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1590406944592_imgWap_tmndir.jpg',icname:'进口红酒'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1590407089469_imgWap_tmndir.jpg',icname:'食用油'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1590407304450_imgWap_tmndir.jpg',icname:'膳食补充'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1590407440090_imgWap_tmndir.png',icname:'电吹风'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1590407618607_imgWap_tmndir.jpg',icname:'潮流女包'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1590407752335_imgWap_tmndir.png',icname:'清洁用品'},

    ]
  },
  {
    title: '手机数码',
    content: [
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1555400065704_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1551089588322_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1610025092926_imgWap_tmndir.png',icname:''},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1551089631491_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1551089644937_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1552297036471_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1584934565966_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1551089694916_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1560586699006_imgWap_tmndir.png',icname:''},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1551089793607_imgApp_tmndir.jpg',icname:''},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1586779760865_app_wap_list.png',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1611315760092_imgWap_tmndir.jpg',icname:''},
    ]
  },
  {
    title: '美妆护肤',
    content: [
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1541418928916_imgWap_tmndir.jpg',icname:'补水'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1606285274907_imgWap_tmndir.jpg',icname:'美白'},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1541419038053_imgWap_tmndir.jpg',icname:'保湿'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1541419293912_imgApp_tmndir.jpg',icname:'控油'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1541419875803_imgApp_tmndir.jpg',icname:'润唇膏'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1541419517444_imgApp_tmndir.jpg',icname:'口红'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1541419619626_imgApp_tmndir.jpg',icname:'补水面膜'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1606288961367_imgWap_tmndir.jpg',icname:'面部精华'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1541422932235_imgApp_tmndir.jpg',icname:'香水礼盒'},

    ]
  },
  {
    title: '医药健康',
    content: [
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1533903918692_imgWap_tmndir.jpg',icname:'感冒咳嗽'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1533903990049_imgWap_tmndir.jpg',icname:'妇科用药'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1533904050101_imgWap_tmndir.jpg',icname:'男科用药'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1533904112519_imgWap_tmndir.jpg',icname:'补气补血'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1533904169815_imgWap_tmndir.jpg',icname:'抗菌消炎'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1533904246907_imgWap_tmndir.jpg',icname:'心脑血管'},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1533904632776_imgWap_tmndir.jpg',icname:'小儿胃肠'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1533904508153_imgWap_tmndir.jpg',icname:'眼科用药'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1533904550551_imgWap_tmndir.jpg',icname:'癣症'},
     
      { ic: '',icname:''},
      { ic: '',icname:''},
      { ic: '',icname:''},
    ]
  },
  {
    title: '电脑办公',
    content: [
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1601363515476_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1601363661681_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1601363720461_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1601363773720_imgWap_tmndir.png',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1601363806608_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1601363830421_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1601364071866_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1601364319544_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1597288735171_app_wap_list.jpg',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1601364568497_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1601364726428_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1601364763274_imgWap_tmndir.png',icname:''},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1597288688490_app_wap_list.jpg',icname:''},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1601365043793_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1601365166760_imgWap_tmndir.jpg',icname:''},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1601382139800_imgWap_tmndir.jpg',icname:'打印机'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1601382161382_imgWap_tmndir.jpg',icname:'投影仪'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1606398955843_imgWap_tmndir.jpg',icname:'智能投影屏'},
      { ic: '',icname:''},
      { ic: '',icname:''},
      { ic: '',icname:''},
    ]
  },
  {
    title: '苏宁电竞',
    content: [
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1603809519797_imgApp_tmndir.jpg',icname:'电竞电脑'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1604137220987_imgApp_tmndir.jpg',icname:'电竞本'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1604136694575_imgApp_tmndir.jpg',icname:'电竞台式机'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1603810285064_imgApp_tmndir.jpg',icname:'电竞显示器'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1603809984758_imgApp_tmndir.jpg',icname:'电竞耳机'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1603810147338_imgApp_tmndir.jpg',icname:'电竞鼠标'},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1604131208484_imgApp_tmndir.jpg',icname:'游戏道具'},
      { ic: 'http://image1.suning.cn/uimg/asbs/ad/1604131924087_imgApp_tmndir.jpg',icname:'电竞键盘'},
      { ic: '',icname:''},
      { ic: '',icname:''},
      { ic: '',icname:''},
    ]
  },
  {
    title: '女装女鞋',
    content: [
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1612772258186_imgWap_tmndir.jpg',icname:'连衣裙'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1612772643185_imgWap_tmndir.jpg',icname:'外套'},
      { ic: 'http://image3.suning.cn/uimg/asbs/ad/1612772707207_imgWap_tmndir.jpg',icname:'衬衫'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1612773237456_imgWap_tmndir.jpg',icname:'T恤'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1612773346194_imgWap_tmndir.jpg',icname:'针织衫'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1612773306511_imgWap_tmndir.jpg',icname:'卫衣'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1612773396233_imgWap_tmndir.jpg',icname:'半身裙'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1612773489519_imgWap_tmndir.jpg',icname:'牛仔裤'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1612773545726_imgWap_tmndir.jpg',icname:'休闲裤'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1597221657032_imgWap_tmndir.jpg',icname:'七格格'},
      { ic: 'http://image2.suning.cn/uimg/cms/img/151670445210914749.jpg',icname:'茵曼'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1527559277537_imgWap_tmndir.jpg',icname:'初语'},
      { ic: 'http://image2.suning.cn/uimg/cms/img/151670448094418110.jpg',icname:'妖精的口袋'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1597222183997_imgWap_tmndir.jpg',icname:'Lagogo'},
      { ic: 'http://image2.suning.cn/uimg/cms/img/157061126792751811.jpg',icname:'坦博尔'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1527559204882_imgApp_tmndir.jpg',icname:'AMII'},
      { ic: 'http://image.suning.cn/uimg/asbs/ad/1597222313406_imgWap_tmndir.jpg',icname:'诗凡黎'},
      { ic: 'http://image2.suning.cn/uimg/asbs/ad/1597224633792_imgWap_tmndir.jpg',icname:'千仞岗'},
      { ic: 'http://image2.suning.cn/uimg/cms/img/151670446170122088.jpg',icname:'高梵'},
      { ic: 'http://image4.suning.cn/uimg/asbs/ad/1597223436182_imgWap_tmndir.jpg',icname:'鸭鸭'},
      { ic: 'http://image5.suning.cn/uimg/asbs/ad/1597224501546_imgWap_tmndir.jpg',icname:'爱居兔'},
    ]
  }
];

Page({

 /**
   * 页面的初始数据
   */
  data: {
    searchText: '',
    searchTitle: searchTitle,
    searchContent: searchContent,
    scrHeig: '1000rpx',
    currentId: 0,
    scrollTop: '0',
    scView: 'c0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ratio = wx.getSystemInfoSync().windowWidth/750;
    this.setData({
      scrHeight: wx.getSystemInfoSync().windowHeight/ratio-60-32+'rpx'
    }) 
  },
  
  leftClassifyTap: function (e) {
    var curId = e.target.id;
    if (curId < 5){
      this.setData({
        currentId: curId,
        scrollTop: '0',
        scView: 'c' + curId
      })
    }else{
      this.setData({
        currentId: curId,
        scrollTop: [0.5 + (curId - 5)] * 55,
        scView: 'c' + curId
      })
    }
  },
  rigConScr: function (e) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.selectAll('.con-wrap-boxRight-item').boundingClientRect(function(res){
      res.forEach(function(item){
        if (item.top > 0 && item.top < 150) {
          var curId = item.id.substr(1);
          if (curId < 5) {
            that.setData({
              currentId: curId,
              scrollTop: '0'
            })
          } else {
            that.setData({
              currentId: curId,
              scrollTop: [0.5 + (curId - 5)] * 55
            })
          }
        }
      })
    }).exec();
  },
  scrLower: function () {
    var curId = this.data.searchTitle.length - 1;
    this.setData({
      currentId: curId,
      scrollTop: [0.5 + (curId - 5)] * 55
    })
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