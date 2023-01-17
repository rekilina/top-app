import React from 'react';
import { Htag } from '../components';
import { Button } from '../components';
import { P } from '../components';
import { Tag } from '../components';


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h2">Text</Htag>
      <Button appearance='primary' arrow='right'>Text</Button>
      <Button appearance='ghost' arrow='down'>Text</Button>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque harum, ipsam nostrum quos odit necessitatibus similique distinctio assumenda explicabo qui?
      </P>
      <P size="xs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque harum, ipsam nostrum quos odit necessitatibus similique distinctio assumenda explicabo qui?
      </P>
      <P size="s">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque harum, ipsam nostrum quos odit necessitatibus similique distinctio assumenda explicabo qui?
      </P>
      <P size="m">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque harum, ipsam nostrum quos odit necessitatibus similique distinctio assumenda explicabo qui?
      </P>
      <Tag size="s" color="ghost">Text</Tag>
      <Tag size="m" color="primary">Text</Tag>
    </div>
  );
}