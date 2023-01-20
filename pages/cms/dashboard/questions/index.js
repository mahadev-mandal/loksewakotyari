import { gql, useMutation, useQuery } from '@apollo/client';
import {
	Backdrop,
	Button,
	CircularProgress,
	Stack,
	Typography
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import SimpleTable from '../../../../components/Tables/SimpleTable';
import DeleteIcon from '@mui/icons-material/Delete';
import useToastHandler from '../../../../hooks/useToastHandler';
import { useRef } from 'react';

const tableHeading = ['Question', 'correct option', 'Date', 'Edit', 'Delete', 'View'];
const dataHeading = ['question', 'correctOption', 'date', 'edit', 'delete'];

export const GET_QUESTIONS = gql`
	query getQuestions($offset: Int, $limit: Int){
		getQuestions(offset: $offset, limit: $limit){
				data{
					_id
					question
					correctOption
					entryBy
				}
				totalCount
		}
	}
`
const DELETE_QUESTIONS = gql`
	mutation deleteQuestions($ids:[String]){
		deleteQuestions(ids:$ids){
			code
			success
			message
		}
	}
`

function Questions() {
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(20);
	const toastId = useRef(null);
	const customToast = useToastHandler(toastId)

	const { data, loading, error } = useQuery(GET_QUESTIONS, {
		variables: {
			offset: page,
			limit: rowsPerPage
		}
	})
	const [triggerDelete, { loading: loading1 }] = useMutation(DELETE_QUESTIONS, {
		update(cache, { data: { deleteQuestions } }) {
			customToast.dataToast(deleteQuestions);
			if (deleteQuestions.success) {
				customToast.dataToast(deleteQuestions);
			}
		},
		onError: err => {
			customToast.errorToast(err)
		},
		refetchQueries: [
			{ query: GET_QUESTIONS },
			'getQuestions'
		],
	})

	const handleSelectChange = (event, row) => {
		if (event.target.checked) {
			setSelected([...selected, row]);
		} else {
			setSelected(selected.filter((p) => p._id !== row._id));
		}
	}
	const handleAllSelectChange = (event) => {
		if (event.target.checked) {
			setSelected([...new Set(selected.concat(data?.getQuestions?.data.map((p) => p)))]);
		} else {
			setSelected(
				selected.filter((s) => !data?.getQuestions?.data.map((p) => p._id).includes(s._id))
			);
		}
	}

	const handleChangePage = async (event, newPage) => {
		setPage(parseInt(newPage));
	}
	const handleChangeRowsPerPage = async (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(parseInt(0))
	}
	const handleDelete = () => {
		customToast.loadingToast()
		const ids = selected.map((item) => item._id)
		triggerDelete({
			variables: {
				ids
			}
		})
	}

	if (error) {
		console.log(error)
		return <div style={{ color: 'red' }}>Error occured while fetching questions</div>
	}
	return (
		<>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading || loading1}
			>
				<Stack alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
					<CircularProgress color="secondary" />
					<Typography variant='h6'>Wait loding...</Typography>
				</Stack>
			</Backdrop>
			<Stack direction="row" spacing={0.5} sx={{ mb: 0.2 }}>
				<Link href="/cms/dashboard/questions/add">
					<Button variant="contained" color="warning">Add Question</Button>
				</Link>
				<Button
					variant="contained"
					color="error"
					startIcon={<DeleteIcon />}
					disabled={selected.length <= 0}
					onClick={handleDelete}
				>
					Delete {selected.length > 0 && selected.length}
				</Button>
			</Stack>
			<SimpleTable
				tableHeading={tableHeading}
				dataHeading={dataHeading}
				data={data?.getQuestions?.data ?? []}
				page={page}
				rowsPerPage={rowsPerPage}
				totalCount={data?.getQuestions?.totalCount ?? 0}
				handleChangePage={handleChangePage}
				handleChangeRowsPerPage={handleChangeRowsPerPage}
				// ExtraCells={ }
				type="selectable"
				selected={selected}
				onSelectChange={handleSelectChange}
				onAllSelectChange={handleAllSelectChange}
			/>
		</>
	)
}

export default Questions