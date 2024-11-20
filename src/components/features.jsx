import React from "react";

export const Features = (props) => {

  const handleClick = (link) =>{
    window.open(link, "_blank");
  }

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>my socials</h2>
        </div>
        <div className="row center-block">
          {/* <div className="col-sm-4 col-md-3"> */}
            <i className="fa fa-brands fa-instagram" onClick={() => handleClick('https://www.instagram.com/le_njn_ajmal?igshid=1dqghwe9thbo1')}></i>
          {/* </div> */}
          {/* <div className="col-sm-4 col-md-3"> */}
            <i className="fa fa-brands fa-youtube" onClick={() => handleClick('https://www.youtube.com/@txagamingyt')}></i>
          {/* </div> */}
          {/* <div className="col-sm-4 col-md-3"> */}
            <i className="fa fa-brands fa-discord" onClick={() => handleClick('https://discord.gg/asSEQM6b')}></i>
          {/* </div> */}
          {/* <div className="col-sm-4 col-md-3"> */}
            <i className="fa fa-brands fa-twitch" onClick={() => handleClick('https://www.twitch.tv/txa_gaming')}></i>
          {/* </div> */}
        </div>
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."} 
            </div>*/}
      </div>
    </div>
  );
};
