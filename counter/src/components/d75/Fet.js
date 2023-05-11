import React from "react";

class Fet extends React.Component {
    constructor() {
        super();
        this.state = {users:[],newUsers:[],input:undefined}
    }
    ChangeHandler=(event)=>{
        // console.log(event);
        event.preventDefault();
        this.setState({input:event.target.value}) 
        // console.log("hi");  
    }
    
    submitHandler=()=>{
        let {users,input}=this.state;
        let arr;
        if(input !== ''){
            arr=users && users.filter((item)=>item.id==input)
        }else{
            arr=users;
        }
       //var fil=users && users.filter(a =>a.id==input)

        this.setState({newUsers:arr})
       
    }
   
 
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(user => this.setState({users:user,newUsers:user}))     
    }

    render(){

        let {newUsers}=this.state;
        return(

            
           <div>
  
            <form >
                <input className="f1" type="text" placeholder="Enter the post id" onChange={this.ChangeHandler}/>
                <input className="f2" type="button" value="Submit" onClick={this.submitHandler} />
            </form>
          

            
               <table>

                    <tr className="t1"  >
                        <th>_id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>

                    {newUsers && newUsers.map((a,i) =>{
                 return  <tr className="t2" key={i} >
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.phone}</td>

                    </tr>
                    })}


    
                </table>




                </div>

           
            
        
    
        )
}
}

export default Fet;