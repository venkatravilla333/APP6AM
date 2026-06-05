import React from 'react'

function Profile(props) {
  return (
    <div style={{border: "2px solid red", padding: "20px", margin: "20px"}}>
      <h3>Profile</h3>
      <img src="https://st3.cricketcountry.com/wp-content/uploads/cricket/image_20131015131036.jpg?impolicy=Medium_Widthonly&w=800" alt="" width="300px"/>
      <h3>Name: Sachin</h3>
      <h3>City: Mumbai</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam expedita perferendis optio commodi molestias corporis, dicta suscipit harum ipsam assumenda at ipsa facilis quia quibusdam quae, corrupti nobis hic beatae qui dolor, amet asperiores iste a! Reprehenderit sapiente pariatur repudiandae officia, quibusdam eveniet sint exercitationem ipsa corporis harum nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam facilis quaerat non soluta assumenda veniam! Minus dolorum voluptates vel, ullam aspernatur ducimus, molestiae nobis voluptatum, sunt consequuntur sed aperiam. Iste obcaecati quidem dolor sequi asperiores odio officiis a, eius, fuga ipsa cum! Itaque ad tenetur libero dolorem, ut mollitia nemo.</p>
      <button onClick={()=>props.setLogin(false)}>Logout</button>
    </div>
  )
}

export default Profile