import React, { useEffect, useState } from 'react';
import { Htag, Rating } from '../components';
import { Button } from '../components';
import { P } from '../components';
import { Tag } from '../components';
import { Layout, withLayout } from '../Layout/Layout';


function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('useEffect counter mount ' + counter);
    return function cleanup() {
      console.log('useEffect counter unmount ' + counter);
    }
  }, []);

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h2"> {counter} </Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>+1</Button>
      <Button appearance='ghost' arrow='down' onClick={() => setCounter(x => x - 1)}>-1</Button>
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
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);