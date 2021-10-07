import http from '@/commons/http';

export default new (class {
  async loginUser(username: string, password: string) {
    try {
      return [true, await http.post('/auth/login', { username, password })];
    } catch (e: any) {
      return [false, e.response.data.message];
    }
  }
})();
