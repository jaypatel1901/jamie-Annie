import { BaseUrl } from './Network';
import Swal from 'sweetalert2/dist/sweetalert2'
const axios = require('axios');

// For Post Api Calls And Put
export const HttpCallPost = async (method, type, token, body) => {
  console.log("body",body)
  return new Promise(async function (resolve, reject) {
    const url = BaseUrl + method;
    axios({
      method: type,
      url: url,
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'authorization': token
      },
      data: body
    }).then(response => {
      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          type: 'error',
          title: response.data.msg,
      })
        return resolve(response);
       
      }
      return resolve(response);
    })
      .catch(err => {
        return reject(err);
      });
  });
};

//For Get Api Calls
export const HttpCallGet = async (method, type, token) => {
  // console.log("method, type, token",   token)
  return new Promise(async function (resolve, reject) {
    const userdata = localStorage.getItem('token')

    const url = BaseUrl + method;
    axios.get(url,{
       headers: {
        'Content-Type': 'application/json',
        'authorization': token
    },
    }).then(response => {
      if (response.status === 304) {
        return resolve(response);
      }
      return resolve(response);
    })
      .catch(err => {
        return reject(err);
      });

  });
};

//for delete
export const HttpCallDelete = async (method, type, token) => {
  // console.log("method, type, token",   token)
  return new Promise(async function (resolve, reject) {
    const userdata = localStorage.getItem('token')

    const url = BaseUrl + method;
    axios.delete(url,{
       headers: {
        'Content-Type': 'application/json',
        'authorization': token
    },
    }).then(response => {
      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          type: 'error',
          title: response.data.msg,
        })
        return resolve(response);
      }
      return resolve(response);
    })
      .catch(err => {
        return reject(err);
      });

  });
};

//For Api Error Handling Globaly
export const handleError = (errResponse) => {
  if (errResponse.response.status === 403) {
    localStorage.clear()
    return Swal.fire({
      position: 'center',
      type: 'error',
      title: 'Invalid User',
    }).then((ok) => {
      window.location.assign('/')

    })
  }
  else if (errResponse.response.status === 404) {
    Swal.fire({
      position: 'center',
      type: 'error',
      title: errResponse.response.data.msg,
    })
  }
  else if (errResponse.response.status === 500) {
    Swal.fire({
      position: 'center',
      type: 'error',
      title: errResponse.response.data.msg,
    })
  }
  else if (errResponse.response.status === 400) {
    Swal.fire({
      position: 'center',
      type: 'error',
      title: errResponse.response.data,
    })
 }
 else if (errResponse.response.status === 401) {
  Swal.fire({
    position: 'center',
    type: 'error',
    title: errResponse.response.data.msg,
  })
}
}
//for delete

