import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor(props){
    super(props);
    var pos = -1;
    this.state = {
      user : {
      list : "",
      status : 0
    },
    users : []
  }
  }

  handleChange=(e)=>{
    let user = {...this.state.user}
    user[e.target.name] = e.target.value
    this.setState({
       user,
    },()=>{
      console.log(this.state.user)
    })
  }
  handlesubmit=(e,index)=>{
    e.preventDefault()
    let users = [...this.state.users]
    
  if(index > -1)
  {
    users[index]=this.state.user
  }
  else{
    users.push(this.state.user)
    console.log(users)
  
  } 
      this.setState({
      users,
      pos:-1,
       user : {
         list : "",
         status : 0
       }
    })
  }
  handletask=(e,index)=>{
    console.log(index)
    let users = [...this.state.users]
    users[index].status = 1
    console.log("status")
    console.log(users[index].status)
    this.setState({
      users,
    },()=>{
      console.log(users)
    })
  }
  handledelete=(e,index)=>{
    console.log(index)
    let users = [...this.state.users]
    users.splice(index,1)
    this.setState({
      users,
    },()=>{
      console.log(users)
    })
  }
  handledit=(index)=>{
    
    let users = [...this.state.users]
    console.log(users)
    console.log(this.state.user)

    this.setState({
      user: users[index],
      pos:index
    },()=>{
      console.log(this.state.user)
    })
  
  }

  render() {
    return (
      <div className='formabc'>
        <form action="" >
        <label>ToDo List</label><br/>
        <input type="text" name="list" value={this.state.user.list} onChange={(e)=>{this.handleChange(e)}}/>
        <button onClick={(e)=>{this.handlesubmit(e,this.state.pos)}}>Save</button>
        </form>
        
        <br/>
        
        <table >
              <thead>
                    <tr>
                <th>List</th>
                <th>Action</th>
                    </tr>
              </thead>
              <tbody>
                    {this.state.users.length ? this.state.users.map((ele,index)=>{
                        return(
                        <>
                      <tr>
                      {ele.status===1?<strike><td>{ele.list}</td></strike>:<td>{ele.list}</td>}
                    
                        <td>
                          <button onClick={(e)=>{this.handledelete(index)}}>Delete</button>
                          <button onClick={(e)=>{this.handledit(index)}}>Edit</button>
                          <button onClick={(e)=>{this.handletask(e,index)}}>{ele.status===1?"Complete":"Task Pending"}</button>
                        </td>
                      </tr>
                      </>
                        ) 
                              }) 
                    :
                    <>
                    {/* {console.log(this.state.users.length)} */}
                      <tr>No Data Available</tr>
                    </>
                    }
              </tbody>
        </table>
      </div>

    )
  }
}
