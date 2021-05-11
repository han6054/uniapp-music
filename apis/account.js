import request from '@/utils/request/index.js'

// 注册
export function apiLogin(data) {
	return request.request({
		url: '/login/cellphone',
		method: 'GET',
		data,
		hideLoading: true
	})
}

//退出
export function apiLogout(data) {
	return request.request({
		url: '/logout',
		method: 'GET',
		data,
		hideLoading: true
	})
}

// 获取用户详情
export function apiUserDetail(data) {
	return request.request({
		url: '/user/detail',
		method: 'GET',
		data,
		hideLoading: true
	})
}