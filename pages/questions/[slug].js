import { gql, useQuery } from '@apollo/client';
import { Box, Grid, } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'
import QuestionsList from '../../components/Lists/QuestionsList';
import QuesAns from '../../components/QuesAns';

const GET_QUESTION = gql`
 query getQuestion($slug:String){
	getQuestion(slug:$slug){
		_id
		question
		options
		correctOption
		description
	}
 }
`

function Question() {
	const router = useRouter();
	const { slug } = router.query;
	const { data, loading, error } = useQuery(GET_QUESTION, {
		variables: {
			slug
		}
	});

	if (loading) {
		return 'loading...'
	}
	if (error) {
		return 'Something went wrong'
	}
	return (
		<Grid container spacing={2} rowGap={2}>
			<Grid item xs={12} md={8}>
				<QuesAns data={data.getQuestion} />
				<Box sx={{ mt: 3 }}>
					<QuestionsList heading="Recently Added" />
				</Box>
			</Grid>
			<Grid item xs={12} md={4}>
				<QuestionsList heading="Popular questions" />
			</Grid>
			<Grid item xs={12} md={8}>

			</Grid>
		</Grid>
	)
}

export default Question