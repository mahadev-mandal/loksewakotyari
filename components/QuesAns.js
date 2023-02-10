import { Button, ButtonGroup, Divider, Grid, Paper, Radio, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShareQuiestion from './SocialIcons/ShareQuiestion'
import CommentIcon from '@mui/icons-material/Comment';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PropTypes from 'prop-types'
import ReadTextQuill from './RichTextEditor/ReadTextQuill';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';

const ADD_QUESTION_DETAIL = gql`
  mutation addQuestionDetails(
    $question_id:String!,
    $user_id:String!,
    $thumbType:String, 
    $comment:String
  ){
    addQuestionDetails(
      question_id:$question_id, 
      user_id:$user_id,
      thumbType:$thumbType,
      comment:$comment
    ){
      code
      success
      message
    }
 }
`

function QuesAns({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const [openDesc, setOpenDesc] = useState(false);

  const [addDetails] = useMutation(ADD_QUESTION_DETAIL)
  const handleUpdate = (thumbType, comment) => {
    addDetails({
      variables: {
        question_id: '63c92d9078ea7ccaaa22e0c6',
        user_id: '63c92d9078ea7ccaaa22e0c7',
        thumbType,
        comment
      }
    });
  }
  useEffect(() => {
    setOpenDesc(false);
  }, [slug])
  return (
    <Paper elevation={3} sx={{ p: 2, my: 1 }}>
      {!data ? 'Please wait loading' : <>
        <Typography variant='h6' component="h1">Q. {data.question}</Typography>
        <Stack rowGap={1} sx={{ ml: 2, mt: 1 }}>
          {data.options.map((item, index) => (
            <Stack key={item + index} direction="row" spacing={1} alignItems="center">
              <Radio color="success" checked={item == data.correctOption} />
              <Typography variant="">{item}</Typography>
            </Stack>
          ))}
        </Stack>
        <Button variant="outlined" onClick={() => setOpenDesc(!openDesc)} sx={{ ml: 2, my: 1 }}>
          {openDesc ? 'Hide Details' : 'Show Details'}
        </Button>
        {openDesc ? <Paper elevation={4}>
          <ReadTextQuill value={data.description} />
        </Paper> : null
        }
      </>}
      <Divider sx={{ my: 2 }} />
      <Grid container justifyContent="space-between" rowGap={2}>
        <Grid item>
          <ButtonGroup
            size="small"
            variant="outlined"
            aria-label="Social and like comment"
          >
            <Button
              startIcon={<ThumbUpIcon />}
              onClick={() => handleUpdate('up')}
            >
              56
            </Button>
            <Button
              startIcon={<ThumbDownIcon />}
              onClick={() => handleUpdate('down')}
            >
              5
            </Button>
            <Button
              startIcon={<CommentIcon />}
              onClick={() => handleUpdate('', 'comment here')}
            >
              5
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ShareQuiestion />
        </Grid>
      </Grid>
    </Paper>
  )
}

QuesAns.propTypes = {
  data: PropTypes.object
}
export default QuesAns