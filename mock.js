// 使用 Mock
var Mock = require('mockjs')
Mock.Random.ctitle();  //随机生成标题（中文）
Mock.Random.color();
Mock.Random.cname();   //随机生成名字
Mock.Random.image();

var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }],
  'imgs|1-5': [{
    'id|+1': 1,
    "imgUrl": "@image('200x400','@color')"
  }],
  "title|1-5": [{
    "title": "@ctitle(4)",
    //尺寸、背景颜色、字体颜色、图片格式、图片的内容（文字）
    "photo": "@image('200x100','@color','#fff','png','@cname')"
  }],
  "news": "@ctitle"
})
// 输出结果
console.log(data)
