import React from 'react'
import Button from './Button'

type TabsProps = {
    users:string,
    posts:string,
    comments:string,
    url:string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
}

const Tabs = ({users,posts,comments,url,setUrl}:TabsProps) => {
  return (
    <div className='btn-wrapper'>
        <Button url={url} setUrl={setUrl} _btnUrl={users}>Users</Button>
        <Button url={url} setUrl={setUrl} _btnUrl={posts}>Posts</Button>
        <Button url={url} setUrl={setUrl} _btnUrl={comments}>Comments</Button>
    </div>
  )
}

export default Tabs;