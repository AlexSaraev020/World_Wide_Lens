import Main from '@/components/Main'
import React from 'react'

export default function page({params}: {params :{newsId:string}}) {
  return (
    <Main>
        <div className='min-h-screen'>
        dfsa {params.newsId}
    </div>
    </Main>
  )
}
