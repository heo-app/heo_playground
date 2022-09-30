import './App.css';
import logo from './images/heo-hands.gif';


function App() {
  return (
    <div>
      <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-screen'>
        <div style={{background:'#ec6602'}}>
          <div className='flex flex-col items-center xl:justify-center font-Dyna h-full pt-10'>
            <img src={logo} alt='' height={300} width={400} />
            <h1 className='text-4xl pt-5'>Welcome to heo app</h1>
            <h1 className='text-3xl'>lets make a better life!</h1>
          </div>
        </div>

        <div>
          <div className='h-12 my-5 xl:my-12'>
            <div className='flex items-center justify-end gap-x-5 mx-5'>
              <h1 className='font-Dyna text-xs'>Create Account!</h1>
              <button className='bg-blue-200 py-2 px-3 rounded-sm text-black'>Register</button>
            </div>
          </div>

          <div className='h-32'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-3xl font-Dyna'>welcome back</h1>
              <h1 className='text-xs mt-3'>we are here to help each other</h1>
              <h1 className='text-xs'>everyday - everywhere</h1>
            </div>
          </div>

          <form className='flex flex-col mx-6 gap-y-2'>
            <label className='text-sm'>UserName</label>
            <input className='bg-white shadow-sm shadow-gray-400 text-xs p2' placeholder='Enter UserName'></input>
            <label className='text-sm'>PassWord</label>
            <input className='bg-white shadow-sm shadow-gray-400 text-xs p2' placeholder='Enter PassWord'></input>

            <h1 className='flex justify-end text-xs text-blue-300'>Forget PassWord</h1>
          </form>

          <div className='pt-2 mx-6'>
            <button className='bg-blue-200 text-black w-full p-3 rounded-sm'>Start Now!</button>
          </div>

          <div className='h-32 mt-6'>
            <a href='/'>
              <div className='bg-blue-700 text-white shadow-sm shadow-gray-400 px-5 py-2 mb-4'>
                Sign with google
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
