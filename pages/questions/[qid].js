import { Box, Grid, } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import QuestionsList from '../../components/Lists/QuestionsList';
import QuesAns from '../../components/QuesAns';
import fetchData from '../../controllers/clientControllers/fetchData';

const questions = [{ question: "Who became the first Cabinet Minister of Industry and Supply of independent India?" }, { question: "Who became the first Cabinet Minister of Industry and Supply of independent India?" },];

function Question() {
    const router = useRouter();
    const { qid } = router.query;
    const {
        data,
        error,
    } = useSWR(`/api/dashboard/questions/${qid}`, fetchData);
    if (error) {
        return <div>Error occured while fetching popular questions</div>
    }
    return (
        <Grid container spacing={2} rowGap={2}>
            <Grid item xs={12} md={8}>
                <QuesAns data={data} />
                <Box sx={{ mt: 3 }}>
                    <QuestionsList heading="Recently Added" data={questions} />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <QuestionsList heading="Popular questions" data={questions} />
            </Grid>
            <Grid item sx={12} md={8}>

            </Grid>
        </Grid>
    )
}

export default Question