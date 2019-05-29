// pages/mark/mark.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    authorized: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articleList: []
  },

  onGetUserInfo(e) {
    const { userInfo } = e.detail
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
      this.getMyLike()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getMyLike()
  },

  getMyLike() {
    const { authorized } = this.data
    if (authorized) {
      const articleList = wx.getStorageSync('likeList') || []
      this.setData({
        articleList
      })
    }
  },

  getUserInfo() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        authorized: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          authorized: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            authorized: true
          })
        }
      })
    }
  }
})