import { gql, useQuery } from '@apollo/client';
import { List, ListItemButton } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import getHighlightedText from '../../context/getHighlightedText';

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

function Questions() {
  const router = useRouter();
  const { search } = router.query;
  const { data, loading } = useQuery(GET_SEARCH_RESULTS, {
    variables: {
      searchText: search,
      offset:0,
      limit:20,
    }
  })
  if (loading) {
    return 'loading...'
  }
  
  return (
    <>
      <List>
        {data.getSearchResults?.data.map((item, index) => (
          <ListItemButton key={item.slug}>
            <Link href={`/questions/${item.slug}`}>{index + 1}. {getHighlightedText(item.question, search)}</Link>
          </ListItemButton>
        ))}
      </List>
    </>
  )
}

export default Questions