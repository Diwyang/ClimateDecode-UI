import axios from 'axios';

const baseUrl = 'http://20.197.13.9:80/';
const token = JSON.parse(
  localStorage.getItem('sb-cnimngcwarthyzxufwmy-auth-token')
)?.access_token;
// Request Interceptors
axios.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  function (error) {
    // Do something with request error
    alert('api error');
    return Promise.reject(error);
  }
);

class Api {
  /**
   * Wrapper for Axios GET calls
   *
   * @method get
   * @static
   * @param {string} route, the API route
   * @param {object} params, any parameters passed to the call
   * @param {function} callback, a callback function
   */
  static async get(route, params, callback) {
    // authToken = authToken || (await generateToken()); // uncomment for standalone run
    return axios
      .get(baseUrl + route, {
        ...params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        const errResponse = e.response || e;
        return errResponse;
      });
  }

  /**
   * Wrapper for Axios POST calls
   *
   * @method post
   * @static
   * @param {string} route, the API route
   * @param {object} body, key value pairs passed to the call
   * @param {function} callback, a callback function
   */
  static async post(route, body, callback) {
    return axios
      .post(baseUrl + route, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (typeof callback === 'function') {
          return callback(res);
        }
        return res;
      })
      .catch((e) => {
        const errResponse = e.response || e;
        return errResponse;
      });
  }

  static async put(route, body, callback) {
    return axios
      .put(route, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (typeof callback === 'function') {
          return callback(res);
        }
        return res;
      })
      .catch((e) => {
        const errResponse = e.response || e;
        return errResponse;
      });
  }
}

axios.interceptors.response.use(
  (response) => {
    if (response.error == 'Invalid token') {
      alert('You are not authorized');
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default Api;
