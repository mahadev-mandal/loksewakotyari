import {
    Button,
    ClickAwayListener,
    Stack,
    Tooltip,
} from "@mui/material"
import { useEffect, useState } from "react"
import BadgeAvatars from '../Drawer/BadgeAvatar'

const ToolTipComp = () => {
    return (
        <Stack spacing={0.5}>
            <Button variant="text" sx={{ height: 20, fontSize: 12, }}>
                My Profile
            </Button>
            <Button variant="text" sx={{ height: 20, fontSize: 12, }}>
                Logout
            </Button>
        </Stack>
    )
}



function LogoutTooltip() {
    const [open, setOpen] = useState(false);
    const [tooltipWidth, setTooltipWidth] = useState(150)
    useEffect(() => {
        setTooltipWidth(document.getElementById('badged-avatar')?.offsetWidth);
    }, [])
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Tooltip
                open={open}
                describeChild
                title={<ToolTipComp />}
                componentsProps={{
                    tooltip: {
                        sx: {
                            background: '#fff',
                            color: '#222',
                            borderRadius: 0,
                            mt: 0,
                            minWidth: tooltipWidth,
                            boxShadow: '0 0 10px gray',
                            borderLeft: '3px solid #ffa500',
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
                <Button
                id="badged-avatar"
                    onClick={() => setOpen(!open)}
                    variant="contained"
                    color="warning"
                    sx={{ px: 1 }}
                >
                    <BadgeAvatars />
                </Button>
            </Tooltip>
        </ClickAwayListener>
    )
}

export default LogoutTooltip