import http from '@/commons/http';

export default new (class {
  async getGroups() {
    return await http.get('/social/group');
  }

  async getGroupMessages(groupId: string) {
    return await http.get('/social/group/message', {
      params: { groupId: groupId },
    });
  }

  async postMessageToGroup(groupId: string, contents: string) {
    return await http.post(
      '/social/group/message',
      { contents: contents },
      { params: { groupId: groupId } },
    );
  }

  async createGroup(title: string, description: string) {
    try {
      return [true, await http.post('/social/group', { title, description })];
    } catch (e: any) {
      return [false, e.response.data.message];
    }
  }

  async joinGroup(inviteString: string) {
    try {
      return [
        true,
        await http.put(
          '/social/group/join',
          {},
          {
            params: { inviteString: inviteString },
          },
        ),
      ];
    } catch (e: any) {
      return [false, e.response.data.message];
    }
  }
})();
