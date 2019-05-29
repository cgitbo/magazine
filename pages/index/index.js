// pages/index/index.js
import { IndexModel } from '../../models/index.js'
import { getRandom } from '../../utils/random.js'
const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    magazineTypeArr: ['青茫', '兴趣', '物质', '世界', '新事', '灵魂'],
    articleList: [],
    markList: [],
    recommendInfo: {},
    getMore: '',
    magazineId: 0,
    showLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  getData(magazineId = 0) {
    indexModel.abort()

    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const recommendInfo = indexModel.getRecommendInfo(magazineId)

    Promise.all([articleList, markList, recommendInfo]).then(res => {
      let [articleList, markList, recommendInfo] = res

      this.setData({
        articleList,
        markList,
        recommendInfo
      })

      this._hideLoading()
    })
  },

  onCatalogTap() {
    wx.switchTab({
      url: '/pages/catalog/catalog'
    })
  },

  onNavTap(e) {
    const magazineId = e.detail.index

    this._setMagazineId(magazineId)

    this._resetData()

    this._scrollTop()

    this.getData(magazineId)
  },

  _setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  },

  _resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommendInfo: {}
    })
  },

  _scrollTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },

  _hideLoading() {
    this.setData({
      showLoading: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      getMore: getRandom(20)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})