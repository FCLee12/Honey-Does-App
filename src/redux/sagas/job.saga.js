import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createJobId() {
    try {
        const jobId = yield axios.get(`/api/job/jobid`);
        console.log('this is jobId.data', jobId.data);

        // places generated jobId into the associated reducer
        yield put({
            type: 'JOB_ID',
            payload: jobId.data
        });
    } catch(error) {
        console.log('ERROR retrieving new jobID', error);
    }
}

function* jobSaga() {
    yield takeLatest('CREATE_JOB_ID', createJobId);
  }
  
  export default jobSaga;