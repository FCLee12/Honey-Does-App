const clientWipeDustReducer = (state =
    {
        order: 0,
        form_type: 'wipe-dust',
        wipe_clean_glass: true,
        glass_door: null,
        glass_door_number: 0,

        inside_glass_door: null,
        outside_glass_door: null,
        glass_door_location: '',
        other_mirrors: null,
        other_mirrors_number: 0,

        other_mirrors_location: '',
        dust: true,
        ceiling_lines_wall_lines_baseboards: null,
        ceiling_fixtures: null,
        swiffer_feather: '',

        window_blinds: null,
        window_ledges: null,
        window_sills: null,
        picture_frames_wall_decor: null,
        tops_decor_items: null,

        pick_up_get_under: null,
        electronics: null,
        dust_other: null,
        dust_other_instructions: '',
        dust_bed_living_furniture: null,

        bed_living_furniture_duster: '',
        orange_glo_applicable: null
    }, action) => {
    switch(action.type) {
        case 'SET_JOB_ID':
            return {...state, job_id: action.payload};
        case 'SET_WIPE_CLEAN_GLASS':
            return {...state, wipe_clean_glass: action.payload};
        case 'SET_GLASS_DOOR':
            return {...state, glass_door: action.payload};
        case 'SET_GLASS_DOOR_NUMBER':
            return {...state, glass_door_number: action.payload};
        case 'SET_INSIDE_GLASS_DOOR':
            return {...state, inside_glass_door: action.payload};
        case 'SET_OUTSIDE_GLASS_DOOR':
            return {...state, outside_glass_door: action.payload};
        case 'SET_GLASS_DOOR_LOCATION':
            return {...state, glass_door_location: action.payload};
        case 'SET_OTHER_MIRRORS':
            return {...state, other_mirrors: action.payload};
        case 'SET_OTHER_MIRRORS_NUMBER':
            return {...state, other_mirrors_number: action.payload};
        case 'SET_OTHER_MIRRORS_LOCATION':
            return {...state, other_mirrors_location: action.payload};
        case 'SET_DUST':
            return {...state, dust: action.payload};
        case 'SET_CEILING_LINES_WALL_LINES_BASEBOARDS':
            return {...state, ceiling_lines_wall_lines_baseboards: action.payload};
        case 'SET_CEILING_FIXTURES':
            return {...state, ceiling_fixtures: action.payload};
        case 'SET_SWIFFER_FEATHER':
            return {...state, swiffer_feather: action.payload};
        case 'SET_WINDOW_BLINDS':
            return {...state, window_blinds: action.payload};
        case 'SET_WINDOW_LEDGES':
            return {...state, window_ledges: action.payload};
        case 'SET_WINDOW_SILLS':
            return {...state, window_sills: action.payload};
        case 'SET_PICTURE_FRAMES_WALL_DECOR':
            return {...state, picture_frames_wall_decor: action.payload};
        case 'SET_TOPS_DECOR_ITEMS':
            return {...state, tops_decor_items: action.payload};
        case 'SET_PICK_UP_GET_UNDER':
            return {...state, pick_up_get_under: action.payload};
        case 'SET_ELECTRONICS':
            return {...state, electronics: action.payload};
        case 'SET_DUST_OTHER':
            return {...state, dust_other: action.payload};
        case 'SET_DUST_OTHER_INSTRUCTIONS':
            return {...state, dust_other_instructions: action.payload};
        case 'SET_DUST_BED_LIVING_FURNITURE':
            return {...state, dust_bed_living_furniture: action.payload};
        case 'SET_BED_LIVING_FURNITURE_DUSTER':
            return {...state, bed_living_furniture_duster: action.payload};
        case 'SET_ORANGE_GLO_APPLICABLE':
            return {...state, orange_glo_applicable: action.payload}; 
            case 'CLEAR_FORM':
                return {
                    order: 0,
                    form_type: 'wipe-dust',
                    wipe_clean_glass: true,
                    glass_door: null,
                    glass_door_number: 0,
            
                    inside_glass_door: null,
                    outside_glass_door: null,
                    glass_door_location: '',
                    other_mirrors: null,
                    other_mirrors_number: 0,
            
                    other_mirrors_location: '',
                    dust: true,
                    ceiling_lines_wall_lines_baseboards: null,
                    ceiling_fixtures: null,
                    swiffer_feather: '',
            
                    window_blinds: null,
                    window_ledges: null,
                    window_sills: null,
                    picture_frames_wall_decor: null,
                    tops_decor_items: null,
            
                    pick_up_get_under: null,
                    electronics: null,
                    dust_other: null,
                    dust_other_instructions: '',
                    dust_bed_living_furniture: null,
            
                    bed_living_furniture_duster: '',
                    orange_glo_applicable: null  
                }  
        default:
            return state;
    }
};

export default clientWipeDustReducer;