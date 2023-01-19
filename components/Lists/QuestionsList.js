import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';

const GET_QUESTIONS = gql`
 query getQuestions($offset:Int,$limit:Int){
    getQuestions(offset:$offset, limit:$limit){
        data{
            _id
            question,
            slug
        }
        totalCount
    }
 }
`

function QuestionsList({ heading }) {

    const { data, loading, error} = useQuery(GET_QUESTIONS, {
        variables: {
            offset: 0,
            limit: 20
        }
    })
    
    if(loading){
        return 'loading...'
    }
    if(error){
        return 'Something went wrong'
    }
    return (
        <>
            <Typography variant="h5">{heading}</Typography>
            <Divider sx={{ mb: 1 }} />
            <List component={Paper} style={{ marginTop: 1 }}>
                {data.getQuestions.data?.map((item, index) => (
                    <ListItem key={index} alignItems="flex-start" spacing={0}>
                        <ListItemIcon style={{ minWidth: 30 }} >
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <Link href={`/questions/${item.slug}`}
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