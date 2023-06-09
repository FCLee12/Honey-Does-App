import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { useSelector } from "react-redux";

function* createJobId() {


    try {
        // generates new job_id
        const jobId = yield axios.get(`/api/job/jobid`);
        yield console.log('this is jobId.data', jobId.data);
        console.log('past generate new jobId');
        // places generated jobId into the associated reducer
        yield put({
            type: 'SET_JOB_ID_REDUCER',
            payload: jobId.data
        });

        // // update the form_job_id for the user 
        // yield put({
        //     type: 'ADD_FORM_ID',
        //     payload: {job_id: jobId.data}
        // });

        // create a new job using the generated job id
        yield axios.post('/api/job', {jobId: jobId.data});
        console.log('past create new job');
        // get updated active job from the db
        const activeJob = yield axios.get(`api/job/${jobId.data}`);
        console.log('past get active job from db:', activeJob.data);
        // set activeJob reducer to the activeJob
        yield put({type: 'SET_ACTIVE_JOB', payload: activeJob.data[0]});
        console.log('set active job in reducer');
    } catch(error) {
        console.log('ERROR retrieving new jobID', error);
    }

}

function* fetchClientJobs(action) {
  try {
    console.log("fetchclientjobs", action.payload);
    const clientJobs = yield axios.get(`/api/job/client/${action.payload}`);
    console.log("this is clientJobs.data", clientJobs.data);

    yield put({
      type: "SET_CLIENT_JOBS_REDUCER",
      payload: clientJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving new client Jobs", error);
  }
}

function* fetchCleanerJobs(action) {
  try {
    console.log("fetch cleaner jobs", action.payload);
    const cleanerJobs = yield axios.get(`/api/job/cleaner/${action.payload}`);
    console.log("this is cleanerJobs.data", cleanerJobs.data);

    yield put({
      type: "SET_CLEANER_JOBS_REDUCER",
      payload: cleanerJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving cleaner Jobs", error);
  }
}

function* fetchJobs() {
    try {
        console.log('Inside fetchJobs');
        const allJobs = yield axios.get(`/api/job/allJobs`);
        console.log('this is allJobs.data', allJobs.data);

    yield put({
      type: "SET_ALL_JOBS",
      payload: allJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving new allJobs", error);
  }
}

function* adminUpdateJob(action) {
    try {
        console.log('adminUpdateJob action.payload:', action.payload);
        const response = yield axios.put(`/api/job/adminUpdateJob`, action.payload);

        const newJobDetails = yield axios.get(`/api/job/updatedJobDetails/${action.payload.job_id}`);
        console.log('adminUpdateJob() newJobDetails.data[0]:', newJobDetails.data[0]);
        yield put({
            type: 'VIEW_JOB_DETAILS',
            payload: newJobDetails.data[0]
        });
    } catch(error) {
        console.log('ERROR updating job', error);
    }
}

// ADMIN DASHBOARD - GET SEARCHED JOBS
function* getSearchedJobs(action) {
    try {
        const response = yield axios.get(`/api/job/search/${action.payload}`);
        console.log('getSearchedJobs() response.data:', response.data);

        // store searched jobs in the allJobs reducer
        yield put({
            type: 'SET_ALL_JOBS', 
            payload: response.data
        });
    } catch (error) {
        console.log("Error retrieving searched jobs", error);
    }
}

function* submitRequest(action){
  console.log('inside submitRequest', action.payload);
  try{
    yield axios.put(`/api/job/client/submitRequest/${action.payload}`);
  }
  catch{
    console.log('error submitting request', err);
  }
}

function* jobSaga() {

  yield takeLatest("FETCH_CLEANER_JOB", fetchCleanerJobs);

    yield takeLatest('CREATE_JOB_ID', createJobId);
    yield takeLatest('FETCH_JOBS', fetchJobs);
    yield takeLatest('ADMIN_UPDATE_JOB', adminUpdateJob);
    yield takeLatest("FETCH_CLIENT_JOB", fetchClientJobs);
    yield takeLatest("GET_SEARCHED_JOBS", getSearchedJobs);
    yield takeLatest("SUBMIT_REQUEST", submitRequest);

}

export default jobSaga;
