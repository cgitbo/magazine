class SubscribeModel {
  storageKey = 'subscribe'
  getSubList() {
    return wx.getStorageSync(this.storageKey) || []
  }

  setSubList(tagList) {
    const subList = this.getSubList()
    let flag = true
    subList.forEach((ele, idx) => {
      if (ele.tagId == tagList.tagId) {
        flag = false
      }
    })
    flag && subList.push(tagList)
    this._setStorage(subList)
  }

  removeSubList(tagId) {
    const subList = this.getSubList()
    let myIndex = 0;
    subList.forEach((ele, idx) => {
      if (ele.tagId == tagId) {
        myIndex = idx
      } else {
        return
      }
    })
    subList.splice(myIndex, 1)
    this._setStorage(subList)
  }

  _setStorage(subList) {
    wx.setStorageSync(this.storageKey, subList)
  }
}

export { SubscribeModel }