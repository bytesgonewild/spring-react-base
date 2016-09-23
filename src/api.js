import _ from 'lodash';
import $ from 'jquery';

let apiContext = config.api.contextPath;

function addPageQps(url, page, size) {
  if (_.isNumber(page)) {
    url += "page=" + page+ "&";
  }
  if (_.isNumber(size)) {
    url += "size=" + size;
  }
  return url;
}

function POST(url, body) {
  return $.ajax({
    type: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;charset=UTF-8"
    },
    data: JSON.stringify(body)
  });
}

function PUT(url, body) {
  return $.ajax({
    type: "PUT",
    url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;charset=UTF-8"
    },
    data: JSON.stringify(body)
  });
}

let Api = {
  demo: {
    list(cb, page, offset) {
      if (_.isFunction(cb)) {
        let url = addPageQps(apiContext + "/demo", page, offset);
        $.get(url).done(cb);
      }
    },
    get(id, cb) {
      if (_.isFunction(cb)) {
        $.get(apiContext + "/demo/" + id).done(cb);
      }
    },
    create(demoEntity, cb) {
      POST(apiContext + "/demo", demoEntity).done(cb);
    },
    update(id, demoEntity, cb) {
      PUT(apiContext + "/demo/" + id, demoEntity).done(cb);
    }
  }
};

export default Api;
