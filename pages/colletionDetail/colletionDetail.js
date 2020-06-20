// pages/colletionDetail/colletionDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    realName:"",
    hasFake:"",
    fakeFeat:"",
    place:"",
    time:"",
    condition:"",
    requirement:"",
    price:0,
    hemisphere:"查看北半球",
    month:[false,false,false,false,false,false,false,true,true,true,true,true],
    category:"",
    index:0,
   fishList:[
    {
      name:"红目鲫",
      place:"河流",
      size:"小",
      time:"全天",
      price:900,
      requirement:"无",
      month: [1, 2, 3, 11, 12] ,
      },
      {
      name:"溪哥",
      place:"河流",
      size:"小",
      time:"9:00-16:00",
      price:200,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"鲫鱼",
      place:"河流",
      size:"稍小",
      time:"全天",
      price:160,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"雅罗鱼",
      place:"河流",
      size:"中",
      time:"16:00-9:00",
      price:240,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"鲤鱼",
      place:"池塘",
      size:"稍大",
      time:"全天",
      price:300,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"锦鲤",
      place:"池塘",
      size:"稍大",
      time:"16:00-9:00",
      price:4000,
      requirement:"钓鱼数满20条",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"金鱼",
      place:"池塘",
      size:"小",
      time:"全天",
      price:1300,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"龙睛金鱼",
      place:"池塘",
      size:"小",
      time:"9:00-16:00",
      price:1300,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"兰寿金鱼",
      place:"池塘",
      size:"稍小",
      time:"9:00-16:00",
      price:4500,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"稻田鱼",
      place:"池塘",
      size:"小",
      time:"全天",
      price:300,
      requirement:"无",
      month: [4, 5, 6, 7, 8] ,
      },
      {
      name:"淡水龙虾",
      place:"池塘",
      size:"稍小",
      time:"全天",
      price:200,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9] ,
      },
      {
      name:"鳖",
      place:"河流",
      size:"稍大",
      time:"16:00-9:00",
      price:3750,
      requirement:"钓鱼数满20条",
      month: [8, 9] ,
      },
      {
      name:"拟鳄龟",
      place:"河流",
      size:"稍大",
      time:"21:00~4:00",
      price:5000,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"蝌蚪",
      place:"池塘",
      size:"小",
      time:"全天",
      price:100,
      requirement:"无",
      month: [3, 4, 5, 6, 7] ,
      },
      {
      name:"青蛙",
      place:"池塘",
      size:"稍小",
      time:"全天",
      price:120,
      requirement:"无",
      month: [5, 6, 7, 8] ,
      },
      {
      name:"塘鳢鱼",
      place:"河流",
      size:"稍小",
      time:"16:00-9:00",
      price:400,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"泥鳅",
      place:"河流",
      size:"稍小",
      time:"全天",
      price:400,
      requirement:"无",
      month: [3, 4, 5] ,
      },
      {
      name:"鲶鱼",
      place:"池塘",
      size:"稍大",
      time:"16:00-9:00",
      price:800,
      requirement:"无",
      month: [5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"黑鱼",
      place:"池塘",
      size:"稍大",
      time:"9:00-16:00",
      price:5500,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8] ,
      },
      {
      name:"蓝鳃太阳鱼",
      place:"河流",
      size:"稍小",
      time:"9:00-16:00",
      price:180,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"黄鲈鱼",
      place:"河流",
      size:"中",
      time:"全天",
      price:300,
      requirement:"无",
      month: [1, 2, 3, 10, 11, 12] ,
      },
      {
      name:"黑鲈鱼",
      place:"河流",
      size:"稍大",
      time:"全天",
      price:320,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"吴郭鱼",
      place:"河流",
      size:"大",
      time:"全天",
      price:800,
      requirement:"无",
      month: [6, 7, 8, 9, 10] ,
      },
      {
      name:"白斑狗鱼",
      place:"河流",
      size:"大",
      time:"全天",
      price:1800,
      requirement:"钓鱼数满20条",
      month: [9, 10, 11, 12] ,
      },
      {
      name:"西太公鱼",
      place:"河流",
      size:"稍小",
      time:"全天",
      price:400,
      requirement:"无",
      month: [1, 2, 12] ,
      },
      {
      name:"香鱼",
      place:"河流",
      size:"中",
      time:"全天",
      price:900,
      requirement:"无",
      month: [7, 8, 9] ,
      },
      {
      name:"樱花钩吻鲑",
      place:"悬崖上",
      size:"中",
      time:"16:00-9:00",
      price:1000,
      requirement:"无",
      month: [3, 4, 5, 6, 9, 10, 11] ,
      },
      {
      name:"花羔红点鲑",
      place:"悬崖上",
      size:"大",
      time:"16:00-9:00",
      price:3800,
      requirement:"钓鱼数满20条",
      month: [3, 4, 5, 6, 9, 10, 11] ,
      },
      {
      name:"金鳟",
      place:"悬崖上",
      size:"中",
      time:"16:00-9:00",
      price:15000,
      requirement:"钓鱼数满100条",
      month: [3, 4, 5, 9, 10, 11] ,
      },
      {
      name:"远东哲罗鱼",
      place:"悬崖上",
      size:"大",
      time:"16:00-9:00",
      price:15000,
      requirement:"钓鱼数满100条",
      month: [1, 2, 3, 12] ,
      },
      {
      name:"鲑鱼",
      place:"出海口",
      size:"稍大",
      time:"全天",
      price:700,
      requirement:"无",
      month: [9] ,
      },
      {
      name:"帝王鲑",
      place:"出海口",
      size:"大",
      time:"全天",
      price:1800,
      requirement:"钓鱼数满20条",
      month: [9] ,
      },
      {
      name:"中华绒螯蟹",
      place:"河流",
      size:"稍小",
      time:"16:00-9:00",
      price:2000,
      requirement:"钓鱼数满20条",
      month: [9, 10, 11] ,
      },
      {
      name:"孔雀鱼",
      place:"河流",
      size:"小",
      time:"9:00-16:00",
      price:1300,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9, 10, 11] ,
      },
      {
      name:"温泉医生鱼",
      place:"河流",
      size:"小",
      time:"9:00-16:00",
      price:1500,
      requirement:"钓鱼数满20条",
      month: [5, 6, 7, 8, 9] ,
      },
      {
      name:"神仙鱼",
      place:"河流",
      size:"稍小",
      time:"16:00-9:00",
      price:3000,
      requirement:"钓鱼数满20条",
      month: [5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"斗鱼",
      place:"河流",
      size:"稍小",
      time:"9:00-16:00",
      price:2500,
      requirement:"钓鱼数满20条",
      month: [5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"霓虹灯鱼",
      place:"河流",
      size:"小",
      time:"9:00-16:00",
      price:500,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9, 10, 11] ,
      },
      {
      name:"彩虹鱼",
      place:"河流",
      size:"小",
      time:"9:00-16:00",
      price:800,
      requirement:"无",
      month: [5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"食人鱼",
      place:"河流",
      size:"小",
      time:"9:00-16:00；21:00~4:00",
      price:2500,
      requirement:"钓鱼数满20条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"骨舌鱼",
      place:"河流",
      size:"大",
      time:"16:00-9:00",
      price:1000,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"黄金河虎",
      place:"河流",
      size:"大",
      time:"4:00-21:00",
      price:15000,
      requirement:"钓鱼数满100条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"雀鳝",
      place:"池塘",
      size:"大",
      time:"16:00-9:00",
      price:6000,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"巨骨舌鱼",
      place:"河流",
      size:"特大",
      time:"16:00-9:00",
      price:10000,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"恩氏多鳍鱼",
      place:"河流",
      size:"稍大",
      time:"21:00~4:00",
      price:15000,
      requirement:"钓鱼数满20条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"鲟鱼",
      place:"出海口",
      size:"特大",
      time:"全天",
      price:10000,
      requirement:"钓鱼数满20条",
      month: [1, 2, 3, 9, 10, 11, 12] ,
      },
      {
      name:"海蝴蝶",
      place:"海",
      size:"小",
      time:"全天",
      price:1000,
      requirement:"无",
      month: [1, 2, 3, 12] ,
      },
      {
      name:"海马",
      place:"海",
      size:"小",
      time:"全天",
      price:1100,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9, 10, 11] ,
      },
      {
      name:"小丑鱼",
      place:"海",
      size:"小",
      time:"全天",
      price:650,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9] ,
      },
      {
      name:"拟刺尾鲷",
      place:"海",
      size:"稍小",
      time:"全天",
      price:1000,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9] ,
      },
      {
      name:"耳带蝴蝶鱼",
      place:"海",
      size:"小",
      time:"全天",
      price:1000,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9] ,
      },
      {
      name:"苏眉鱼",
      place:"海",
      size:"特大",
      time:"4:00-21:00",
      price:10000,
      requirement:"钓鱼数满50条",
      month: [7, 8] ,
      },
      {
      name:"狮子鱼",
      place:"海",
      size:"中",
      time:"全天",
      price:500,
      requirement:"无",
      month: [4, 5, 6, 7, 8, 9, 10, 11] ,
      },
      {
      name:"河豚",
      place:"海",
      size:"中",
      time:"21:00~4:00",
      price:5000,
      requirement:"钓鱼数满20条",
      month: [1, 2, 11, 12] ,
      },
      {
      name:"刺豚",
      place:"海",
      size:"中",
      time:"全天",
      price:250,
      requirement:"无",
      month: [7, 8, 9] ,
      },
      {
      name:"凤尾鱼",
      place:"海",
      size:"稍小",
      time:"4:00-21:00",
      price:200,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"竹荚鱼",
      place:"海",
      size:"稍小",
      time:"全天",
      price:150,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"条石鲷",
      place:"海",
      size:"中",
      time:"全天",
      price:5000,
      requirement:"钓鱼数满20条",
      month: [3, 4, 5, 6, 7, 8, 9, 10, 11] ,
      },
      {
      name:"鲈鱼",
      place:"海",
      size:"大",
      time:"全天",
      price:400,
      requirement:"不是鱼露，是鲈鱼哦",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"鲷鱼",
      place:"海",
      size:"稍大",
      time:"全天",
      price:3000,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"鲽鱼",
      place:"海",
      size:"中",
      time:"全天",
      price:300,
      requirement:"无",
      month: [1, 2, 3, 4, 10, 11, 12] ,
      },
      {
      name:"比目鱼",
      place:"海",
      size:"大",
      time:"全天",
      price:800,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"鱿鱼",
      place:"海",
      size:"中",
      time:"全天",
      price:500,
      requirement:"无",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 12] ,
      },
      {
      name:"裸胸鳝",
      place:"海",
      size:"细长",
      time:"全天",
      price:2000,
      requirement:"钓鱼数满20条",
      month: [8, 9, 10] ,
      },
      {
      name:"五彩鳗",
      place:"海",
      size:"细长",
      time:"全天",
      price:600,
      requirement:"无",
      month: [6, 7, 8, 9, 10] ,
      },
      {
      name:"鲔鱼",
      place:"码头",
      size:"特大",
      time:"全天",
      price:7000,
      requirement:"钓鱼数满50条",
      month: [1, 2, 3, 4, 11, 12] ,
      },
      {
      name:"旗鱼",
      place:"码头",
      size:"特大",
      time:"全天",
      price:10000,
      requirement:"钓鱼数满50条",
      month: [1, 2, 3, 4, 7, 8, 9, 11, 12] ,
      },
      {
      name:"白面弄鱼",
      place:"码头",
      size:"大",
      time:"全天",
      price:4500,
      requirement:"钓鱼数满20条",
      month: [5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"鬼头刀",
      place:"码头",
      size:"大",
      time:"全天",
      price:6000,
      requirement:"钓鱼数满50条",
      month: [5, 6, 7, 8, 9, 10] ,
      },
      {
      name:"翻车鱼",
      place:"海",
      size:"背鳍",
      time:"4:00-21:00",
      price:4000,
      requirement:"钓鱼数满20条",
      month: [7, 8, 9] ,
      },
      {
      name:"鳐鱼",
      place:"海",
      size:"大",
      time:"4:00-21:00",
      price:3000,
      requirement:"钓鱼数满20条",
      month: [8, 9, 10, 11] ,
      },
      {
      name:"锯鲨",
      place:"海",
      size:"背鳍",
      time:"16:00-9:00",
      price:12000,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"双髻鲨",
      place:"海",
      size:"背鳍",
      time:"16:00-9:00",
      price:8000,
      requirement:"钓鱼数满20条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"鲨鱼",
      place:"海",
      size:"背鳍",
      time:"16:00-9:00",
      price:15000,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"鲸鲨",
      place:"海",
      size:"背鳍",
      time:"全天",
      price:13000,
      requirement:"钓鱼数满50条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"吸盘鱼",
      place:"海",
      size:"背鳍",
      time:"全天",
      price:1500,
      requirement:"钓鱼数满20条",
      month: [6, 7, 8, 9] ,
      },
      {
      name:"灯笼鱼",
      place:"海",
      size:"稍大",
      time:"16:00-9:00",
      price:2500,
      requirement:"钓鱼数满20条",
      month: [1, 2, 3, 11, 12] ,
      },
      {
      name:"皇带鱼",
      place:"海",
      size:"特大",
      time:"全天",
      price:9000,
      requirement:"钓鱼数满50条",
      month: [1, 2, 3, 4, 5, 12] ,
      },
      {
      name:"太平洋桶眼鱼",
      place:"海",
      size:"小",
      time:"21:00~4:00",
      price:15000,
      requirement:"钓鱼数满100条",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      {
      name:"矛尾鱼",
      place:"海",
      size:"特大",
      time:"下雨时",
      price:15000,
      requirement:"钓鱼数满100条",
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
      },
      
   ],
    insectList:[
      {
        name:"白粉蝶",
        place:"花",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:160,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12] ,
        },
        {
        name:"斑缘点粉蝶",
        place:"花",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:160,
        requirement:"无",
        month: [3, 4, 5, 6, 9, 10] ,
        },
        {
        name:"凤蝶",
        place:"空中",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:240,
        requirement:"无",
        month: [3, 4, 5, 6, 7, 8, 9] ,
        },
        {
        name:"乌鸦凤蝶",
        place:"花（蓝色黑色紫色）",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:2500,
        requirement:"捕虫数满20只",
        month: [3, 4, 5, 6] ,
        },
        {
        name:"青带凤蝶",
        place:"空中",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:300,
        requirement:"无",
        month: [4, 5, 6, 7, 8] ,
        },
        {
        name:"大白班蝶",
        place:"空中",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:1000,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"大紫蛱蝶",
        place:"空中",
        time:"4:00-19:00",
        condition:"非雨雪天",
        price:300,
        requirement:"捕虫数满50只",
        month: [5, 6, 7, 8] ,
        },
        {
        name:"大桦斑蝶",
        place:"花",
        time:"4:00-17:00",
        condition:"非雨雪天",
        price:140,
        requirement:"无",
        month: [9, 10, 11] ,
        },
        {
        name:"大蓝闪蝶",
        place:"花",
        time:"17:00-8:00",
        condition:"非雨雪天",
        price:4000,
        requirement:"捕虫数满20只",
        month: [1, 2, 3, 6, 7, 8, 9, 12] ,
        },
        {
        name:"彩袄蛱蝶",
        place:"花",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:3000,
        requirement:"捕虫数满20只",
        month: [4, 5, 6, 7, 8, 9] ,
        },
        {
        name:"红颈凤蝶",
        place:"空中",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:2500,
        requirement:"捕虫数满20只",
        month: [1, 2, 4, 5, 6, 7, 8, 9, 12] ,
        },
        {
        name:"亚历山大凤蝶",
        place:"花",
        time:"8:00-16:00",
        condition:"非雨雪天",
        price:4000,
        requirement:"捕虫数满50只",
        month: [5, 6, 7, 8, 9] ,
        },
        {
        name:"飞蛾",
        place:"灯光附近",
        time:"19:00-4:00",
        condition:"非雨雪天",
        price:130,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"皇蛾",
        place:"树上",
        time:"19:00-4:00",
        condition:"无",
        price:3000,
        requirement:"捕虫数满20只",
        month: [4, 5, 6, 7, 8, 9] ,
        },
        {
        name:"日落蛾",
        place:"花",
        time:"8:00-16:00",
        condition:"非雨雪天",
        price:2500,
        requirement:"捕虫数满20只",
        month: [4, 5, 6, 7, 8, 9] ,
        },
        {
        name:"中华剑角蝗",
        place:"草地",
        time:"8:00-19:00",
        condition:"无",
        price:200,
        requirement:"无",
        month: [4, 5, 6, 7, 8, 9, 10, 11] ,
        },
        {
        name:"飞蝗",
        place:"草地",
        time:"8:00-19:00",
        condition:"无",
        price:600,
        requirement:"捕虫数满20只",
        month: [8, 9, 10, 11] ,
        },
        {
        name:"稻蝗",
        place:"草地",
        time:"8:00-19:00",
        condition:"无",
        price:400,
        requirement:"无",
        month: [8, 9, 10, 11] ,
        },
        {
        name:"蚱蜢",
        place:"草地",
        time:"8:00-17:00",
        condition:"无",
        price:160,
        requirement:"无",
        month: [7, 8, 9] ,
        },
        {
        name:"蟋蟀",
        place:"草地",
        time:"17:00-8:00",
        condition:"非雨雪天",
        price:130,
        requirement:"无",
        month: [9, 10, 11] ,
        },
        {
        name:"铃虫",
        place:"草地",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:430,
        requirement:"无",
        month: [9, 10] ,
        },
        {
        name:"螳螂",
        place:"花",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:430,
        requirement:"无",
        month: [3, 4, 5, 6, 7, 8, 9, 10, 11] ,
        },
        {
        name:"兰花螳螂",
        place:"花（白色，铃兰花）",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:2400,
        requirement:"捕虫数满20只",
        month: [3, 4, 5, 6, 7, 8, 9, 10, 11] ,
        },
        {
        name:"蜜蜂",
        place:"花",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:200,
        requirement:"无",
        month: [3, 4, 5, 6, 7] ,
        },
        {
        name:"黄蜂",
        place:"摇晃树",
        time:"全天",
        condition:"无",
        price:2500,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"油蝉",
        place:"树上",
        time:"8:00-17:00",
        condition:"无",
        price:250,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"斑透翅蝉",
        place:"树上",
        time:"8:00-17:00",
        condition:"无",
        price:300,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"熊蝉",
        place:"树上",
        time:"8:00-17:00",
        condition:"无",
        price:500,
        requirement:"捕虫数满20只",
        month: [7, 8] ,
        },
        {
        name:"寒蝉",
        place:"树上",
        time:"8:00-17:00",
        condition:"无",
        price:400,
        requirement:"无",
        month: [8, 9] ,
        },
        {
        name:"暮蝉",
        place:"树上",
        time:"4:00-8:00；16:00-19:00",
        condition:"无",
        price:550,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"蝉蜕",
        place:"树上",
        time:"全天",
        condition:"无",
        price:10,
        requirement:"捕虫数满50只",
        month: [7, 8] ,
        },
        {
        name:"红蜻蜓",
        place:"空中",
        time:"8:00-19:00",
        condition:"非雨雪天",
        price:180,
        requirement:"无",
        month: [9, 10] ,
        },
        {
        name:"绿胸晏蜓",
        place:"空中",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:230,
        requirement:"无",
        month: [4, 5, 6, 7, 8, 9, 10] ,
        },
        {
        name:"无霸勾蜓",
        place:"空中",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:4500,
        requirement:"捕虫数满50只",
        month: [5, 6, 7, 8, 9, 10] ,
        },
        {
        name:"豆娘",
        place:"空中",
        time:"全天",
        condition:"非雨雪天",
        price:500,
        requirement:"无",
        month: [1, 2, 11, 12] ,
        },
        {
        name:"萤火虫",
        place:"内陆水源附近的空中",
        time:"19:00-4:00",
        condition:"非雨雪天",
        price:300,
        requirement:"无",
        month: [6] ,
        },
        {
        name:"蝼蛄",
        place:"土里挖出",
        time:"全天",
        condition:"无",
        price:500,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 11, 12] ,
        },
        {
        name:"水黾",
        place:"池塘，河流",
        time:"8:00-19:00",
        condition:"无",
        price:130,
        requirement:"无",
        month: [5, 6, 7, 8, 9] ,
        },
        {
        name:"龙虱",
        place:"池塘，河流",
        time:"8:00-19:00",
        condition:"无",
        price:800,
        requirement:"无",
        month: [5, 6, 7, 8, 9] ,
        },
        {
        name:"田鳖",
        place:"池塘，河流",
        time:"19:00-8:00",
        condition:"无",
        price:2000,
        requirement:"捕虫数满50只",
        month: [4, 5, 6, 7, 8, 9] ,
        },
        {
        name:"椿象",
        place:"花",
        time:"全天",
        condition:"非雨雪天",
        price:120,
        requirement:"无",
        month: [3, 4, 5, 6, 7, 8, 9, 10] ,
        },
        {
        name:"人面蝽象",
        place:"花",
        time:"19:00-7:00",
        condition:"非雨雪天",
        price:1000,
        requirement:"捕虫数满20只",
        month: [3, 4, 5, 6, 7, 8, 9, 10] ,
        },
        {
        name:"瓢虫",
        place:"花",
        time:"8:00-17:00",
        condition:"非雨雪天",
        price:200,
        requirement:"无",
        month: [3, 4, 5, 6, 10] ,
        },
        {
        name:"虎甲虫",
        place:"草地",
        time:"全天",
        condition:"非雨雪天",
        price:1500,
        requirement:"捕虫数满20只",
        month: [2, 3, 4, 5, 6, 7, 8, 9, 10] ,
        },
        {
        name:"吉丁虫",
        place:"树桩上",
        time:"全天",
        condition:"非雨雪天",
        price:2400,
        requirement:"捕虫数满20只",
        month: [4, 5, 6, 7, 8] ,
        },
        {
        name:"提琴虫",
        place:"树桩上",
        time:"全天",
        condition:"非雨雪天",
        price:450,
        requirement:"无",
        month: [5, 6, 9, 10, 11] ,
        },
        {
        name:"星天牛",
        place:"树桩上",
        time:"全天",
        condition:"非雨雪天",
        price:350,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"琉璃星天牛",
        place:"树桩上",
        time:"全天",
        condition:"非雨雪天",
        price:3000,
        requirement:"捕虫数满20只",
        month: [5, 6, 7, 8, 9] ,
        },
        {
        name:"宝石象鼻虫",
        place:"树上",
        time:"全天",
        condition:"无",
        price:800,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"蜣螂",
        place:"雪球",
        time:"全天",
        condition:"无",
        price:3000,
        requirement:"无",
        month: [1, 2, 12] ,
        },
        {
        name:"雪隐金龟",
        place:"草地",
        time:"全天",
        condition:"无",
        price:300,
        requirement:"无",
        month: [7, 8, 9] ,
        },
        {
        name:"宝石金龟",
        place:"树上，椰子树",
        time:"23:00-8:00",
        condition:"无",
        price:10000,
        requirement:"捕虫数满50只",
        month: [7, 8] ,
        },
        {
        name:"白铜锣花金龟",
        place:"树上",
        time:"全天",
        condition:"无",
        price:200,
        requirement:"无",
        month: [6, 7, 8] ,
        },
        {
        name:"歌莉娅大角花金龟",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:8000,
        requirement:"捕虫数满100只",
        month: [6, 7, 8, 9] ,
        },
        {
        name:"锯锹形虫",
        place:"树上、椰子树",
        time:"全天",
        condition:"无",
        price:2000,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"深山锹形虫",
        place:"树上",
        time:"全天",
        condition:"无",
        price:1000,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"大锹形虫",
        place:"树上、椰子树",
        time:"23:00-8:00",
        condition:"无",
        price:10000,
        requirement:"捕虫数满50只",
        month: [7, 8] ,
        },
        {
        name:"彩虹锹形虫",
        place:"树上、椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:6000,
        requirement:"捕虫数满50只",
        month: [6, 7, 8, 9] ,
        },
        {
        name:"细身赤锹形虫",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:8000,
        requirement:"捕虫数满100只",
        month: [7, 8] ,
        },
        {
        name:"黄金鬼锹形虫",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:12000,
        requirement:"捕虫数满100只",
        month: [7, 8] ,
        },
        {
        name:"长颈鹿锹形虫",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:12000,
        requirement:"捕虫数满100只",
        month: [7, 8] ,
        },
        {
        name:"独角仙",
        place:"树上",
        time:"17:00-8:00",
        condition:"无",
        price:1350,
        requirement:"无",
        month: [7, 8] ,
        },
        {
        name:"高卡萨斯南洋大兜虫",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:8000,
        requirement:"捕虫数满100只",
        month: [7, 8] ,
        },
        {
        name:"象兜虫",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:8000,
        requirement:"捕虫数满100只",
        month: [7, 8] ,
        },
        {
        name:"长戟大兜虫",
        place:"椰子树",
        time:"17:00-8:00",
        condition:"无",
        price:12000,
        requirement:"捕虫数满100只",
        month: [7, 8] ,
        },
        {
        name:"竹节虫",
        place:"树上、椰子树",
        time:"4:00-8:00；17:00-19:00",
        condition:"无",
        price:600,
        requirement:"捕虫数满20只",
        month: [7, 8, 9, 10, 11] ,
        },
        {
        name:"叶竹节虫",
        place:"树根",
        time:"全天",
        condition:"无",
        price:600,
        requirement:"捕虫数满20只",
        month: [7, 8, 9] ,
        },
        {
        name:"蓑衣虫",
        place:"摇晃树",
        time:"全天",
        condition:"无",
        price:600,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"腐烂的大头菜，糖果",
        place:"大头菜",
        time:"全天",
        condition:"无",
        price:80,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"寄居蟹",
        place:"沙滩",
        time:"全天",
        condition:"无",
        price:1000,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"海蟑螂",
        place:"礁石上",
        time:"全天",
        condition:"无",
        price:200,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"苍蝇",
        place:"垃圾附近,腐烂的大头菜",
        time:"全天",
        condition:"无",
        price:60,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"蚊子",
        place:"空中",
        time:"17:00-4:00",
        condition:"非雨雪天",
        price:130,
        requirement:"无",
        month: [6, 7, 8, 9] ,
        },
        {
        name:"跳蚤",
        place:"居民",
        time:"全天",
        condition:"无",
        price:70,
        requirement:"无",
        month: [3, 4, 5, 6, 7, 8, 9, 10, 11] ,
        },
        {
        name:"蜗牛",
        place:"石头上，花丛上",
        time:"全天",
        condition:"雨天",
        price:250,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"鼠妇",
        place:"敲击岩石",
        time:"23:00-16:00",
        condition:"无",
        price:250,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12] ,
        },
        {
        name:"蜈蚣",
        place:"敲击岩石",
        time:"16:00-23:00",
        condition:"无",
        price:300,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12] ,
        },
        {
        name:"蜘蛛",
        place:"摇晃树",
        time:"19:00-8:00",
        condition:"无",
        price:600,
        requirement:"无",
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ,
        },
        {
        name:"狼蛛",
        place:"地面",
        time:"19:00-4:00",
        condition:"无",
        price:8000,
        requirement:"无",
        month: [1, 2, 3, 4, 11, 12] ,
        },
        {
        name:"蝎子",
        place:"地面",
        time:"19:00-4:00",
        condition:"无",
        price:8000,
        requirement:"无",
        month: [5, 6, 7, 8, 9, 10] ,
        },
      
      
    
    ],
    artList:[
      {
        name:"磅礴的名画",
        realName:"神奈川冲浪里",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"常见的名画",
        realName:"拾穗者",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"沉默的名画",
        realName:"奥菲利亚",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"充满母爱的雕塑",
        realName:"罗马母狼雕塑",
        isFake:"有",
        feat:"赝品母狼吐舌头，真品不吐",
        type:"雕塑",
        }, 
        {
        name:"出乎意料的雕塑",
        realName:"后母戊鼎",
        isFake:"有",
        feat:"赝品有盖子，真品无",
        type:"雕塑",
        }, 
        {
        name:"粗野的名画右半边",
        realName:"风神屏风",
        isFake:"有",
        feat:"赝品身体为白色，真品为青色",
        type:"画",
        }, 
        {
        name:"粗野的名画左半边",
        realName:"雷神屏风",
        isFake:"有",
        feat:"赝品雷神为蓝色，真品为白色",
        type:"画",
        }, 
        {
        name:"动人的名画",
        realName:"维纳斯的诞生",
        isFake:"有",
        feat:"赝品右上角是空白，真品有树丛",
        type:"画",
        }, 
        {
        name:"端庄的名画",
        realName:"回眸美人图",
        isFake:"有",
        feat:"赝品女人较大，真品较小",
        type:"画",
        }, 
        {
        name:"婀娜的名画",
        realName:"抱银貂的女子",
        isFake:"有",
        feat:"赝品是水貂，原作是银貂",
        type:"画",
        }, 
        {
        name:"光线的名画",
        realName:"被拖去解体的战舰无畏号",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"惊人的名画",
        realName:"夜巡",
        isFake:"有",
        feat:"赝品主角没帽子，真品有",
        type:"画",
        }, 
        {
        name:"俊俏的名画",
        realName:"三代目大谷鬼次之奴江户兵卫",
        isFake:"有",
        feat:"赝品是八字眉毛，真品眉毛向内",
        type:"画",
        },  
        {
        name:"美丽的雕塑",
        realName:"断臂维纳斯",
        isFake:"有",
        feat:"赝品维纳斯带着项链，真品没有",
        type:"雕塑",
        }, 
        {
        name:"名贵的名画",
        realName:"自由领导人民",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"漂亮的名画",
        realName:"戴珍珠耳环的少女",
        isFake:"有",
        feat:"赝品是星星耳环或者闭眼状态",
        type:"画",
        }, 
        {
        name:"平静的名画",
        realName:"倒牛奶的女仆",
        isFake:"有",
        feat:"赝品到出很多牛奶，真品倒出较少",
        type:"画",
        }, 
        {
        name:"强健的名画",
        realName:"播种者",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"强壮的雕塑",
        realName:"投掷饼者",
        isFake:"有",
        feat:"赝品右手有手环，真品没有",
        type:"雕塑",
        }, 
        {
        name:"热闹的名画",
        realName:"女神游乐厅的吧台",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"闪烁的名画",
        realName:"星空",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"神秘的雕塑",
        realName:"纳芙蒂蒂胸像",
        isFake:"有",
        feat:"赝品右耳有耳环，真品没有",
        type:"雕塑",
        }, 
        {
        name:"神秘的名画",
        realName:"死之岛",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"神圣的雕塑",
        realName:"萨莫色雷斯的胜利女神",
        isFake:"有",
        feat:"赝品女神左脚在前，真品左脚在前",
        type:"雕塑",
        }, 
        {
        name:"石头颅雕塑",
        realName:"奥尔梅克巨石头像",
        isFake:"有",
        feat:"赝品是微笑的表情，真品很严肃",
        type:"雕塑",
        }, 
        {
        name:"似曾相识的雕塑",
        realName:"思想者",
        isFake:"无",
        feat:"无",
        type:"雕塑",
        }, 
        {
        name:"舒适的名画",
        realName:"着衣的玛哈",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        {
        name:"肃穆的名画",
        realName:"宫娥",
        isFake:"有",
        feat:"赝品中后面的人没有扶着门",
        type:"画",
        }, 
        {
        name:"伟大的雕塑",
        realName:"卡美哈梅哈一世",
        isFake:"无",
        feat:"无",
        type:"雕塑",
        }, 
        {
        name:"武士的雕刻",
        realName:"兵马俑",
        isFake:"有",
        feat:"赝品的人拿着铲子，真品没拿",
        type:"雕塑",
        }, 
        {
        name:"细致的名画",
        realName:"公鸡母鸡与绣花球",
        isFake:"有",
        feat:"赝品叶子是紫色，真品是蓝色",
        type:"画",
        }, 
        {
        name:"线索的雕塑",
        realName:"罗塞塔石碑",
        isFake:"有",
        feat:"赝品是蓝色，真品是黑色",
        type:"雕塑",
        }, 
        {
        name:"学术性的名画",
        realName:"维特鲁威人",
        isFake:"有",
        feat:"赝品右上角有红的污渍，真品没有",
        type:"画",
        }, 
        {
        name:"英挺的雕塑",
        realName:"大卫像",
        isFake:"有",
        feat:"赝品右手有一本书，真品没有",
        type:"雕塑",
        }, 
        {
        name:"勇敢的名画",
        realName:"蓝衣少年",
        isFake:"有",
        feat:"赝品人物是长发，真品是短发",
        type:"画",
        }, 
        {
        name:"优美的名画",
        realName:"雪中猎人",
        isFake:"有",
        feat:"赝品只有一个猎人，真品有三个",
        type:"画",
        }, 
        {
        name:"有名的名画",
        realName:"蒙娜丽莎",
        isFake:"有",
        feat:"赝品有眉毛，真品没有",
        type:"画",
        }, 
        {
        name:"有趣的名画",
        realName:"夏季",
        isFake:"有",
        feat:"真品胸前有干花，赝品没有",
        type:"画",
        }, 
        {
        name:"远古的雕塑",
        realName:"遮光器土偶",
        isFake:"有",
        feat:"赝品耳朵上有天线，真品没有",
        type:"雕塑",
        }, 
        {
        name:"珍贵的名画",
        realName:"向日葵",
        isFake:"无",
        feat:"无",
        type:"画",
        }, 
        
    ]
  },
  change(e) {
    if(this.data.hemisphere=="查看北半球"){
      this.setData({hemisphere:"查看南半球"})
      console.log(this.data.hemisphere)
    }else{
      this.setData({hemisphere:"查看北半球"})
      console.log(this.data.hemisphere)
    }
    var tempList=[false,false,false,false,false,false,false,false,false,false,false,false]
    var temp = this.data.month
    for(let i=0;i<12;i++){
      if(temp[i]==true){
      tempList[(i+6)%12]=true
    }
    this.setData({
      month : tempList
    })
   
   
  }
  console.log(this.data.month)
  }
,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app=getApp()
    this.setData({
     index : app.globalData.detailIndex,
      category : app.globalData.category,
    })
    var tempList=[]
    switch(this.data.category){
      case "fish":
        tempList=this.data.fishList
        console.log("fish")
        break
      case "insect":
        tempList=this.data.insectList
        console.log("insect")
        break
      case "art":
        tempList=this.data.artList
        console.log("art")
        break
    }
    if(this.data.category!="art"){

      var tempMonth = [false,false,false,false,false,false,false,false,false,false,false,false]
      var detailMonth = tempList[this.data.index].month
      if(detailMonth.length!=0){
      for(let i =0;i<detailMonth.length;i++){
        tempMonth[detailMonth[i]-1]=true
      }
    }
    
    console.log("鱼")
    this.setData({
      name : tempList[this.data.index].name,
      place:tempList[this.data.index].place,
      time:tempList[this.data.index].time,
      condition:tempList[this.data.index].condition,
      requirement:tempList[this.data.index].requirement,
      price :tempList[this.data.index].price,
      condition :tempList[this.data.index].condition,
      month:tempMonth
    })
  }else{
    
    this.setData({
      name:tempList[this.data.index].name,
      realName:tempList[this.data.index].realName,
      hasFake:tempList[this.data.index].isFake,
      fakeFeat:tempList[this.data.index].feat,
    })
  }
   
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