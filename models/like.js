class LikeModel {
  storageKey = 'likeList'

  getLikeList() {
    return wx.getStorageSync(this.storageKey) || []
  }

  setLikeList(list) {
    const likeList = this.getLikeList()
    likeList.unshift(list)
    this._setStorage(likeList)
  }

  removeLikeList(artId) {
    const likeList = this.getLikeList()
    likeList.forEach((ele, idx) => {
      if (ele.artId == artId) {
        likeList.splice(idx, 1)
        return
      }
    })
    this._setStorage(likeList)
  }

  getLikeStatus(artId) {
    const likeList = this.getLikeList()
    let likeStatus = false
    likeList.forEach((ele, idx) => {
      if (ele.artId == artId) {
        likeStatus = true
      }
    })
    return likeStatus
  }

  _setStorage(likeList) {
    wx.setStorageSync(this.storageKey, likeList)
  }
}

export { LikeModel }