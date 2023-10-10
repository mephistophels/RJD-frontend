import {Container, Group, Anchor, Title} from '@mantine/core';
import classes from './Footer.module.css';
import { ReactComponent as Mouse } from '../../res/icons/mouse.svg';

const links = [
  { link: '#', label: 'Contacts' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <Mouse/><Title order={2}>Freelance</Title>
        </Group>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}