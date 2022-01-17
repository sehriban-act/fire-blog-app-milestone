import React, { useEffect, useState } from 'react';

import { getDatabase,onValue,query,ref} from 'firebase/database';

const BlogCard = () => {
    const useFetch=()=>{
        const [contactList, setContactList] = useState();
        const [isLoading,setIsLoading]=useState(false);
        const[date,setDate]=useState(new Date());
       
       
        useEffect(()=>{
          setIsLoading(true)
    
          const db = getDatabase();
          const userRef = ref(db, 'contact');
      
          onValue(query(userRef), snapshot => {
            const contacts=snapshot.val()
            // send an array of the values in database
            const contactArray = [];
            for (let id in contacts) {
              contactArray.push({ id, ...contacts[id] });
            }
            setContactList(contactArray);
            setIsLoading(false)
            setDate()
          })
        },[]);
        return {isLoading,contactList};
    }
    const { contactList, isLoading } = useFetch();
  return (
    <div className='blog'>
  {
      isLoading?(<p>Loading</p>):contactList?.length===0 ?(
          <p>nothing</p>
      ):(
          contactList?.map((item,index)=>(
              <div key={index}>
              <img src={item.imageUrl} alt="imageUrl"/>
                <div className='blog-info'>
                <h3>{item.title}</h3>
                <p >{item.content}</p>
            
                
                </div>
              </div>
              
          ))
      )
  }
    </div>
  );
}

export default BlogCard;
