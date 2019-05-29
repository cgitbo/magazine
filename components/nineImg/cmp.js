// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainTitle: String,
    imgArr: Array
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
    onImgTap(e) {
      let { index } = e.currentTarget.dataset
      let imgArr = this.data.imgArr;
      wx.previewImage({
        urls: imgArr,
        current: imgArr[index]
      })
    }
  }
})
