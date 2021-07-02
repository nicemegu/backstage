<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-top">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="card-list">
            <div v-for="o in 20" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </div>

        </el-card>
      </div>
      <div class="home-left-right">

      </div>

    </div>
    <div class="home-right">
      <div class="home-right-top">
        <div class="home-echarts" id="home-echarts"></div>
      </div>
      <div class="home-right-bot">

      </div>

    </div>

  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts';
// // 引入柱状图图表，图表后缀都为 Chart
// import {
//     BarChart
// } from 'echarts/charts';
// // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
// import {
//     TitleComponent,
//     TooltipComponent,
//     GridComponent
// } from 'echarts/components';
// // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
// import {
//     CanvasRenderer
// } from 'echarts/renderers';
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.echartsInit()
  },

  methods: {
    echartsInit () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('home-echarts'));
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
            radius: [50, 250],
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
    }


  }
}

</script>
<style  scoped>
.home {
  display: flex;
  width: 100%;
}
.home-left {
  flex: 1;
}
.home-right {
  flex: 1;
}
.home-echarts {
  width: 600px;
  height: 600px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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
.card-list {
  height: 200px;
  overflow: auto;
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