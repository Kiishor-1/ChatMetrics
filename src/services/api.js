const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const MESSAGE_ENDPOINTS = {
  FETCH_MESSAGES: `${BASE_URL}/api/messages`,
  SEND_MESSAGE: `${BASE_URL}/api/messages`,
};

// Add other endpoints similarly
export const AUTH_ENDPOINTS = {
  SIGNUP_API: `${BASE_URL}/api/auth/signup`,
  LOGIN_API: `${BASE_URL}/api/auth/login`,
};

export const COMMUNITY_ENDPOINTS = {
  FETCH_COMMUNITY: `${BASE_URL}/api/community`,
  FETCH_COMMUNITY_METRICS:(communityId)=> `${BASE_URL}/api/community/${communityId}/metrics`,
  JOIN_COMMUNITY: (communityId) => `${BASE_URL}/api/community/${communityId}/join`,
  COMMUNITY_MEMBERS:(communityId)=>`${BASE_URL}/api/community/${communityId}/members`
};

export const USER_ENDPOINTS = {
  GET_USER : (id)=> `${BASE_URL}/api/users/${id}`,
}
