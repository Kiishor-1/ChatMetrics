import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { COMMUNITY_ENDPOINTS } from '../services/api';
import toast from 'react-hot-toast';

const { FETCH_COMMUNITY, FETCH_COMMUNITY_METRICS,JOIN_COMMUNITY } = COMMUNITY_ENDPOINTS;

// Thunk to fetch the list of communities
export const fetchCommunities = createAsyncThunk('community/fetchCommunities', async () => {
  const response = await axios.get(FETCH_COMMUNITY);
  return response.data;
});

// Thunk to fetch a single community
export const fetchCommunity = createAsyncThunk('community/fetchCommunity', async (communityId) => {
  const response = await axios.get(`${FETCH_COMMUNITY}/${communityId}`);
  return response.data;
});

// Thunk to fetch community metrics
export const fetchCommunityMetrics = createAsyncThunk('community/fetchCommunityMetrics', async (communityId) => {
  const response = await axios.get(FETCH_COMMUNITY_METRICS(communityId));
  console.log(response)
  return { communityId, metrics: response.data };
});


// Thunk to join a community
export const joinCommunity = createAsyncThunk(
  'community/joinCommunity',
  async ({ communityId, token }, { rejectWithValue }) => {
    try {
      // Ensure communityId is correctly passed as a string
      const response = await axios.post(JOIN_COMMUNITY(communityId),
        {}, // No body required
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      toast(response.data.message);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Server error');
    }
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState: {
    list: [],
    community: null,
    metrics: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommunities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCommunities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCommunity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommunity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.community = action.payload;
      })
      .addCase(fetchCommunity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCommunityMetrics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommunityMetrics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics[action.payload.communityId] = action.payload.metrics;
      })
      .addCase(fetchCommunityMetrics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Join community cases
      .addCase(joinCommunity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(joinCommunity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Handle success, e.g., updating the community list or details
      })
      .addCase(joinCommunity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default communitySlice.reducer;

