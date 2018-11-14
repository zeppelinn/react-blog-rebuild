import AppStoreClass from './appStore'

export const AppStore = AppStoreClass

export default {
  AppStore,
}

// 提供给服务端渲染时使用
export const createStoreMap = () => {
  return {
    appStore: new AppStore()
  }
}
