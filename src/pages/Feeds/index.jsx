import { useSelector } from 'react-redux'
import FeedListCard from './components/FeedListCard'
import FeedListHeader from './components/FeedListHeader'
import FeedListFooter from './components/FeedListFooter'

// Custom Modules
import { useGetFeedsQuery } from './../../store/feeds/feedApi'
import Loader from './../../shared/components/Loader'
import Alert from './../../shared/components/Alert'
import { useEffect } from 'react'

const Feeds = () => {
  const {
    feeds,
    query,
    queryOptions: { page, search },
  } = useSelector((state) => state.feeds)

  const { isError, isLoading, error, data, refetch } = useGetFeedsQuery(query)

  let content

  if (isLoading) {
    content = <Loader />
  }

  if (isError || error) {
    content = <Alert message={error?.message} />
  }

  if (data && feeds?.length) {
    content = feeds.map((f) => <FeedListCard key={f._id} feed={f} />)
  }

  useEffect(() => {
    refetch()
  }, [page, search, refetch])

  return (
    <div className='mt-5 p-4 space-y-4 mx-4'>
      <FeedListHeader />
      <div
        className={'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6'}
      >
        {content}
      </div>
      <FeedListFooter />
    </div>
  )
}

export default Feeds
