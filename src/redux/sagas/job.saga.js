import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { useSelector } from "react-redux";

function* createJobId() {
  try {
    const jobId = yield axios.get(`/api/job/jobid`);
    yield console.log("this is jobId.data", jobId.data);

    // places generated jobId into the associated reducer
    yield put({
      type: "SET_JOB_ID_REDUCER",
      payload: jobId.data,
    });

    // update the job_id for the form that the user is
    // currently filling out
    yield put({
      type: "ADD_FORM_ID",
      payload: { job_id: jobId.data },
    });
  } catch (error) {
    console.log("ERROR retrieving new jobID", error);
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

function* fetchJobs() {
  try {
    const allJobs = yield axios.get(`/api/job/allJobs`);
    console.log("this is allJobs.data", allJobs.data);

    yield put({
      type: "SET_ALL_JOBS",
      payload: allJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving new allJobs", error);
  }
}

function* fetchFullJobsHistory(action) {
  try {
    const fullJobHistory = yield axios.get(`/api/job/fullJobsHistory`);
    console.log("this is fullJobsHistory.data", fullJobHistory.data);

    yield put({
      type: "SET_FULL_JOBS_HISTORY",
      payload: fullJobHistory.data,
    });
  } catch (error) {
    console.log("ERROR retrieving full Jobs Description", error);
  }
}

function* jobSaga() {
  yield takeLatest("CREATE_JOB_ID", createJobId);
  yield takeLatest("FETCH_JOBS", fetchJobs);
  yield takeLatest("FETCH_CLIENT_JOB", fetchClientJobs);
}

export default jobSaga;
