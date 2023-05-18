const clientOtherRoomReducer = (state = {
    job_id: '',
    clean_other_room: 'no',
    room_type: '',
    floor_type: '',
    wipe_surfaces: 'yes',
    clean_floor: 'yes',
    sq_ft: ''
}, action) => {
    switch (action.type) {
        case 'JOB_ID':
            return { ...state, job_id: action.payload };
        case 'SET_CLEAN_OTHER_ROOM':
            return { ...state, clean_other_room: action.payload }
        case 'SET_ROOM_TYPE':
            return { ...state, room_type: action.payload };
        case 'SET_SQ_FT':
            return { ...state, sq_ft: action.payload };
        case 'SET_WIPE_SURFACES':
            return { ...state, wipe_surfaces: action.payload };
        case 'SET_CLEAN_FLOOR':
            return { ...state, clean_floor: action.payload };
        default:
            return state;
    }
};

export default clientOtherRoomReducer;