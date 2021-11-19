import http from '@/commons/http';

export default new (class {
  async getSchedules() {
    return await http.get('/schedule');
  }

  async createSchedule(
    startTime: string,
    endTime: string,
    title: string,
    repeatEach: string,
    note?: string,
  ) {
    try {
      return [
        true,
        await http.post('/schedule', {
          title,
          note,
          startTime,
          endTime,
          repeatEach,
        }),
      ];
    } catch (e: any) {
      return [false, e.response.data.message];
    }
  }
})();
