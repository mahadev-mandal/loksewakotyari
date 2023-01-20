import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import SimpleList from '../components/Lists';
import QuestionsList from '../components/Lists/QuestionsList';
import { gql, useLazyQuery } from '@apollo/client';
import { useAuthContext } from '../context/authContext';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
    helloDev @client
  }
`;

const GET_LOCATIONS = gql`
    query GetQuestions {
      getQuestions {
        author
        keywords
        question
        cartItems @client{
          cartItems
        }
        
      }
  }
  `;

export default function Home() {
  const { user } = useAuthContext();
  console.log(user)
  // const { client, loading, error, data } = useQuery(GET_LOCATIONS);
  const [addQues, { loading, error }] = useLazyQuery(GET_LOCATIONS, {
    variables: {
      question: "who are you?",
      options: ['a', 'b'],
      questionId: 20,
      slug: 'abcddd',
    }
  })
  const addQuess = () => {
    addQues()
  }

  if (loading) {
    return 'saving...'
  }
  if (error) {
    console.log(JSON.stringify(error, null, 2))
    return <div className="">Error occured <br /></div>
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} >
          <main>
            <section>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h4" component="h1" textAlign="center">
                  Welcome To Loksewa ko Tyari
                </Typography>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat.
                </Typography>
              </Paper>
            </section>
            <section>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h4" component="h1" textAlign="center">
                  Why To Join Loksewa ko Tyari?
                  <button onClick={addQuess}>Save ques</button>
                </Typography>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit culpa molestiae quo explicabo earum mollitia voluptate quia esse corporis, maiores odio architecto beatae exercitationem excepturi illo rerum praesentium quam eligendi incidunt! Sit deserunt beatae dolorem ducimus hic eveniet, enim mollitia dolorum iure expedita numquam harum. Id asperiores, dicta ut atque ipsa ipsum voluptate. Odio.
                </Typography>
              </Paper>
            </section>
            <section>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h4" component="h1" textAlign="center">
                  Our Visions
                </Typography>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat.
                </Typography>
              </Paper>
            </section>
            <section>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h4" component="h1" textAlign="center">
                  Who is preferred to join Loksewa ko tyari?
                </Typography>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat.
                </Typography>
              </Paper>
            </section>
            <section>
              <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
                Frequently Asked Questions.
              </Typography>
              <SimpleList />
            </section>
          </main>
        </Grid>
        <Grid item xs={12} sm={4}>
          <QuestionsList heading="Popular questions" />
        </Grid>
      </Grid>

    </div>
  );
}
