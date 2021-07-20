<template>
  <div style="width:100%;height:100%">
    <div class="public first">
      <span>
        只愿意和喜欢的人分享日常
        那些鸡毛蒜皮的小事
        今天吃了什么
        路过看到的好玩的东西
        微博上有趣的内容
        衣服哪个颜色好看 天气怎么样
        不用刻意寻找话题
        却可以一天到晚说个不停
        因为我们彼此都知道
        发出来的这些平淡的琐碎
        每一句都像是在说“我想你”
      </span>

    </div>
    <div class="public second">
      <span>
        小时候成绩好，别人说你是好孩子，
        成绩不好，说你是差生，
        以至于让成年后的你喜欢听漂亮的话，
        有人接受你就开心，不接受就世界崩塌，
        多听听自己吧，你不是为了别人的评价而活。
      </span>

    </div>
    <div class="public three">
      <span>
        我们来这世间一趟，
        为的是好好生活。
        往昔已不可回头，
        前路仍未可知，
        我们只经历着此时此刻。
        只愿我们带着盛放的灿烂，
        奔向无尽的远方。
      </span>
    </div>
    <div class="public fover">
      <span>
        “许多人的所谓成熟，
        不过是被习俗磨去了棱角，
        变得世故而实际了。
        那不是成熟，
        而是精神的早衰和个性的夭亡。
        真正的成熟，
        应当是独特个性的形成，
        真实自我的发现，
        精神上的结果和丰收。”</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
  },

  methods: {

  }
}

</script>
<style  scoped>
.public {
  height: 100%;
  background-size: cover;
  background-position: center, center;
  background-attachment: fixed;
  overflow: hidden;
  font-size: 40px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-style: italic;
}
.public>span{
  display: inline-block;
  width: 300px;
}
.first {
  background-image: url('./image/bg1.jpg');
}
.first>span{
  width: 500px;
}
.second {
  background-image: url('./image/bg2.jpg');
}
.three {
  background-image: url('./image/bg3.jpg');
}
.fover {
  background-image: url('./image/bg4.png');
}
</style>