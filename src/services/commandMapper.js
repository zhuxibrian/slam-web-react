import { PAGE_SIZE } from './constants';
import request from '../utils/request';

export function fetch({ page = 0 }) {
  return request(`/api/cmdmappers/page/${page}/size/${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/cmdmappers/${id}`, {
    method: 'DELETE',
  });
}

export function put(values) {
  return request('/api/cmdmappers', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/cmdmappers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values),
  });
}

export function createSubmessage(id, values) {
  return request(`/api/cmdmappers/addSubmessage/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values),
  });
}

export function removeSubmessage(id) {
  return request(`/api/submessages/${id}`, {
    method: 'DELETE',
  });
}

export function createPoint(id, values) {
  return request(`/api/submessages/addpoint/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values),
  });
}

export function putSubmessage(values) {
  return request('/api/submessages', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values),
  });
}

export function removePoint(id) {
  return request(`/api/points/${id}`, {
    method: 'DELETE',
  });
}

export function putPoint(values) {
  return request('/api/points', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(values),
  });
}
