import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import SimpleList from '../components/Lists';
import QuestionsList from '../components/Lists/QuestionsList';

export default function TemporaryDrawer() {
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
