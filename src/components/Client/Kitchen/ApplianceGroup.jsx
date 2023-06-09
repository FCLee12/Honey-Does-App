import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  FormControl, FormGroup, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

function ApplianceGroup() {

    
    const kitchen = useSelector(store => store.clientKitchen)
    const dispatch = useDispatch();

    return (
        <>
            <h3>Appliances</h3>
            {/* APPLIANCES */}
            <FormGroup>
                <FormControl>

                    <FormLabel>Do you want us to wipe the fronts of appliances?</FormLabel>
                    <RadioGroup aria-labelledby="wipe_appliances" name="wipe_appliances"
                        row value={kitchen.wipe_appliances}
                        onChange={e => {
                            dispatch({ type: 'SET_WIPE_APPLIANCES', payload: (e.target.value === 'true') })
                        }}>
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>

                    {/* if cleanAppliances is set to yes, display specific appliances to be cleaned */}
                    {kitchen.wipe_appliances === true &&
                        <>
                            {/* CLEAN FRIDGE */}
                            <h4>Fridge</h4>
                            <FormLabel>Wipe Fridge?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_fridge" name="wipe_fridge"
                                row value={kitchen.wipe_fridge}
                                onChange={e => dispatch({ type: 'SET_WIPE_FRIDGE', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                    {(kitchen.wipe_fridge === true && kitchen.wipe_appliances === true) &&
                        <>
                            {/* CHECK IF FRIDGE IS STAINLESS STEEL */}
                            <FormLabel>Is the fridge stainless steel?</FormLabel>
                            <RadioGroup aria-labelledby="fridge_ss" name="fridge_ss"
                                row value={kitchen.fridge_stainless_steel}
                                onChange={e => dispatch({ type: 'SET_FRIDGE_SS', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }

                    {kitchen.wipe_appliances === true &&
                        <>
                            {/* CLEAN DISHWASHER */}
                            <h4>Dishwasher</h4>
                            <FormLabel>Wipe dishwasher?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_dishwasher" name="wipe_dishwasher"
                                row value={kitchen.wipe_dishwasher}
                                onChange={e => dispatch({ type: 'SET_WIPE_DISHWASHER', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                    {(kitchen.wipe_dishwasher === true && kitchen.wipe_appliances === true) &&
                        <>
                            {/* CHECK IF DISHWASHER IS STAINLESS STEEL */}
                            <FormLabel>Is the dishwasher stainless steel?</FormLabel>
                            <RadioGroup aria-labelledby="dishwasher_ss" name="dishwasher_ss"
                                row value={kitchen.dishwasher_stainless_steel}
                                onChange={e => dispatch({ type: 'SET_DISHWASHER_SS', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }
                    {kitchen.wipe_appliances === true &&
                        <>
                            {/* CLEAN DEEP FREEZE */}
                            <h4>Deep Freeze</h4>
                            <FormLabel>Wipe deep freezer?</FormLabel>
                            <RadioGroup aria-labelledby="wipe_deep_freeze" name="wipe_deep_freeze"
                                row value={kitchen.wipe_deep_freezer}
                                onChange={e => dispatch({ type: 'SET_WIPE_DEEP_FREEZER', payload: (e.target.value === 'true') })}>
                                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </>
                    }


                </FormControl>
            </FormGroup>
        </>
    )
}

export default ApplianceGroup;