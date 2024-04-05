import {BaseClient} from "@/shared/api/Base/Base.client";
import routes from "./routes";

export class UserClient extends BaseClient {
  async getUsersList() {
    try {
      return await this.#fetchUsersList();
    } catch (error) {
      console.error(`getUsersList ${error}`);
    }
  }
  async #fetchUsersList() {
    return this.sendGetRequest(routes.list)
  }
}
