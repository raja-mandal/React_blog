import React from "react";
import axios from 'axios';
import Header from '../../components/Header';
import { postApi } from "../../utils/services";

const Home  = () => {
  
    const [dumy, setDumy] = React.useState([]);
    const [likeCounter, setLikeCounter] =React.useState(0)
    React.useEffect(()=>{
        postApi()
        .then(({data})=>{
            console.log(data)
            const { quotes} = data
            setDumy(quotes)
            console.log(quotes)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const likeIncrement = () => {
        setLikeCounter(likeCounter + 1)
    }

  return(
      
        <>
          <Header />
          <div className="container pt-4">
            <p>All Post</p>
            {dumy  &&
              dumy.map((data)=>(
                  <div className="row">
                      <div className="card">
                          <div className="card-body">
                              {/* <h5 className="card-title">Card title</h5> */}
                              <h6 className="card-subtitle mb-2 text-muted">{data.name}</h6>
                              <p className="card-text">{data.description}</p>
                              <p className="card-text">Date:&nbsp; 01/12/2222</p>
                              <br/>
                              <span onClick={likeIncrement
                              }>like icon{likeCounter}</span>
                              {/* <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                          </div>
                      </div>
                  </div> 
              ))



            }
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        {/* <h5 className="card-title">Card title</h5> */}
                          <h6 className="card-subtitle mb-2 text-muted">Jay</h6>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <p className="card-text">Date:&nbsp; 01/12/2222</p>


                      
                        {/* <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                    </div>
                </div> 
            </div>  
          </div>
        </>     
                   
       
            
  )
} 

                


export default Home;