// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    magazineTypeArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineIndex: 0,
    magazineId: 'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTypeTap(e) {
      const lastIndex = this.data.magazineIndex
      let { index } = e.currentTarget.dataset

      if (lastIndex === index) return

      this.setData({
        magazineIndex: index,
        magazineId: `magazine${index > 0 ? index - 1 : 0}`
      })

      this.triggerEvent('nav', { index }, {})
    }
  }
})
