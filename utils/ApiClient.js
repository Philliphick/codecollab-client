import axios from "axios";

const BASE_URL = "http://localhost:5001"; 

export default class ApiClient {
  constructor() {
    this.client = axios.create({
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(username, password) {
    console.log("this is login:", username, password);
    try {
      const response = await this.client.post(`${BASE_URL}/auth/login`, { username, password }, { withCredentials: true });
      console.log("this is response.data", response.data);
      return response.data;
    } catch (error) {
      console.log("this is error", error);
      throw error;
    }
  }

  async register(username, email, password) {
    try {
      console.log("this is username, email, password", username, email, password);
      const response = await this.client.post(`${BASE_URL}/auth/registration`, { username, email, password }, { withCredentials: true });
      console.log("this is response.data", response.data);
      return response.data;
      
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const response = await this.client.post(`${BASE_URL}/auth/logout`, {withCredentials: true});
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getProfile({ id }) {
      try {
        console.log("this is id", id);
        const response = await this.client.get(`${BASE_URL}/project/user/${id}`, { withCredentials: true });
        return response.data;
      } catch (error) {
        throw error;
      }
  }

  async makePost({ name, description, repoLink, tags, timeframe }) {
    try {
      const response = await this.client.post(
        `${BASE_URL}/project/makePost`,
        { name, description, repoLink, tags, timeframe },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async editProfile(formData) {
    try {
      const response = await this.client.patch(`${BASE_URL}/profile/edit`, formData, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  
  


};

