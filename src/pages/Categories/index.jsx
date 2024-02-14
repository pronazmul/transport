import CategoryListFooter from './components/CategoryListFooter'
import CategoryListHeader from './components/CategoryListHeader'
import CategoryListTable from './components/CategoryListTable'

const Categories = () => {
  return (
    <div className='mt-5 card p-4 space-y-4  mx-4'>
      <CategoryListHeader />
      <CategoryListTable />
      <CategoryListFooter />
    </div>
  )
}

export default Categories
