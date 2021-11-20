import http from '@/commons/http';

export default new (class {
  async getMentalHealthColumns() {
    return await http.get('/prediction/mental-health/columns');
  }

  async mentalHealthPredict(input: any[]) {
    try {
      return [
        true,
        await http.post('/prediction/mental-health/predict', input),
      ];
    } catch (e: any) {
      return [false, e.response.data.message];
    }
  }
})();
