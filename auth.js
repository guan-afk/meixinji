// 开源本地版，禁用云登录
export const AuthMode = "public";
export function useAuth() {
  return {
    isLogin: false,
    user: null,
    login: ()=>{},
    logout: ()=>{}
  }
}
