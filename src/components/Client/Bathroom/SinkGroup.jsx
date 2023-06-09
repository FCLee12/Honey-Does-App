import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

function SinkGroup() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Sinks</h3>
      <FormGroup>
        <FormLabel>Clean sinks/counters?</FormLabel>
        <RadioGroup
          aria-labelledby="clean-sink"
          name="clean-sink"
          row
          value={bathroom.clean_sink_counter}
          onChange={e =>
            dispatch({
              type: "SET_CLEAN_SINK_COUNTER",
              payload: (e.target.value === 'true')
            })
          }
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel> Do you have granite counter tops?</FormLabel>
        <RadioGroup
          aria-labelledby="granite-tops"
          name="granite-tops"
          row
          value={bathroom.granite_counter_tops}
          onChange={e =>
            dispatch({
              type: "SET_GRANITE_COUNTER_TOPS",
              payload: (e.target.value === 'true')
            })
          }
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel>Sink type?</FormLabel>
        <RadioGroup
          aria-labelledby="sink-type"
          name="sink-type"
          row
          value={bathroom.sink_type}
          onChange={e =>
            dispatch({
              type: "SET_SINK_TYPE",
              payload: e.target.value,
            })
          }
        >
          <FormControlLabel
            value="Pedestal"
            control={<Radio />}
            label="Pedistal"
          />
          <FormControlLabel
            value="Cabinets Underneath"
            control={<Radio />}
            label="Cabinets Underneath"
          />
        </RadioGroup>
        {/* if Cabinets Underneath, display clean fronts options */}
        {bathroom.sink_type === "Cabinets Underneath" && (
          <>
            <FormLabel>Do you want the cabinet fronts cleaned?</FormLabel>
            <RadioGroup
              aria-labelledby="cabinet-clean"
              name="cabinet-clean"
              row
              value={bathroom.clean_front_cabinets}
              onChange={e =>
                dispatch({
                  type: "SET_CLEAN_FRONT_CABINETS",
                  payload: (e.target.value === 'true'),
                })
              }
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </>
        )}

        {/* if yes to cabinet front clean, display clean type options */}
        {bathroom.clean_front_cabinets === true && (
          <>
            <FormLabel>How do you want cabinet fronts cleaned?</FormLabel>
            <RadioGroup
              aria-labelledby="cabinet-clean-type"
              name="cabinet-clean-type"
              row
              value={bathroom.cabinet_spot_full_clean}
              onChange={e =>
                dispatch({
                  type: "SET_CABINET_SPOT_FULL_CLEAN",
                  payload: e.target.value,
                })
              }
            >
              <FormControlLabel
                value="Spot Clean"
                control={<Radio />}
                label="Spot Clean"
              />
              <FormControlLabel
                value="Full Wipe Down"
                control={<Radio />}
                label="Full Wipe Down"
              />
            </RadioGroup>
          </>
        )}
        {/* if yes to cabinet front clean, ask wood cabinets */}
        {bathroom.clean_front_cabinets === true && (
          <>
            <FormLabel>
              If wood cabinets, do you want us to use Orange Glo Polish?
            </FormLabel>
            <RadioGroup
              aria-labelledby="cabinet-orange-glo"
              name="cabinet-orange-glo"
              row
              value={bathroom.cabinet_orange_glo}
              onChange={e =>
                dispatch({
                  type: "SET_CABINET_ORANGE_GLO",
                  payload: (e.target.value === 'true')
                })
              }
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </>
        )}
      </FormGroup>
    </>
  );
}

export default SinkGroup;
