import {
  getGoodsList
} from './goods';

/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export function getSearchHistory() {
  return {
    historyWords: [
      '大连樱桃',
      '大连明珠樱桃',
      '大连俄八樱桃',
      '大连湾生蚝',
      '大连美早樱桃',
      '大连红灯樱桃'
    ],
  };
}

export function getSearchPopular() {
  return {
    popularWords: [
      '大连美早樱桃',
      '大连明珠樱桃',
      '大连湾生蚝',
      '大连俄八樱桃',
      '大连樱桃',
      '大连红灯樱桃'
    ],
  };
}

export function getSearchResult() {
  return {
    saasId: null,
    storeId: null,
    pageNum: 1,
    pageSize: 30,
    totalCount: 1,
    spuList: getGoodsList(7),
    algId: 0,
  };
}