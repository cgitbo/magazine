// components/bigImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: String,
    mainTitle: {
      type: String,
      value: '',
      observer(newVal, oldVal, changePath) {
        // console.log(newVal)
        // console.log(oldVal)
        // console.log(changePath)
      }
    }
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

  }
})
