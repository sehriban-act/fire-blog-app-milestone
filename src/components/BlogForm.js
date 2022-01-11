import React from 'react';

import { Grid,Form,Segment,Button} from 'semantic-ui-react';
const BlogForm = ({info,setInfo,handleFormSubmit}) => {
    const handleInputChange=(e)=>{
        // const name=e.target.name
        // const value=e.target.value
        const {name,value}=e.target
        setInfo({...info,[name]:value})
    
      }
      const handleOptionChange=(e,values)=>{
        const {name,value}=values
        setInfo({...info,[name]:value.toUpperCase()})
    
      }
  return (
      
    <Grid textAlign="center" verticalAlign="middle" >
         <Grid.Column style={{ width: 600 }}>
            <div className="ui piled segments">
            <div className="ui segment brand">
              
              
            </div>
            </div>
            <h2 className="contact-header">New Blog</h2>
        <Form  size="large" onSubmit={handleFormSubmit} >
          <Segment stacked>
            <Form.Input
              fluid
              name="title"
              icon="title"
              iconPosition="left"
              placeholder="Title*"
              value={info.title}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="imageUrl"
              icon="image"
              iconPosition="left"
              placeholder="Image URL*"
              value={info.imageUrl}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="content"
              icon="content"
              iconPosition="left"
              placeholder="Content*"
              value={info.content}
              onChange={handleInputChange}
              required
            />
            
            <Button color="teal" fluid size="large">
         Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column> 
      </Grid>
  );
}

export default BlogForm;
