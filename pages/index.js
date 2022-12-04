import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from '../components/Header'
import { Typography } from '@mui/material';
import SimpleList from '../components/Lists';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false)
  const [tooltipWidth, setTooltipWidth] = React.useState(150)
  React.useEffect(() => {
    setTooltipWidth(document.getElementById('header')?.offsetWidth);
  }, [])
  console.log(tooltipWidth)
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Header
        onDrawerAction={() => setOpen(!open)}
        drawerOpen={open}
      />
      
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            mt: { xs: '108px', sm: '70px' }
          },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        {list()}
      </Drawer>
      <main>
        <section>
          <Typography variant="h4" component="h1" textAlign="center">
            Welcome To Loksewa ko Tyari
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat.
          </Typography>
        </section>
        <section>
          <Typography variant="h4" component="h1" textAlign="center">
            Why To Join Loksewa ko Tyari?
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit culpa molestiae quo explicabo earum mollitia voluptate quia esse corporis, maiores odio architecto beatae exercitationem excepturi illo rerum praesentium quam eligendi incidunt! Sit deserunt beatae dolorem ducimus hic eveniet, enim mollitia dolorum iure expedita numquam harum. Id asperiores, dicta ut atque ipsa ipsum voluptate. Odio.
          </Typography>
        </section>
        <section>
          <Typography variant="h4" component="h1" textAlign="center">
            Our Visions
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat.
          </Typography>
        </section>
        <section>
          <Typography variant="h4" component="h1" textAlign="center">
            Who is preferred to join Loksewa ko tyari?
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ab eos praesentium quo molestiae provident numquam perspiciatis ipsam incidunt quisquam deleniti natus placeat aspernatur, ipsum totam iste cupiditate repudiandae ipsa omnis quaerat mollitia excepturi tempore fuga. Reiciendis sed, earum praesentium commodi minus doloremque. Cupiditate praesentium nobis sint quam facilis et doloribus sapiente quod molestiae a consequuntur itaque, eius quasi distinctio aliquam! Dolorum asperiores molestias iusto blanditiis ad? Perferendis adipisci necessitatibus nihil labore expedita tempora doloribus cum rerum est molestiae dolores quaerat fuga dignissimos velit quam veniam modi, iusto laborum! Magnam ex debitis necessitatibus velit mollitia maxime? Tempora autem consequatur fugiat.
          </Typography>
        </section>
        <section>
          <Typography variant="h4" component="h1" textAlign="center">
            Frequently Asked Questions.
          </Typography>
          <SimpleList />
        </section>
      </main>
    </div>
  );
}
