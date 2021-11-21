import http from '@/commons/http';

export default new (class {
  async information() {
    return await http.get('/user/information');
  }

  async create(email: string, username: string, password: string) {
    try {
      return [true, await http.post('/user', { email, username, password })];
    } catch (e: any) {
      return [false, e.response.data];
    }
  }
})();
