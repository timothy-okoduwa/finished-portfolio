// import React, { useState } from "react";
// import styled from "styled-components";
// import { Input, Button } from "antd";
// import app from "../Base";
// import firebase from 'firebase'
// import TextArea from 'antd/lib/input/TextArea'
// const Mypost = () => {
//   const [profilepix, setProfilepix] = useState("");
//   const [image, setImage] = useState("");
//   const [title, setTitle] = useState("");
//   const [video, setVideo] = useState("");
//   const [name, setName] = useState("");
//   const [view, setView] = useState("");
//   const[show,setShow]= useState('')
// const uploadimage = async({target})=>{
//   const file = target.file[0]
//   const fileRef = await app.storage().ref()
//   const storageRef = fileRef.child('image/' * file.name).put(files)
//   storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
//     const uploadedbyte = (snapshot.bytesTransferred/snapshot.totalByte)*100
//     console.log(`${Math.round(uploadedbyte)}%`)
//     setShow(Math.round(uploadedbyte))
//   })
// },(err)=>{
//   console.log(err.message)
// }

//   return (
//     <Component>
//       <Wrapper>
//         <Profilepix placeholder="prifilepix" type="file" />
//         <IMage placeholder="image" type="file" />
//         <Video placeholder="video" type="file" />
//         <Title placeholder="title" type="text" />
//         <Dist placeholder="description" type="text" />
//         <Name placeholder="name" type="text" />
//         <View placeholder="view" type="text" />
//       </Wrapper>
//       <div>
//         <Button type="primary" danger>
//           Send
//         </Button>
//       </div>
//     </Component>
//   );
// };

// export default Mypost;
// const Component = styled.div`
//   div {
//     margin-left: 90px;
//   }
// `;
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 250px;
//   margin: 30px;
// `;
// const Profilepix = styled(Input)``;
// const IMage = styled(Input)``;
// const Title = styled(Input)``;
// const Dist = styled(TextArea)``;
// const Video = styled(Input)``;
// const Name = styled(Input)``;
// const View = styled(Input)``;
