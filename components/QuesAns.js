import { Button, ButtonGroup, Divider, Grid, Paper, Radio, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShareQuiestion from './SocialIcons/ShareQuiestion'
import CommentIcon from '@mui/icons-material/Comment';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PropTypes from 'prop-types'
import ReadTextQuill from './RichTextEditor/ReadTextQuill';

function QuesAns({ data }) {
    const [openDesc, setOpenDesc] = useState(false);

    return (
        <Paper elevation={3} sx={{ p: 2, my: 1 }}>
            {!data ? 'Please wait loading' : <>
                <Typography variant='h5' component="h1">{data.question}</Typography>
                <Stack rowGap={1} sx={{ ml: 2, mt: 1 }}>
                    {data.options.map((item) => (
                        <Stack key={item} direction="row" spacing={1} alignItems="center">
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
                <Grid item direction="row" justifyContent="space-between">
                    <ButtonGroup
                        size="small"
                        variant="outlined"
                        aria-label="Social and like comment"
                    >
                        <Button startIcon={<ThumbUpIcon />}>
                            56
                        </Button>
                        <Button startIcon={<ThumbDownIcon />}>
                            5
                        </Button>
                        <Button startIcon={<CommentIcon />}>
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