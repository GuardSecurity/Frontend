import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById } from '../../utils/admin';
import moment from 'moment';

function News() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPostById(id)
        .then((res) => {
          setPost(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>...loading...</p>;
  }
  console.log('hhehehehe post', post);
  

  return (
    <>
      <button
        onClick={() => navigate('/user-about')}
        className='bg-gray-600 rounded-lg p-2 text-white font-bold text-xs fixed bottom-7 right-7'
      >
        Back to home
      </button>
      <div className='flex flex-col mt-10'>
        <h2 className='flex justify-center text-2xl font-bold'>{post[0].title}</h2>

        <div className='flex flex-col items-center'>
          <div className='w-[70%] flex flex-col gap-3 mt-8' dangerouslySetInnerHTML={{ __html: post[0].content }} />
          <span className='flex text-xs mt-8'>
            <span>CREATE AT</span>
            <span className='font-medium'>: {moment(post[0].publish_date).format('DD/MM/YYYY')}</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default News;
