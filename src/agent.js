import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import config from './config';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = config.baseUrl;

const responseBody = res => res.body;

const acceptPlugin = req => {
  req.set("Accept", "application/json+fhir");
};

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("Authorization", `Token ${token}`);
  }
};

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`)
      .use(acceptPlugin)
      .use(tokenPlugin)
      .then(responseBody)
};

const Questionnaire = {
  all: () =>
    requests.get("/Questionnaire"),
  byId: id =>
    requests.get(`/Questionnaire/${id}`)
};

const Conformance = {
  metadata: () =>
    requests.get("/metadata")
};

export default {
  Conformance,
  Questionnaire
};