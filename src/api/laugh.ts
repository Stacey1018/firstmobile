import http from '@/plugins/axios/http';
export function getLaugh() {
  return http.get(`/api/joke/getJoke`);
}
