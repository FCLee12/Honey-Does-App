import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  FormControl,
  FormGroup,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";

function BathtubShowerGroup() {
  const bathroom = useSelector((store) => store.clientBathroomReducer);
  const dispatch = useDispatch();

  // local state to store what items are checked
  const [list, updateList] = useState([]);

  const [regularChecked, setRegularChecked] = useState(false);
  const [regularType, setRegularType] = useState('');

  const [ceramicPorcelainChecked, setCeramicPorcelainChecked] = useState(false);
  const [ceramicPorcelainType, setCeramicPorcelainType] = useState('');

  const [walkInChecked, setWalkInChecked] = useState(false);
  const [walkInType, setWalkInType] = useState('');

  const [specialShowerChecked, setSpecialShowerChecked] = useState(false);
  const [specialShowerType, setSpecialShowerType] = useState('');

  const [jacuzziChecked, setJacuzziChecked] = useState(false);
  const [jacuzziType, setJacuzziType] = useState('');

  return (
    <>
      <h3>Bathtub/Shower Type</h3>
      <FormGroup>
        <FormControl>
          <FormLabel id="bathroom-tub-type">
            Does this bathroom have any of the following? <br />
            Check all that apply.
          </FormLabel>

          {/* BATHTUB SHOWER TYPE */}
          <FormControlLabel
            onChange={(e) => {
              setRegularChecked(e.target.checked)
              setRegularType('');
              dispatch({type: 'SET_REGULAR_TYPE', payload: ''})             
              }
            }
            control={<Checkbox />}
            name="Regular plastic tub/shower combo"
            label="Regular plastic tub/shower combo"
          // value={bathroom.bath_shower_type}
          />

          {regularChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="regular-threshold-type"
                name="regular-threshold-type"
                row  
              onChange={(event) =>  {
                setRegularType(event.target.getAttribute("value"));
                dispatch({type: 'SET_REGULAR_TYPE', payload: regularType}) 
              }
                
              }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <FormControlLabel
            onChange={(e) => {
              setCeramicPorcelainChecked(e.target.checked)
              setCeramicPorcelainType('');
              dispatch({type: 'SET_CERAMIC_PORCELAIN_TYPE', payload: ''})             
              }
            }
            control={<Checkbox />}
            name="Ceramic or porcelain tub"
            label="Ceramic or porcelain tub"
          />
          {ceramicPorcelainChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row               
                onChange={(event) =>  {
                  setCeramicPorcelainType(event.target.getAttribute("value"));
                  dispatch({type: 'SET_CERAMIC_PORCELAIN_TYPE', payload: ceramicPorcelainType}) 
                }
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}
          <FormControlLabel
            onChange={(e) => {
              setWalkInChecked(e.target.checked)
              setWalkInType('');
              dispatch({type: 'SET_WALK_IN_TYPE', payload: ''})             
              }
            }
            control={<Checkbox />}
            name="Walk-in shower"
            label="Walk-in shower"
          />
          {walkInChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                
                onChange={(event) => {
                  setWalkInType(event.target.getAttribute("value"));
                  dispatch({type: 'SET_WALK_IN_TYPE', payload: walkInType}) 
     
                }
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <FormControlLabel
            onChange={(e) => {
              setSpecialShowerChecked(e.target.checked);
              setSpecialShowerType('');
              dispatch({type: 'SET_SPECIALTY_TYPE', payload: ''})             
              }
            }
            control={<Checkbox />}
            name="Specialty walk-in shower"
            label="Specialty walk-in shower"
          />
          {specialShowerChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                
                onChange={(event) => {
                  setSpecialShowerType(event.target.getAttribute("value"));
                  dispatch({type: 'SET_SPECIALTY_TYPE', payload: specialShowerType})
                }
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <FormControlLabel
            onChange={(e) => {
              setJacuzziChecked(e.target.checked)
              setJacuzziType('');
              dispatch({type: 'SET_JACUZZI_TYPE', payload: ''})             
              }
            }
            control={<Checkbox />}
            name="Jacuzzi tub"
            label="Jacuzzi tub"
          />
          {jacuzziChecked && (
            <>
              <FormLabel>Enclosure Type:</FormLabel>
              <RadioGroup
                aria-labelledby="threshold-type"
                name="threshold-type"
                row
                onChange={(event) => {
                  setJacuzziType(event.target.getAttribute("value"));
                  dispatch({type: 'SET_JACUZZI_TYPE', payload: jacuzziType})
                }
                  
                }
              >
                <FormControlLabel
                  value="Curtain"
                  control={<Radio />}
                  label="Curtain"
                />
                <FormControlLabel
                  value="Glass Doors"
                  control={<Radio />}
                  label="Glass Doors"
                />
              </RadioGroup>
            </>
          )}

          <>
            {/* OTHER BATH/SHOWER */}
            <FormLabel>If any other types, please specify quantity of other bathrooms, and describe them.</FormLabel>
            <TextField
              size="small"
              value={bathroom.other_type}
              onChange={e => dispatch({type: 'SET_OTHER_TYPE', payload: e.target.value})}
            />
            
          </>
        </FormControl>
      </FormGroup>
    </>
  );
}

export default BathtubShowerGroup;