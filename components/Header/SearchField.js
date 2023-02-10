import { Box, CircularProgress, ClickAwayListener, Divider, IconButton, InputAdornment, List, ListItemButton, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from 'next/router';
import { gql, useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import ClearIcon from '@mui/icons-material/Clear';

const GET_SEARCH_RESULTS = gql`
    query getSearchResults($searchText:String, $offset:Int, $limit:Int){
        getSearchResults(searchText:$searchText, offset:$offset, limit:$limit){
            data{
            _id
            question
            slug
            }
        }
    }
`;

function SearchField() {
	const router = useRouter()
	const [open, setOpen] = useState(true)
	const [searchText, setSearchText] = useState('');

	const [searchText1, { data, loading, refetch }] = useLazyQuery(GET_SEARCH_RESULTS, {
		variables: {
			offset: 0,
			limit: 10,
		}
	});

	useEffect(() => {
		searchText && refetch({
			searchText: '',

		})
	}, [router.asPath])

	const handleFormSubmit = (event) => {
		event.preventDefault();

		router.push(`/questions?search=${searchText ?? ''}`);
	}
	const handleSearchTextChange = (e) => {
		setSearchText(e.target.value ?? '')
		!data && searchText1({
			variables: {
				searchText: e.target.value ?? ''
			}
		})
		data && refetch({
			searchText: e.target.value ?? ''
		})
	}
	const handleClearClick = () => {
		setSearchText('');
		refetch({
			searchText: ''
		})
	}

	return (<ClickAwayListener onClickAway={() => setOpen(false)}>
		<Box sx={{ position: 'relative' }}>
			<form onSubmit={handleFormSubmit}>
				<Paper
					sx={{
						borderRadius: (data?.getSearchResults?.data?.length > 0 && open)
							? '7px 7px 0 0' : '20px 20px',
						display: "flex",
						alignItems: "center",
						height: 40,
						width: "100%",
					}}
				>
					<TextField
						fullWidth
						placeholder="What are you lookin for?"
						onFocus={() => setOpen(true)}
						value={searchText}
						autoComplete="off"
						sx={{
							"& fieldset": { border: 'none' },
						}}
						onChange={handleSearchTextChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Box sx={{ width: 25, display: 'flex', alignItems: "center" }}>
										{loading ? <CircularProgress color="secondary" size={15} /> : <SearchIcon />}
									</Box>
									<Divider orientation='vertical' sx={{ height: 28, m: 0.5 }} />
								</InputAdornment>
							),
							endAdornment: searchText && (
								<InputAdornment position="end">
									<IconButton sx={{ p: 0 }} size="small" onClick={handleClearClick}>
										<ClearIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Paper>
			</form>
			{(data?.getSearchResults?.data.length > 0 && open) && <Paper
				sx={{
					width: "100%",
					position: 'absolute',
					top: 40,
					left: 0,
					borderRadius: '0 0 7px 7px',
				}}
			>
				<List>
					{data?.getSearchResults?.data.map((item, index) => (
						<ListItemButton key={item.slug}>
							<Link href={`/questions/${item.slug}`}
								style={{
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis'
								}}
							>
								{index + 1}. {item.question}
							</Link>
						</ListItemButton>
					))}
				</List>
			</Paper>}
		</Box>
	</ClickAwayListener>
	)
}

export default SearchField
