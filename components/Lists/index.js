import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const a = [
    "How to Join Lok sewa ko tyari?",
    "How can I pay for Live and Practice MCQ Exams? ",
    "Is MCQ Exam Free or Paid ?",
    "What is a Practice or Mock MCQ Exam ?",
    "For which exams we provide online Exams ?"
];

function SimpleList() {
    return (
        <List style={{ marginTop: 1 }} >
            {a.map((item) => (
                <ListItem key={item} alignItems="flex-start" spacing={0}>
                    <ListItemIcon style={{ minWidth: 30 }} >
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <Link href="/">
                        <ListItemText
                            sx={{
                                '&:hover': {
                                    color: 'rgb(0,116,214)',
                                    textDecoration: 'underline'
                                }
                            }}
                            primary={item} />
                    </Link>
                </ListItem>
            ))
            }
        </List>
    )
}

export default SimpleList