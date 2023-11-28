import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMoreHorizontal } from '../../constant/icons'
import videos from '../../constant/videos'
import CommentField from '../comments/CommentField'
import DotsOptions from './DotsOptions'

export default function VideosComponent({ videoProp, singlePage }) {
  const { id, description, video, views, time, userName } = videoProp

  const [showMore, setShowMore] = useState(false)

  const handleMore = () => {
    setShowMore(() => !showMore)
  }

  // const [showPopUp, setShowPopUp] = useState(false);
  // const handlePopup = () => {
  //   setShowPopUp(() => !showPopUp);
  // };

  const videoRef = useRef(null)
  const existingUser = videos.find((u) => u.userName === userName)

  return (
    <div className='video'>
      {video && (
        <>
          <div className=''>
            <div className='flex items-center justify-between'>
              {/* name and username */}
              <Link
                to={`/users/${userName}`}
                className='flex items-start -mt-[2px] mb-1 leading-3 flex-col'
              >
                <img
                  src={existingUser.img}
                  alt='n'
                  className='h-12 w-12 rounded-full'
                />
                <div>
                  {/* <h2 className="font-bold text-lg hover:underline"></h2> */}
                  <p className='text-gray-500 text-sm mt-[-4px]'>
                    {userName}
                    <span> · </span>
                    {time}
                  </p>
                </div>
              </Link>

              <div className='flex mt-[-10px] items-center gap-2 group relative cursor-pointer'>
                <div
                  className='ml-auto p-2 hover:bg-gray-100 grid place-content-center rounded-full'
                  onClick={handleMore}
                >
                  <FiMoreHorizontal fontSize={23} />
                </div>
                <DotsOptions showMore={showMore} existingUser={existingUser} />
              </div>
            </div>

            <Link to={`/watch/${id}`}>
              <video
                controls
                ref={videoRef}
                height='100%'
                width='100%'
                className='rounded-2xl'
                src={video}
              >
                <track kind='captions' />
              </video>
              <div className='flex items-start video-section'>
                <h3 className='font-bold text-xl basis-4/5'>{description}</h3>
                <span className='text-black text-sm mr-1 mt-1'>
                  {views} Views
                </span>
              </div>
            </Link>
          </div>

          {/* comment input box */}
          {singlePage && <CommentField />}
        </>
      )}
    </div>
  )
}
