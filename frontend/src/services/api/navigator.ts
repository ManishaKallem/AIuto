import http from '@/commons/http';

export default new (class {
  async createMoodNavigatorRecord(mood: string, on: string) {
    return await http.post('/navigator', {
      on: on,
      mood: mood,
    });
  }

  async getMoodEntries() {
    return await http.get('/navigator');
  }
})();
