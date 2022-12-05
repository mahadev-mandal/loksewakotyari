import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import fetchData from '../../controllers/clientControllers/fetchData';

function QuestionsList({ heading }) {
    const {
        data,
        error,
    } = useSWR('/api/dashboard/questions', fetchData);
    if (error) {
        return <div>Error occured while fetching popular questions</div>
    } else if (!data) {
        return <div>Please wait loading...</div>
    }
    return (
        <>
            <Typography variant="h5">{heading}</Typography>
            <Divider sx={{ mb: 1 }} />
            <List component={Paper} style={{ marginTop: 1 }} >
                {data.data.map((item, index) => (
                    <ListItem key={index} alignItems="flex-start" spacing={0}>
                        <ListItemIcon style={{ minWidth: 30 }} >
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <Link href={`/questions/${item._id}`}
                        >
                            <ListItemText primary={item.question} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

QuestionsList.propTypes = {
    heading: PropTypes.string,
    data: PropTypes.array
}
export default QuestionsList