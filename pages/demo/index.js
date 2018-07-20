Page({
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
    fruit: [{
      id: 1,
      name: '香蕉',
    }, {
      id: 2,
      name: '苹果'
    }, {
      id: 3,
      name: '西瓜'
    }, {
      id: 4,
      name: '葡萄',
    }],
    current: '苹果',
    position: 'left',
    animal: '熊猫',
    checked: false,
    disabled: false,
  },
  handleFruitChange({ detail = {} }) {
    this.setData({
      current: detail.value
    });
  },
  handleClick() {
    this.setData({
      position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
    });
  },
  handleDisabled() {
    this.setData({
      disabled: !this.data.disabled
    });
  },
  handleAnimalChange({ detail = {} }) {
    this.setData({
      checked: detail.current
    });
  },
  handleSelect(e) {
    console.log(e.currentTarget.dataset.value)
    this.setData({
      currentValue: e.currentTarget.dataset.value
    });
  },
  handleChange({ detail }) {
    console.log(detail)
  },
  onMyEvent: function (e) {
    console.log(e) // 自定义组件触发事件时提供的detail对象
  }
});