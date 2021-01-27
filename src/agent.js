import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = `http://localhost:5000`;

const encode = encodeURIComponent;
const responseBody = res => res.body;

const request = {
  del: url => {
    superagent.del(`${API_ROOT}${url}`).then(responseBody)
  }
};