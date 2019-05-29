// components/articleList/cmp.js
import { IndexModel } from '../../models/index.js'
const indexModel = new IndexModel()
import { SearchModel } from '../../models/search.js'
const searchModel = new SearchModel()
Component({

  lifetimes: {
    attached() {
      const curPages = getCurrentPages()
      const index = curPages.length - 1

      if (curPages[index].route === 'pages/search/search') {
        this.setData({
          modelType: 'search'
        })
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Array,
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magazineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
    searchWorld: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    modelType: 'index'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      if (this._isLock()) return

      this._loadLock()

      const { modelType } = this.data

      this._getSearchType(modelType).then(res => {
        this._setMoreData(res)
        this._unLoadLock()
      })
    },

    _getSearchType(type) {
      const searchType = {
        index: () => {
          const { magazineId } = this.data
          const start = this.data.articleList.length

          return indexModel.getArticleList(magazineId, start)
        },
        search: () => {
          const { searchWorld } = this.properties
          const start = this.data.articleList.length

          return searchModel.getSearchArticleList(searchWorld, start)
        }
      }
      return searchType[type]()
    },

    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },

    _isLock() {
      return this.data.loading || this.data.noMoreData
    },

    _loadLock() {
      this.setData({
        loading: true
      })
    },

    _unLoadLock() {
      this.setData({
        loading: false
      })
    },

    _setMoreData(list) {
      const articleList = this.data.articleList.concat(list)

      if (articleList.length === this.data.articleList.length) {
        this.setData({
          noMoreData: true
        })
        return
      }

      this.setData({
        articleList
      })
    }
  },

})
