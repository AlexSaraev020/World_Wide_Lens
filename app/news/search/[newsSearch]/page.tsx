import NewsList from '@/components/news/NewsList'
import React from 'react'

export default function Page({ params }: { params: { newsSearch: string } }) {
    const data = [
        {
            headline: "Mrs",
            author: "Violante McCreath",
            publish_date: "7/22/2022",
            content: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            category: "Entertainment",
            source: "Divape",
            views: 624321,
            comments: 4836,
            tags: "Breaking News",
            image_url: "https://timesonline.co.uk/magnis/dis/parturient/montes.json?est=sed&et=ante&tempus=vivamus&semper=tortor&est=duis&quam=mattis&pharetra=egestas&magna=metus&ac=aenean&consequat=fermentum&metus=donec&sapien=ut&ut=mauris&nunc=eget&vestibulum=massa&ante=tempor&ipsum=convallis&primis=nulla&in=neque&faucibus=libero&orci=convallis&luctus=eget&et=eleifend&ultrices=luctus&posuere=ultricies&cubilia=eu&curae=nibh&mauris=quisque&viverra=id&diam=justo&vitae=sit&quam=amet&suspendisse=sapien&potenti=dignissim&nullam=vestibulum&porttitor=vestibulum&lacus=ante&at=ipsum&turpis=primis&donec=in&posuere=faucibus&metus=orci&vitae=luctus&ipsum=et&aliquam=ultrices&non=posuere&mauris=cubilia&morbi=curae&non=nulla&lectus=dapibus&aliquam=dolor&sit=vel&amet=est&diam=donec&in=odio&magna=justo&bibendum=sollicitudin&imperdiet=ut&nullam=suscipit&orci=a&pede=feugiat&venenatis=et&non=eros&sodales=vestibulum&sed=ac&tincidunt=est&eu=lacinia&felis=nisi&fusce=venenatis&posuere=tristique&felis=fusce&sed=congue&lacus=diam&morbi=id&sem=ornare&mauris=imperdiet&laoreet=sapien&ut=urna&rhoncus=pretium&aliquet=nisl&pulvinar=ut&sed=volutpat&nisl=sapien&nunc=arcu&rhoncus=sed&dui=augue&vel=aliquam&sem=erat&sed=volutpat&sagittis=in&nam=congue&congue=etiam&risus=justo&semper=etiam&porta=pretium&volutpat=iaculis&quam=justo"
        }]
    return (
        <div className='flex-1 flex flex-col w-full items-center justify-center p-4'>
            <NewsList data={data} newsSearch={params.newsSearch}/>
        </div>
    )
}
