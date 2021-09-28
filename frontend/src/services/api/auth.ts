import http from '@/commons/http';

export default new (class {
  async loginUser(username: string, password: string) {
    return await http.post('/auth/login', { username, password });
  }
})();
