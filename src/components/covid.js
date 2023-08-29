import React, { useEffect, useState }  from "react";
import './myStyle.css'

const Covid = () => {
    const  [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[15]);
     setData(actualData.statewise[15])
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  const style1 = {
    background:'blue'
}
const style2 = {
    background:'orange'
}
const style3 = {
    background:'red'
}
const style4 = {
    background:'green'
}
const style5 = {
    background:'blue'
}
const style6 = {
    background:'grey'
}

  return (
    <div>
        <section>
      <div class="d-flex">
      <h1>🔴LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
  <div class="column">
    <div class="card" style={style1}>
      <h3>Card 1</h3>
      <p className="card-name"><span>OUR</span> COUNTRY</p>
                <p className="card-total card-small">{data.state}</p>
    </div>
  </div>

  <div class="column">
    <div class="card" style={style2}>
      <h3>Card 2</h3>
      <p className="card-name"><span>TOTAL</span> RECOVERED</p>
                <p className="card-total card-small">{data.deltarecovered}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={style3}>
      <h3>Card 3</h3>
      <p className="card-name"><span>TOTAL</span> CONFIMED</p>
                <p className="card-total card-small">{data.deltaconfirmed}</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card" style={style4}>
      <h3>Card 4</h3>
      <p className="card-name"><span>TOTAL</span> DEATH</p>
                <p className="card-total card-small">{data.deltadeaths}</p>
    </div>
  </div>
  <div class="column">
    <div class="card" style={style5}>
      <h3>Card 5</h3>
      <p className="card-name"><span>TOTAL</span> ACTIVE</p>
                <p className="card-total card-small">{data.active}</p>
    </div>
  </div>
  <div class="column">
    <div class="card"style={style6}>
      <h3>Card 6</h3>
      <p className="card-name"><span>LAST</span> UPDATED</p>
                <p className="card-total card-small">{data.lastupdatedtime}</p>
    </div>
  </div>
</div>
      </section>
    </div>
  );
};

export default Covid;
