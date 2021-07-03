import React from "react";
import { getAllClass } from "../api";
import ClassCard from "../components/classCard/Cards";
import { green } from "@material-ui/core/colors";
import image from "../11.png";
import { useHistory } from "react-router-dom";
import Logout from "../components/Logout";

import { useDispatch, useSelector } from 'react-redux';
var user = JSON.parse(localStorage.getItem('profile'));
var token;
if(user){
token=user.token;
}
//console.log(token);

function Home() {
  const [Class, editClass] = React.useState([]);

  var classes ;
  React.useEffect(async () => {
     classes = await getAllClass({token});
    editClass(classes.data);
    console.log(classes);
  },[classes]);
  
  
  
  console.log(Class);

  const history = useHistory();
  const moveToClass = (data) => {
    history.push({
      pathname: "/class",
      state: { data: data },
    });
  };

  const addNewclass = (data) => {
    history.push({
      pathname: "/createclass",
    });
  };

  return (
    <div>
      <div className="home01">
        <h1 >IIIT Una Classroom</h1>
        <Logout/>
       <button className="home11" onClick={addNewclass}>Create Class</button>
      </div>



      {Class.map(function (iclass, i) {
        return (
          <div className="home05" >
            <div className="home02" >

              <div className="home04" style={{ borderColor: iclass.headBackgroundColor }}>
                <h5 className="home03">{iclass.subjectName}</h5>
                <h6 className="home03">({iclass.subjectCode})</h6>
                <h6 className="home03">{iclass.subjectTeacher[0]}</h6>


              </div>
              <div className="home06">
                <div className="home07">
                  <button className="home08" onClick={() => {moveToClass(iclass);}}  > Open </button>
                  
                  </div>
                
              </div>

            </div>
          </div>
        )
      })}





    </div>
  );

};
export default Home;



//
//<ClassCard data={Class} />
//{Class ?  : "Loading..."}
/*
<li key={unit.assignmentKey}>
        <div>
          <div
            style={{
              width: "100%",
              marginTop: "5px",
              border: "2px solid",
              borderRadius: "5px",
              color: frontColor,
              borderColor: backColor,
              fontWeight: "600",
              fontStyle: "italic",
              display: "flex",
            }}
            onClick={() => {
              // Go to practice page
              history.push({
                pathname: "/Indipractice/" +unit.assignmentKey,

              });

            }}
            className="unit"
          >
            <div
              style={{ width: "20%" }}
            >{`${unit.unitN} ${unit.unit}`}</div>
            <div style={{ width: "50%" }}>{unit.title}</div>
            <div style={{ width: "30%" }}></div>
          </div>
        </div>
      </li>
*/