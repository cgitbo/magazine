// components/article/cmp.js
import { LikeModel } from '../../models/like.js'
const likeModel = new LikeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: false
  },

  lifetimes: {
    attached() {
      const { artId } = this.properties.articleDetail
      let likeStatus = likeModel.getLikeStatus(artId)

      this.setData({
        likeStatus
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeTap(e) {
      const { like, artId } = e.detail
      const { articleDetail } = this.properties
      const likeList = likeModel.getLikeList()

      if (like) {
        // 存数据再存缓存
        likeModel.setLikeList(articleDetail)
      }
      else {
        // 删数据再存缓存
        likeModel.removeLikeList(artId)
      }
    }
  }
})
