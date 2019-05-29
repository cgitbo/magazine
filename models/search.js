import { Request } from '../utils/request.js'

class SearchModel extends Request {
  getSearchRecommend(keyWorld) {
    return this.getData({
      url: `searchArticleRecommend/${keyWorld}`
    })
  }

  getSearchArticleList(keyWorld, start = 0) {
    return this.getData({
      url: `searchArticleList/${keyWorld}/${start}`
    })
  }
}

export { SearchModel }