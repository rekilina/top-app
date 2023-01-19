import React, { useEffect, useState } from 'react';
import { Htag, Rating } from '../components';
import { Button } from '../components';
import { P } from '../components';
import { Tag } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';



function Home({ menu }: HomeProps): JSX.Element {

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
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);
// process.env.NEXT_PUBLIC_DOMAIN + 
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory
    });
  const { data: page } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  console.log(menu);
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}