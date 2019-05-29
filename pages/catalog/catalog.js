// pages/catalog/catalog.js
import { tagInfoList } from '../../utils/tagList.js'
import { SubscribeModel } from '../../models/subscribe.js'
const subscribeModel = new SubscribeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList,
    markList: [],
    searchVal: ''
  },

  onSubTap(e) {
    const { tagId, tagList, active } = e.detail
    if (active) {
      // 存缓存
      subscribeModel.setSubList(tagList)
    } else {
      // 删缓存
      subscribeModel.removeSubList(tagId)
    }
    this.getMarkList()
  },

  getMarkList() {
    const subList = subscribeModel.getSubList()
    const markList = []
    
    subList.forEach(e => {
      markList.push({ type: e.tag, typeId: e.tagId })
    })

    this.setData({
      markList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getMarkList()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
})