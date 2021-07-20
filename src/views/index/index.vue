<template>
  <div class="home">
    <el-row>
      <el-col :span="8" :offset="1">
        <div style="width:100%;height:200px" class="boxCard">
          <div>
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div class="card-list">
                <div v-for="(item,index ) in newList" :key="index" class="text item">
                  <i :href="item.url" target="_blank" @click="openDialog(item)">{{item.title}}</i>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="12" :offset="1">
        <div class="homeEcharts">
          <div class="home-echarts" id="home-echarts"></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div id="home-bottom" style="width:100%;height:400px"></div>
      </el-col>
    </el-row>
    <div>

    </div>
    <div>
      <el-dialog :title="webioDetailsTitle" :visible.sync="centerDialogVisible" width="90%" center top="5vh">
        <div ref="dialogCon"></div>
      </el-dialog>
    </div>
    <el-row>
      <el-button @click="test2">默认按钮</el-button>
    </el-row>
    <el-row>
      <el-button @click="test2">默认按钮</el-button>
    </el-row>
    <el-row>
      <el-button @click="test2">默认按钮</el-button>
    </el-row>
    <el-row>
      <el-button @click="test2">默认按钮</el-button>
    </el-row>
    <el-row>
      <el-button @click="test2">默认按钮</el-button>
    </el-row>
    <el-row>
      <el-button @click="test2">默认按钮</el-button>
    </el-row>
    <div ref="treeData">ssssss</div>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts';
import { getListAPI } from '../../api/good'
import { getWeiboHotSearch, getWeiboHotSearchDetails } from '@/api/index'
export default {
  data () {
    return {
      newList: [],
      centerDialogVisible: false,
      dialogCon: {},
      webioDetailsTitle: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.echartsInit()
    this.test()
    // this.test2()
    let arr = [
      { num: 1, batchList: [{ rate: '2010-01-02', count: 3 }, { rate: '2010-01-03', count: 5 }] },
      { num: 1, batchList: [{ rate: '2010-01-02', count: 4 }, { rate: '2010-01-03', count: 6 }] }
    ]

  


    let obj = {}
    arr.forEach((row) => {
      row.batchList.forEach((item) => {
        if (obj[item.rate]) {
          obj[item.rate] += item.count
        } else {
          obj[item.rate] = item.count
        }
        
      })
    })
    const newarr = []
    for (let key in obj) {
      newarr.push({ rate: key, count: obj[key] })
    }
    console.log(newarr);



    // let Arr = [
    //   { rate: '2010-01-02', count: 7 },
    //   { rate: '2010-01-03', count: 11 }

    // ]



  },

  methods: {
    getData () {
      return 2
    },
    test () {
      getWeiboHotSearch().then(res => {
        this.newList = res.data
      }, err => {
        console.log(err);
      })
      // request({
      //   url: 'search/api/store/product/seckill/select'
      // }).then(res => {
      //   console.log(res);

      // }, err => {
      //   console.log(err);
      // })

      // getInfo().then((res) => {
      //   console.log(res)
      // })
      // getTable().then((res) => {
      //   console.log(res)
      // })
    },
    test2 () {
      getListAPI().then(res => { console.log(res) })
    },
    openDialog (data) {
      this.centerDialogVisible = true
      getWeiboHotSearchDetails({
        url: data.url.split('com')[1]
      }).then(res => {
        this.webioDetailsTitle = data.title
        this.$refs.dialogCon.innerHTML = res
        window.scrollTo(0, 0)
      }, err => {
        console.log(err);
      })
    },
    echartsInit () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('home-echarts'));
      var myChartBottome = echarts.init(document.getElementById('home-bottom'));
      window.addEventListener("resize", function () {
        console.log(123234)
        myChartBottome.resize()
        myChart.resize()

      })
      // 指定图表的配置项和数据
      var option = {
        // legend: {
        //   top: 'bottom'//按钮显示
        // },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 200],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            labelLine: false,//隐藏对应的数值和name属性
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      var option2 = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '渐变堆叠面积图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 221, 255)'
              }, {
                offset: 1,
                color: 'rgba(77, 119, 255)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: 'Line 3',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(55, 162, 255)'
              }, {
                offset: 1,
                color: 'rgba(116, 21, 219)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
          },
          {
            name: 'Line 4',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 0, 135)'
              }, {
                offset: 1,
                color: 'rgba(135, 0, 157)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: 'Line 5',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 191, 0)'
              }, {
                offset: 1,
                color: 'rgba(224, 62, 76)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
          }
        ]
      };
      myChartBottome.setOption(option2);
    }


  }
}

</script>
<style  scoped>
.boxCard {
  background-color: #fff;
}
.homeEcharts {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
.home-echarts {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
/* .home {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.home-left {
  flex: 1;
}
.home-right {
  flex: 1;
}
.home-echarts {
  width: 600px;
  height: 500px;
}

.text {
  font-size: 14px;
}



.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.home-left-top {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
 */
.item {
  margin-bottom: 18px;
}
.card-list {
  height: 200px;
  overflow: auto;
}
.home-bottom {
  width: 100%;
  height: 400px;
}
/*滚动条宽度*/
.card-list::-webkit-scrollbar {
  width: 4px;
}
/*滚动条里面小方块*/
.card-list::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
/*滚动条里面轨道*/
.card-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>