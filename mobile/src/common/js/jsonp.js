import originJsonp from 'jsonp'

export default function jsonp(url, data, option) {
  url += (url.includes('?') ? '&' : '?') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      (!err) ? resolve(data) : reject(err)
    })
  })
}

export function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}