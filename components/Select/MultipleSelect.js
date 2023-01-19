import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select
} from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function MultipleSelect({ label, menuItems,field }) {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="level-select-label">{label}</InputLabel>
                <Select
                    {...field}
                    labelId="level-select-label"
                    id="level-select"
                    multiple
                    defaultValue={[]}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {menuItems.map((item) => (
                        <MenuItem key={item.title} value={item.value}>
                            <Checkbox checked={field.value.indexOf(item.value) > -1} />
                            <ListItemText primary={item.title} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

MultipleSelect.propTypes = {
    label: PropTypes.string,
    value: PropTypes.array,
    field: PropTypes.object,
    menuItems: PropTypes.array.isRequired
}
export default React.memo(MultipleSelect);