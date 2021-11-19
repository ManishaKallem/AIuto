import http from '@/commons/http';

export default new (class {
  async getGroups() {
    return await http.get('/social/group');
  }

  async createGroup(title: string, description: string) {
    try {
      return [true, await http.post('/social/group', { title, description })];
    } catch (e: any) {
      return [false, e.response.data.message];
    }
  }
})();
