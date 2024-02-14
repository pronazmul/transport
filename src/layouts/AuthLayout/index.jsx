import { Navigate, Outlet } from 'react-router-dom'
import AppLogo from './../../assets/images/foods/food-icon-1.svg'
import { Routes } from './../../shared/constants/routes.constant'
import useLoggedIn from './../../shared/hooks/useLoggedIn'
// import GoogleLogo from './../../assets/images/logos/google.svg'
// import GithubLogo from './../../assets/images/logos/github.svg'

const AuthLayout = () => {
  const isLoggedIn = useLoggedIn()

  if (isLoggedIn) {
    return <Navigate to={Routes.home} replace />
  }

  return (
    <div className='min-h-100vh flex grow bg-slate-50 dark:bg-navy-900'>
      <main className='grid w-full grow grid-cols-1 place-items-center'>
        <div className='w-full max-w-[26rem] p-4 sm:px-5'>
          {/* Login Header */}
          <div className='text-center'>
            <img className='mx-auto h-16 w-full' src={AppLogo} alt='logo' />
            <div className='mt-4'>
              <h2 className='text-2xl font-semibold text-slate-600 dark:text-navy-100'>
                Welcome To Eatmap
              </h2>
              <p className='text-slate-400 dark:text-navy-300'>
                Please sign in to continue
              </p>
            </div>
          </div>

          <Outlet />

          {/* Don't Have Account */}
          {/* <div className='mt-4 text-center text-xs+'>
            <p className='line-clamp-1'>
              <span>Dont have Account?</span>

              <a
                className='text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent'
                href='pages-singup-1.html'
              >
                Create account
              </a>
            </p>
          </div> */}

          {/* Divider */}
          {/* <div className='my-7 flex items-center space-x-3'>
            <div className='h-px flex-1 bg-slate-200 dark:bg-navy-500'></div>
            <p>OR</p>
            <div className='h-px flex-1 bg-slate-200 dark:bg-navy-500'></div>
          </div> */}

          {/* SSO Login */}
          {/* <div className='flex space-x-4'>
            <button className='btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>
              <img className='h-5.5 w-5.5' src={GoogleLogo} alt='logo' />
              <span>Google</span>
            </button>
            <button className='btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>
              <img className='h-5.5 w-5.5' src={GithubLogo} alt='logo' />
              <span>Github</span>
            </button>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
