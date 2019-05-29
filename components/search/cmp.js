// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchValue: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearchTap(e) {
      const searchValue = this.data.searchValue
      wx.navigateTo({
        url: `/pages/search/search?searchWorld=${searchValue}`,
      })
    },

    onInputBlur(e) {
      const searchValue = e.detail.value
      this.setData({
        searchValue
      })
    }
  }
})
