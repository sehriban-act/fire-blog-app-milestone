import {child, getDatabase, push, ref, set, update} from 'firebase/database';

import { useState } from 'react';

import BlogForm from '../components/BlogForm';
import firebase from '../helpers/firebase'
const initialValues={title:"",imageUrl:"",content:""}
const NewBlog = () => {
    const [info,setInfo]=useState(initialValues)
    const addInfo=(info)=>{
        const db=getDatabase();
        const userRef=ref(db,"contact")
        const newUserRef=push(userRef)
        set(newUserRef,{
            title:info.title,
            imageUrl:info.imageUrl,
           content:info.content
        });
        console.log(info);
    }
    const updateInfo=(info)=>{
        const db = getDatabase();
        const newUserKey=push(child(ref(db),"contact/")).key;
        const updates={};
        updates["contact/"+newUserKey]=info;
        return update(ref(db),updates)
    }

    const handleFormSubmit=()=>{
      if(info.id){
      updateInfo(info)}
      else{
        addInfo(info)
      }
    }
  return (
    <div  >
    <BlogForm info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default NewBlog;
