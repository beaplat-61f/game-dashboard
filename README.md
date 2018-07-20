# game-dashboard

## 自定义组件说明

### select 单选组件

参数说明

| 属性         | 说明                    | 类型     | 默认值   |
| ------------ | ----------------------- | -------- | -------- |
| items        | select 显示各个项的配置 | Array    |          |
| color        | item选中高亮颜色        | String   | # 2D8CF0 |
| currentValue | 当前值                  | String   |          |
| bind:change  | 选中事件                | Function |          |

items数据格式如下

```
items: [
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
]
```

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