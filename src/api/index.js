/*
*   包含n个接口请求函数
*   每个函数的返回值是promise
* */
import ajax from "./ajax.js"

// const BASE = 'http://localhost:5000'
const BASE = '/api'

export const reqAddress = (longitude,latitude) => ajax(BASE + `position/${longitude},${latitude}`)

export const reqFoodCategorys = () => ajax(BASE + '/index_category')

export const reqShops = (longitude,latitude) => ajax(BASE + '/shops',{latitude,longitude})
