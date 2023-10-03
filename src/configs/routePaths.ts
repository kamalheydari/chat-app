const routePaths = {
  root: '/',
  auth: {
    root: 'auth',
    login: 'login',
    register: 'register',
  },
  dashboard: {
    root: 'app',
    chats: 'chats',
    chat: (id?: string) => (id ? `chats/${id}` : ':id'),
  },
}

export default routePaths
