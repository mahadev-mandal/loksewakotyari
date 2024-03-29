import { gql, useMutation, useQuery } from '@apollo/client';
import { Backdrop, Button, CircularProgress, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRef } from 'react';
import SimpleTable from '../../../../components/Tables/SimpleTable'
import useToastHandler from '../../../../hooks/useToastHandler';
import DeleteIcon from '@mui/icons-material/Delete';

const tableHeading = ['First Name', 'Last Name', 'Mobile', 'email', 'Role', 'Delete', 'View'];
const dataHeading = ['firstName', 'lastName', 'mobile', 'email', 'role', 'delete', 'view'];

export const GET_USERS = gql`
  query getUsers($offset:Int,$limit:Int){
    getUsers(offset:$offset,limit:$limit){
      data{
        _id
        firstName
        lastName
        mobile
        email
        role
      }
      totalCount
    }
  }
`
const DELETE_USER = gql`
  mutation deleteUsers($ids:[String]){
    deleteUsers(ids:$ids){
      code
      success
      message
    }
  }

`

function Users() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const toastId = useRef(null);
  const customToast = useToastHandler(toastId);

  const { data, loading, error } = useQuery(GET_USERS, {
    variables: { offset: page, limit: rowsPerPage }
  });
  const [triggerDelete] = useMutation(DELETE_USER, {
    update(cache, { data: { deleteUsers } }) {
      customToast.dataToast(deleteUsers);
      if (deleteUsers.success) {
        customToast.dataToast(deleteUsers);
      }
    },
    onError: err => {
      customToast.errorToast(err)
    },
    refetchQueries: [
      { query: GET_USERS },
      'getUsers'
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
      setSelected([...new Set(selected.concat(data?.getUsers?.data.map((p) => p)))]);
    } else {
      setSelected(
        selected.filter((s) => !data?.getUsers?.data.map((p) => p._id).includes(s._id))
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
    customToast.loadingToast();
    triggerDelete({
      variables: {
        ids: selected.map((item) => item._id)
      }
    })
  }

  if (error) {
    console.log(JSON.stringify(error, null, 2))
    return <div style={{ color: 'red' }}>Error occured while fetching users</div>
  }
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
          <CircularProgress color="secondary" />
          <Typography variant='h6'>Wait loding...</Typography>
        </Stack>
      </Backdrop>
      <Stack direction="row" spacing={0.5} sx={{ mb: 0.2 }}>
        <Link href="/cms/dashboard/users/add">
          <Button variant="contained" color="warning">Add user</Button>
        </Link>
        <Button
          variant="contained"
          color="warning"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
          disabled={!selected.length > 0}
        >
          {selected.length > 0 && selected.length} Delete
        </Button>
      </Stack>
      <SimpleTable
        tableHeading={tableHeading}
        dataHeading={dataHeading}
        data={data?.getUsers?.data ?? []}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={data?.getUsers?.totalCount ?? 0}
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

export default Users