// components/subscribe/cmp.js
Component({
  attached() {
    this.getSubList()
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tagId: Number,
    tagList: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSubTap() {
      const active = !this.data.active
      this.setData({
        active
      })

      const { tagId, tagList } = this.properties
      this.triggerEvent('subtap', { tagId, tagList, active }, {})
    },

    getSubList() {
      const subList = wx.getStorageSync('subscribe') || []
      const { tagId } = this.properties
      
      subList.forEach(ele => {
        if (ele.tagId == tagId) {
          this.setData({
            active: true
          })
        }
      })
    }
  }
})
