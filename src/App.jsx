import './App.css'
import Cxcont from './components/cxcont'
import Cximage from './components/cximage'

function App() {
    return (
        <main className='bg-[#0A0C1B] min-w-screen min-h-[100vh] flex justify-center items-center '>
            <section className='bg-[#1C1938] text-white w-[75vw] h-[400px] rounded-[5px] flex max-[1073px]:flex-col-reverse max-[1073px]:h-[87vh] max-[1073px]:w-[60vw] max-[600px]:h-[95vh]'>
                <Cxcont />
                <Cximage />
           
            </section>
        </main>
    )
}
export default App