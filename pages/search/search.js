// pages/search/search.js
import { getRandom } from '../../utils/random.js'
import { SearchModel } from '../../models/search.js'
const searchModel = new SearchModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWorld: '',
    searchArticleList: [],
    searchRecommend: {},
    more:'',
    showLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { searchWorld } = options

    this.setData({
      searchWorld
    })

    this.getData(searchWorld)
  },

  getData(searchWorld) {
    const getSearchRecommend = searchModel.getSearchRecommend(searchWorld)

    const getSearchArticleList = searchModel.getSearchArticleList(searchWorld)

    Promise.all([getSearchRecommend, getSearchArticleList]).then(res => {
      let [searchRecommend, searchArticleList] = res
      this.setData({
        searchRecommend,
        searchArticleList,
        showLoading: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {
    this.setData({
      more: getRandom(20)
    })
  },
})