export const getUserInfo = () => {
  const userInfoRaw = localStorage.getItem('@userInfo')
  const userInfoParsed = userInfoRaw ? JSON.parse(userInfoRaw) : {}
  return userInfoParsed
}