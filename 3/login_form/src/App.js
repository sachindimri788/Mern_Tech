import './App.css';

function App() {
  return (
    <>
    <div className='out_div'>
    <div className='outer_div'>
      <div className='main_div'>
        <div className='main_div_left'>
        </div>
        <div className='main_div_right'>
          <div className='main_div_right_main'>
              <div className='inner' >
                <span className='already'> Already Member </span>
                <span> Need Help ?</span>
              </div>
              <input type='text' placeholder='Enter Your Name'></input><br></br>
              <input type='password' placeholder='Enter your Password'></input> <br></br>
              <button>SigIn</button>

              <div className='last'>
              <span className='one'>Don't Have an Account Yet ?</span> 
              <span className='two'>Create an Account</span>
              </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
    </div>


    </>
      );
}

      export default App;
