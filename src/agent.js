import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import config from './config';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = config.baseUrl;

const responseBody = res => res.body;

const acceptPlugin = req => {
  req.set("Accept", "application/fhir+json");
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
    requests.get("/Questionnaire?_summary=true&_count=50"),
  byId: id =>
    requests.get(`/Questionnaire/${id}`),
  byTitle: title =>
    requests.get(`/Questionnaire?_summary=true&_count=50&title=${title}`)
};

const ValueSet = {
  relative: url =>
    requests.get(`/${url}`),
  external: url =>
    superagent.get(url)
      .use(acceptPlugin)
      .then(responseBody)
};

const QuestionnaireResponse = {
  byId: id => requests.get(`/QuestionnaireResponse/${id}`)
};

const Conformance = {
  metadata: () => requests.get("/metadata?_summary=true")
};

export default {
  Conformance,
  Questionnaire,
  QuestionnaireResponse,
  ValueSet
};
