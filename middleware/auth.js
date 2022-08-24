export default function ({ store, redirect }) {
  // If the user is not authenticated
  // if (process.client && !store.state.auth.token) return redirect('/login')
  if (!store.getters['auth/token']) {
    redirect('/login')
  }
}