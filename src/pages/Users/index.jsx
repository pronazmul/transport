import UserListHeader from './components/UserListHeader'
import UserListFooter from './components/UserListFooter'
import UserListTable from './components/UserListTable'

const Users = () => {
  return (
    <div className='mt-5 card p-4 space-y-4 mx-4'>
      <UserListHeader />
      <UserListTable />
      <UserListFooter />
    </div>
  )
}

export default Users
