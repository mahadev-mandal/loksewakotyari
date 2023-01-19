import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function SingleSelect({ register, data, error, helperText }) {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{data.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                error={error}
                defaultValue=''
                label={data.label}
                {...register(data.id)}
            >
                {data.options.map((opt) => (
                    <MenuItem key={opt.label} value={opt.value}>{opt.label}</MenuItem>
                ))}
            </Select>
            <FormHelperText error={error}>
                {helperText}
            </FormHelperText>
        </FormControl>
    )
}
SingleSelect.propTypes = {
    data: PropTypes.object,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    register: PropTypes.object,
}
export default SingleSelect