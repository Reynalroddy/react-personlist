import React from 'react'
import data from "./lists";
import List from "./list"





const app = () => {
    const [state,setState] = React.useState(data);
    return (
       <section>
<div className="container">
    <div className="row h-100 justify-content-center align-items-center">
<List people= {state}></List>

    </div>
</div>
       </section>
    )
}

export default app



