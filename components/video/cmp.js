// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    duration: String,
    videoSrc: String,
    poster: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: false
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached() {
      this._getVideoInfo()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onVideoPlayTap() {
      this._toggleVideoPoster()
      this.video.play()
    },

    onVideoPauseTap() {
      this._toggleVideoPoster()
      this.video.seek(0)
      this.video.stop()
    },

    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },

    _getVideoInfo() {
      const id = this.properties.videoId
      this.video = wx.createVideoContext(id, this)
    },

    onVideoEnded() {
      this._toggleVideoPoster()
    }
  }
})