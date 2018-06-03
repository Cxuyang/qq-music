import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
// pc 首页数据
export function getDataForPc() {
  const url = '/api/getDataForPc'
  //const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: {"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"music.web_album_library","method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":40,"click_albumid":0}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}
    })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc mv数据
export function getDataForPcMV() {
  const url = '/api/getDataForPcMV'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    cmd: 'shoubo',
    lan: 'all'
    })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 歌手列表数据
export function getDataForPcSingerList() {
  const url = '/api/singerList'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: {"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}
    })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 歌手介绍
export function getDataForSingerInfo(singermid) {
  //const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg?singermid=003Nz2So3XXYek&utf8=1&outCharset=utf-8&format=xml'
  //const url = `https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_singer_desc.fcg`
  const url = '/api/singerInfo'
  const data = Object.assign({}, {
    singermid: singermid,
    utf8: 1,
    outCharset: 'utf-8',
    format: 'xml',
    r: 1527210785370
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}
// pc 歌手 热门歌曲
export function getSingerHotSongs(singermid) {
  const url = '/api/hotsongs'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singermid,
    order: 'listen',
    begin: 0,
    num: 10,
    songstatus: 1,
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 歌手 专辑
export function getSingerAlbums(singermid) {
  const url = '/api/singerAlbums'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singermid,
    order: 'listen',
    begin: 0,
    num: 5,
    songstatus: 1,
    order: 'time'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 歌手 MV
export function getSingerMv(singermid) {
  const url = '/api/singerMv'
  const data = Object.assign({}, {
    g_tk: 5381,
    cid: 205360581,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singermid,
    order: 'listen',
    begin: 0,
    num: 5,
    songstatus: 1,
    order: 'time'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 歌手 粉丝上传MV
export function getSingerFansMv(singermid) {
  const url = '/api/singerMv'
  const data = Object.assign({}, {
    g_tk: 5381,
    cid: 205360581,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: singermid,
    order: 'listen',
    begin: 0,
    num: 5,
    songstatus: 1,
    order: 'time',
    cmd: 1
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 歌手 相似歌手
// export function getSingerSimSingers(singermid) {
//   const url = '/api/simsinger'
//   const data = Object.assign({}, {
//     g_tk: 5381,
//     format: 'jsonp',
//     inCharset: 'utf8',
//     outCharset: 'utf-8',
//     notice: 0,
//     platform: 'yqq',
//     needNewCode: 0,
//     jsonpCallback: 'SingerSimCallback',
//     singermid: singermid,
//     utf8: 1,
//     start: 0,
//     num: 5,
//     loginUin: 0,
//     hostUin: 0
//   })
//   return axios.get(url, {
//     params: data
//   }).then(res => {
//     return Promise.resolve(res.data)
//   })
// }
// pc 专辑列表
export function getAlbumList() {
  const url = '/api/albums'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: {"albumlib":{"method":"get_album_by_tags","param":{"area":0,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":20,"click_albumid":0},"module":"music.web_album_library"}}
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 分类歌单 tags
export function getSongListTags() {
  const url = '/api/songListTags'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc 分类歌单 歌单
export function getSongList() {
  const url = '/api/songList'
  const data = Object.assign({}, {
    picmid: 1,
    rnd: 0.9795902129255376,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc allmv
export function getAllMv() {
  const url = '/api/allmv'
  const data = Object.assign({}, {
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    utf8: 1,
    type: 2,
    year: 0,
    area: 0,
    tag: 0,
    pageno: 0,
    pagecount: 20,
    otype: 'json',
    taglist: 1,
    _: 0.6470758178883727
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
// pc radiolist
export function getRadiolist() {
  const url = '/api/radiolist'
  const data = Object.assign({}, {
    channel: 'radio',
    format: 'jsonp',
    page: 'index',
    tpl: 'wk',
    new: 1,
    p: 0.6539590467120444,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}