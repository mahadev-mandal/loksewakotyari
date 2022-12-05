import { Button, ClickAwayListener, MenuItem, MenuList, Stack, Tooltip } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const arr = ['Electrical', 'Math', 'Science', 'English', 'Objective', 'GeneralKnowdledge', 'Electrical', 'Math', 'Science', 'English', 'Objective', 'GeneralKnowdledge',]

function AllCategories() {
    const [open, setOpen] = useState(false);
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div>
                <Tooltip
                    describeChild
                    title={<Menu onClick={() => setOpen(false)} />}
                    open={open}
                    // onClose={() => setOpen(false)}
                    // onMouseOver={()=>setOpen(true)}
                    componentsProps={{
                        tooltip: {
                            sx: {
                                background: '#fff',
                                color: '#222',
                                borderRadius: 0,
                                m: 0,
                                width: 200,
                                boxShadow: '0 0 10px gray',
                                borderLeft: '3px solid rgb(8, 179, 247)',
                                height: '100%',
                                boxSizing: 'border-box'
                            },
                        },
                    }}
                    PopperProps={{
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [0, -15],
                                },
                            },
                        ],
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={0.5}
                        height="100%"
                        width={200}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        <Button
                            sx={{
                                color: 'white',
                                pl: 3,
                                pr: 5,
                                background: 'rgb(8, 179, 247)',
                            }}
                            startIcon={<MenuIcon />}
                            onClick={() => setOpen(!open)}
                        >
                            AllCategories
                        </Button>
                    </Stack>
                </Tooltip>
            </div>
        </ClickAwayListener>
    )
}

export default AllCategories

const Menu = ({ onClick }) => {
    // const router = useRouter();
    return (
        <MenuList>
            {arr.map((category) => (
                <Link href="/" key={category}>
                    <MenuItem
                        sx={{
                            fontSize: 13,
                            textTransform: 'capitalize'
                        }}
                        onClick={onClick}
                    >
                        {category}
                    </MenuItem>
                </Link>
            ))}
        </MenuList>
    )
}
Menu.propTypes = {
    onClick:PropTypes.func,
}