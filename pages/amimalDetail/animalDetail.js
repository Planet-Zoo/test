// pages/amimalDetail/animalDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"阿龙",
    sex:"男",
    specie:"鳄鱼",
    birthday: "",
    workTime: "全天",
    workExpe: "",
    funStory: "",
    animalIndex: 0,
    allAnimalInformation: [
      {
        name:"西施惠",
        sex:"女",
        specie:"狗",
        birthday: "12月20日",
        workTime: "全天",
        workExpe: "无人岛公所兢兢业业的职员，全天候上班",
        funStory: "西施惠从小就与弟弟西施德住在一起，虽然西施惠在人们眼中一直都是温柔的样子，但她弟弟对她的评价却是“挺叛逆的”。\n根据西施惠自己透露，她实际上是近视的，而在平时工作中会戴隐形眼镜。她偶尔会去旅行，并且“方向感很差”，甚至会在市政厅前迷路。"
      },
      {
        name: "狸克",
        sex: "男",
        specie: "浣熊",
        birthday: "5月30日",
        workTime: "全天",
        workExpe: "狸克作为无人岛的创始人之一，会在玩家刚刚登上无人岛时对玩家进行引导，平时玩家可以在无人岛的服务中心找狸克办理各种服务，包括建造房屋、建造桥梁和坡道、更改基础设置以及房屋建设等。",
        funStory :"狸克创办的狸克公司，主导了游戏中的无人岛开荒计划，让玩家有机会开始新的旅程。狸克一直以乐善好施的商人形象示人，他将自己的大部分盈利都捐给了慈善机构。"
      },
      {
        name:"豆狸&粒狸",
        sex: "男",
        specie :"浣熊",
        birthday: "6月7日",
        workTime: "商店开张前全天，商店开张后每天8:00-12:00",
        workExpe: "豆狸和粒狸最早是狸克的小助手，在无人岛的商店开张后，兄弟俩在商店找到一份兼职，玩家可以找他们收购道具以及购买大头菜。",
        funStory: "豆狸和粒狸是狸克的侄子。可爱的外形以及活泼的性格让他们俩收到了全体岛民的一致喜爱。",
      },
      {
        name: "傅达",
        sex: "男",
        specie: "猫头鹰",
        birthday: "9月24日",
        workTime: "全天",
        workExpe: "傅达是一位声名远播的古生物学家，在玩家收集到15种不同的展品后，傅达会帮助玩家建造博物馆并担任馆长一职。傅达还会好心的帮助玩家鉴定发掘出的化石",
        funStory: "作为一只猫头鹰，傅达却对昆虫类的生物有着莫名的厌恶。 作为一名名声赫赫的古生物学家，傅达对化石以及鱼类生物有着很深的研究，他的梦想是有朝一日能在博物馆展出雷龙化石。 唯一的缺点是总是让人问一句答十句。",
      },
      {
        name: "傅珂",
        sex: "女",
        specie: "猫头鹰",
        birthday: "9月7日",
        workTime: "流星雨夜晚的19:00-4:00",
        workExpe: "只有在流星雨的夜晚才会出现的神秘少女，玩家可以与她对话，慷慨的她会赠予玩家各种各样的设计图，前两次固定获得星星棒以及当日星座的设计图，之后获取的设计图完全随机。",
        funStory: "除了知道她是博物馆馆长傅达的妹妹之外，人们对这位神秘少女一无所知。只能从她慷慨赠送的设计图推测这是一位对星空有着无限热爱的设计师。",
      },
      {
        name: "幽幽",
        sex: "男",
        specie: "幽灵",
        birthday: "2月26日",
        workTime: "每天20:00-5:00",
        workExpe: "作为一只幽灵，幽幽每天仅仅会在入夜后在山上游荡，他应该就是岛民们说的“无业游民”吧。",
        funStory: "虽然身为一只幽灵，但胆小的幽幽竟然会被路上偶遇的玩家吓的魂飞魄散。当他终于冷静下来，会请求玩家帮忙把在全岛跑来跑去的他的五个魂魄抓回来，作为回报，他会赠与玩家“未拥有的东西”或是“有点贵的东西”。",
      },
      {
        name: "K.K.",
        sex: "男",
        specie: "狗",
        birthday: "8月23日",
        workTime: "每周六5:00-24:00",
        workExpe: "无人岛最受欢迎的歌手，每周六晚上都会在“鸽子之巢”开一场演唱会，还会随机赠送专辑给现场观众。",
        funStory: "K.K.无疑是无人岛上的一个传奇，虽然他只会在每周六来到无人岛开演唱会，但是他帅气的外表以及动人的歌声还是征服了大部分岛民，他的所有演唱会无一不是座无虚席。据说K.K.对于开演唱会的环境身份挑剔，所以他直有在岛屿的评分达到三星级之后才会来到岛上。",
      },
      {
        name: "薛革",
        sex: "男",
        specie: "臭鼬",
        birthday: "11月30日",
        workTime: "周一至周五随机一天的5:00-24:00",
        workExpe: "无人岛鞋子和包包的指定供货商，每周只有一天会在服务中心门口摆摊，售卖高质量的鞋袜还有包包。",
        funStory: "薛革无疑是一位出色又负责任的商人，他的商品受到无人岛几乎所有岛民的称赞。同时薛革也恪守着“生活与生意严格分开”的原则，人们对他的印象仅停留在他所出售的高质量的商品。",
      },
      {
        name: "巴猎",
        sex: "男",
        specie: "狗",
        birthday: "8月2日",
        workTime: "全天",
        workExpe: "来自巴猎岛的摄影师，负责摄影棚的管理工作。玩家可以找他租借摄影棚以及学习摄影技巧。",
        funStory: "摄影师巴猎来自遥远的巴猎岛，在无人岛相遇后，他会热情邀请玩家去巴猎岛做客。尽管路途遥远，巴猎还是凭借着他高超的摄影技巧成为了岛民们拍照的首选。",
      },
      {
        name: "麻儿",
        sex: "女",
        specie: "刺猬",
        birthday: "11月22日",
        workTime: "9:00-21:00",
        workExpe: "麻儿和她的姐妹们一起经营着无人岛上的“ABLE SISTERS”服装店，麻儿负责服装店制作，裁改衣服的工作",
        funStory: "作为刺猬三姐妹中的大姐，麻儿默默承担着照顾两位妹妹的责任，她默默承担着服装店经营中最大的工作。她精细的服装手艺让服装店几乎每一位顾客都赞不绝口。",
      },
      {
        name: "绵儿",
        sex: "女",
        specie: "刺猬",
        birthday: "10月31日",
        workTime: "周一至周五随机时间",
        workExpe: "“ABLE SISTERS”服装店的服装设计师，不定期的会寻找服装店顾客来帮助她搭配服饰、寻找当季时尚灵感，在完成后也会给予一些回报。",
        funStory: "绵儿是刺猬三姐妹的二姐，也是岛上十分受人欢迎的服装设计师，她日常的服装搭配是岛上人人效仿的范本。据服装店的顾客们表示，绵儿经常会待在服装店后面的小屋子里，琢磨下一季的服饰设计方案，很难在店里见到她的身影。",
      },
      {
        name: "绢儿",
        sex: "女",
        specie: "刺猬",
        birthday: "5月22日",
        workTime: "9:00-21:00",
        workExpe: "“ABLE SISTERS”服装店的店员，负责服装店的销售工作。",
        funStory: "娟儿是刺猬三姐妹的小妹，她活泼可爱的性格以及热情的服务态度无疑为服装店吸引来了许多回头客。如果不知道要买些什么衣服，可以去问问娟儿，她似乎对服装搭配也有着一些独到的见解，常常会给出一些不错的建议。",
      },
      {
        name: "然然",
        sex: "男",
        specie: "树懒",
        birthday: "8月8日",
        workTime: "周一至周五随机一天的5:00-22:00",
        workExpe: "无人岛唯一花匠，每周会有一天摆摊，向玩家出售花丛种子和花朵种子。",
        funStory: "据知情人透露，然然的生活中是两件头等大事，一是睡觉，二是照顾他的宝贝花朵。每周仅仅有一天他能抽出时间来向大家出售他的宝贝种子，他还会再三叮嘱买家小心呵护这些娇贵的宝贝们。",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    var index = app.globalData.animalIndex;
    this.setData({
      animalIndex: index,
      name: this.data.allAnimalInformation[index].name,
      sex: this.data.allAnimalInformation[index].sex,
      specie: this.data.allAnimalInformation[index].specie,
      birthday: this.data.allAnimalInformation[index].birthday,
      workTime: this.data.allAnimalInformation[index].workTime,
      workExpe: this.data.allAnimalInformation[index].workExpe,
      funStory: this.data.allAnimalInformation[index].funStory
    });
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