import React from 'react'


const list = ({people}) => {
    return (
        <>
            {people.map((person)=>{
                const {name,job,img,id} = person;
return  <div className=" col-10  mx-auto col-md-3" key = {id} >
    <div className="person"><img src={img} alt={name}/>
<h4>{job}</h4></div>


</div>
 
            })}
        </>
    )
}

export default list;
