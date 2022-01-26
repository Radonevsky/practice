export default function (instance) {
  return {
    signIn (payload) {
      return instance.post('users/login', payload)
    },
    signUp (payload) {
      return instance.post('users', payload)
    }
  }
}
