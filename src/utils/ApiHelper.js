import Axios from 'axios';
import q from 'q';

class ApiHelper {
  send({
         method = 'get',
         url = '/',
         options = {},
         data = null
       }) {
    const deferred = q.defer();
    const input = [url];
    const opt = options || {};
    opt.headers = opt.headers ? opt.headers : {};

    if ((method === 'post' || method === 'put' || method === 'patch') && (data)) {
      input.push(data);
    }

    // if (!AccessAPI.user || !AccessAPI.user.accessToken) {
    //   deferred.reject([{param: 'accessToken', message: 'User not found'}]);
    //   return deferred.promise;
    // }
    //
    // opt.headers.Authorization = `Bearer ${AccessAPI.user.accessToken}`;

    input.push(opt);

    Axios[method](...input)
      .then((response) => {
        deferred.resolve(response.data);
      },
        (errors) => {
          let flag = false;
          for (const error of errors.response.data) {
            if (error.param === 'accessToken') {
              flag = true;
            }
          }

          if (!flag) {
            return deferred.reject(errors);
          }

          // Axios.post(`${APIAccessPath}refreshToken`, {refreshToken: AccessAPI.user.refreshToken})
          //   .then((response) => {
          //       AccessAPI.user = {...response.data, refreshToken: AccessAPI.user.refreshToken};
          //
          //       opt.headers.Authorization = `Bearer ${AccessAPI.user.accessToken}`;
          //
          //       input.pop();
          //       input.push(opt);
          //
          //       Axios[method](...input)
          //         .then((response) => {
          //             deferred.resolve(response.data);
          //           },
          //           (errors) => {
          //             deferred.reject(errors);
          //           });
          //     },
          //     () => {
          //       deferred.reject(errors);
          //     });
        });
    return deferred.promise;
  }
}

export default new ApiHelper();
