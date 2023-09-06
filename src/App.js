import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
     const getData = () => {
          const getItem = localStorage.getItem('comentList')
          if (getItem) {
               return JSON.parse(getItem)
          } else {
               return []
          }
     }
     const [localStor, setLocalStor] = useState(getData())
     const [inputData, setInputData] = useState({
          name: '',
          comment: '',
          tik: '',
     })
     const InputHandler = (e) => {
          setInputData({
               ...inputData,
               [e.target.name]: e.target.value
          })
     }
     const submit = () => {
          if (inputData !== "")
               setLocalStor([
                    ...localStor,
                    {
                         id: localStor.length + 1,
                         name: inputData.name,
                         comment: inputData.comment,
                         tik: tikCheck(),
                         img: "https://www.c3servicesindia.com/images/profile-none.png",
                    }])
          localStorage.setItem("comentList", JSON.stringify(localStor))
     }
     const tikCheck = () => {
          if(inputData.tik == "y" || inputData.tik == "Y"){
               return "✔";
          }else{
               return "_";
          }
     }
     // const tikCheck = () => {
     //      if (inputData.tik === "y" || inputData.tik === "Y") {
     //           return <span className='blue-star'>&#x2714;</span>; // Return a string with the checkmark character
     //      } else {
     //           return <span>_</span>; // Return a string with an underscore
     //      }
     // };
     return (
          <React.Fragment>
               <div className="container">
                    <div className='row'>
                         <div className='col-8'>
                              <h1>Comment /Review</h1>
                              <div className='img_width_logo'>
                                   <img className='logo' src={"data:image/jpeg;base64,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"} />
                                   <span>@iamsrk <span className='blue'>&#x2714;</span> </span>
                              </div>
                              <p className='coment-srk'>Ok thank u everyone. Some said my face not visible in #Jawan poster….so putting my face here….don’t tell the director & producer. Love u all & hope to meet u in theatres on #7thSeptember2023 love u and bye</p>
                              <div className='img-post'>
                                   <img className='post' src={"https://m.economictimes.com/thumb/msid-95243284,width-1200,height-900,resizemode-4,imgsize-37634/srk-also-struck-his-signature-pose-for-his-fans-.jpg"} />
                              </div>
                         </div>
                         <div className='col-4'>
                              <div className='input-section'>
                                   <input type='text' name='name' placeholder='User Name' onChange={InputHandler} />
                                   <input type='text' name='tik' placeholder='Tik - only Y / N' onChange={InputHandler} />
                                   <input type='text' name='comment' placeholder='Comment' onChange={InputHandler} />
                                   <button onClick={submit}> Submit </button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='map-start container'>
                    { 
                         localStor.map((item, index) => {
                              return (
                    <div key={index} className='map-data'>
                         <div className='user-data'>
                              <img className='comment-logo' src={item.img} />
                              <span className='cover'>@{item.name}<span className={item.tik ==="✔" ? "blue-star": ""}>{item.tik}</span></span>
                         </div>
                         <p>Comment: {item.comment}</p>
                    </div> 
                         )})
                    }
               </div>
          </React.Fragment>
     );
}

export default App;
