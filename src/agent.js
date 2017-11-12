import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import config from './config';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = config.baseUrl;

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Questionnaire = {
  all: () =>
    requests.get("/Questionnaire")
};

export default Questionnaire
