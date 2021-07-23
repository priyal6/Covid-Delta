import React,{useEffect,useState } from 'react'
const Covid = () => {

        const[data, setData] = useState([]);
        const getCovidData = async()=>{
            try{
           const res = await fetch('https://api.covid19india.org/data.json');
           const actdata = await res.json();
           //for (let i =1; i<38;i++){    
            setData(actdata.statewise[0])
           console.log(actdata.statewise[0])
       // }
        }catch(err){console.log(err);}

        }
    

    useEffect(() => {getCovidData(); }, []);
return (
    <>
    <section>
      <h1>Covid-19 Tracker</h1>  
      <ul>
          <li className = "card">
              <div className="card__main">
                  <div className ="card__inner">
                      <p className="card__name"> COUNTRY</p>
                      <p className="card__total"> INDIA</p>
                  </div>
              </div>
          </li>
          <li className = "card">
              <div className="card__main">
                  <div className ="card__inner">
                      <p className="card__name">ACTIVE CASES</p>
                      <p className="card__total"> {data.active}</p>
                  </div>
              </div>
          </li>
          <li className = "card">
              <div className="card__main">
                  <div className ="card__inner">
                  <p className="card__name">Deaths</p>
                  <p className="card__total"> {data.deaths}</p>
                  </div>
              </div>
          </li>
          <li className = "card">
              <div className="card__main">
                  <div className ="card__inner">
                      <p className="card__name"> RECOVERED</p>
                      <p className="card__total"> {data.recovered}</p>
                  </div>
              </div>
          </li>
          </ul>
          </section>
    </ >
)

}