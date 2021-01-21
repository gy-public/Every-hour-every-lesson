import http from "./http.js";

// 课程列表
export const curriculum = (params) => http.get(`courseBasis`, { params });
// 课程详情
export const Details = (id) => http.get(`courseInfo/basis_id=${id}`)
// 课程收藏
// export const Gzhu = (id) => http.post(`collect`, {
//     course_basis_id: "",
//     type: 1
// })
// 报名
// export const buyBy = () => http.post(`order/shopInfo`, {
//     group_id: 0,
//     product_number: 0,
//     shop_id: "",
//     spell_id: "",
//     type: 10
// })

// 个人信息
export const message = () => http.get("userInfo")

//获取登录接口访问
export const login = (params) => {
    return http.post("login",{...params})
}

//获取banner轮播图
const getlist = async function(){
    let {data}=await http.get('banner')
    return data
}
export {
    getlist,
}

//获取首页列表
const indexlist = async function(){
    let {data} = await http.get('recommend/appIndex')
    return data
}
export {
    indexlist
}

//获取首页列表
const penglist = async function(){
    let {data} = await http.get('myStudy/2')
    return data
}
export {
    penglist
}

//获取课程列表
export const course = (params) => {
    return http.get(`courseBasis?`,{params:params})
}

//获取课程详情列表
export const courselist = (id) => {
    return http.get(`courseInfo/basis_id=${id}`)
}

