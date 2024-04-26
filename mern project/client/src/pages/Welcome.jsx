import {useSelector} from 'react-redux'

export default function Welcome() {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className='h-screen flex justify-center items-center' style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/022/527/605/non_2x/house-of-dream-idea-real-estate-illustration-ai-generative-free-photo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='p-4 max-w-lg mx-auto'style={{backgroundColor:"rgba(255, 255, 255, 0.4)"}}>
      <h1 className='text-3xl font-semibold text-center my-7'>Welcome {currentUser.username}</h1>
    </div>
    </div>
  )
}
