Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    color: {
      type: String,
      value: '#2D8CF0'
    },
    currentValue: {
      type: String,
      value: ''
    }
  },
  methods: {
    handleSelect(e) {
      const value = e.currentTarget.dataset.value
      this.setData({
        currentValue: value
      })
      this.triggerEvent('change', {value: value}, {})
    }
  }
})
