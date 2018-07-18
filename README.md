# game-dashboard

## 自定义组件说明

> 组件前缀统一为 `ele`，因为我的吉祥物为大象（elephant）

### select 单选组件

参数说明

待补充

How to use it

```
// page.json
"usingComponents": {
    "ele-select": "../../components/select/index"
}

// page.wxml
<ele-select items="{{ group }}" currentValue="{{ currentValue }}" bind:change="handleChange"></ele-select>

// page.js
data: {
    currentValue: 'today',
    color: '#28a745',
    group: [
      {
        title: '昨天',
        value: 'yesterday'
      },
      {
        title: '今天',
        value: 'today'
      },
      {
        title: '最近7天',
        value: 'seven'
      }
    ],
}

handleChange({ detail }) {
    console.log(detail)
}
```



## 参考项目

- [wx-charts](https://github.com/xiaolin3303/wx-charts)
- [iview-weapp](https://github.com/TalkingData/iview-weapp)