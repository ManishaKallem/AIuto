import http from "@/commons/http";

export default new (class {
  async create(email: string, username: string, password: string) {
    return await http.post("/user", { email, username, password });
  }
})();
