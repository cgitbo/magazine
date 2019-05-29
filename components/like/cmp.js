// components/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    artId: Number
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
    onLikeTap() {
      let { like, artId } = this.properties
      like = !like
      this.setData({
        like
      })

      this.triggerEvent('liketap', { like, artId }, {})
    }
  }
})
