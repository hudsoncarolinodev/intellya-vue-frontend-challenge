declare module "vuex" {
  function useStore<T = any>(key?: string): T
}