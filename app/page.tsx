import LinkButton from "@/components/Link";
import Main from "@/components/Main";
import NewsCard from "@/components/news/NewsCard";
import NewsHeroCard from "@/components/news/NewsHeroCard";
import News from "@/public/images/news.jpg"
import Image from "next/image";

export default function Home() {
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
    },
    {
      headline: "Dr",
      author: "Colas Preuvost",
      publish_date: "2/24/2022",
      content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      category: "Sports",
      source: "Demimbu",
      views: 356139,
      comments: 5903,
      tags: "Exclusive",
      image_url: "https://blog.com/eget/tincidunt/eget/tempus.html?nam=auctor&nulla=sed&integer=tristique&pede=in&justo=tempus&lacinia=sit&eget=amet&tincidunt=sem&eget=fusce&tempus=consequat&vel=nulla&pede=nisl&morbi=nunc&porttitor=nisl&lorem=duis&id=bibendum&ligula=felis&suspendisse=sed&ornare=interdum&consequat=venenatis&lectus=turpis&in=enim&est=blandit&risus=mi&auctor=in&sed=porttitor&tristique=pede&in=justo&tempus=eu&sit=massa&amet=donec&sem=dapibus&fusce=duis&consequat=at&nulla=velit&nisl=eu&nunc=est&nisl=congue&duis=elementum&bibendum=in"
    },
    {
      headline: "Dr",
      author: "Barbie Kingsford",
      publish_date: "10/22/2022",
      content: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat",
      category: "Technology",
      source: "Edgeclub",
      views: 379362,
      comments: 7579,
      tags: "Opinion",
      image_url: "http://techcrunch.com/vulputate/justo.jpg?fusce=mauris&lacus=non&purus=ligula&aliquet=pellentesque&at=ultrices&feugiat=phasellus&non=id&pretium=sapien&quis=in&lectus=sapien&suspendisse=iaculis&potenti=congue&in=vivamus&eleifend=metus&quam=arcu&a=adipiscing&odio=molestie&in=hendrerit&hac=at&habitasse=vulputate&platea=vitae&dictumst=nisl&maecenas=aenean&ut=lectus&massa=pellentesque&quis=eget&augue=nunc&luctus=donec&tincidunt=quis&nulla=orci"
    },
    {
      headline: "Dr",
      author: "Kale Langcaster",
      publish_date: "3/6/2022",
      content: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      category: "Sports",
      source: "Digitube",
      views: 968542,
      comments: 3884,
      tags: "Analysis",
      image_url: "http://oakley.com/nunc/viverra/dapibus/nulla.html?dui=in&luctus=magna&rutrum=bibendum&nulla=imperdiet&tellus=nullam&in=orci&sagittis=pede&dui=venenatis&vel=non&nisl=sodales&duis=sed&ac=tincidunt&nibh=eu&fusce=felis&lacus=fusce&purus=posuere&aliquet=felis&at=sed&feugiat=lacus&non=morbi&pretium=sem&quis=mauris&lectus=laoreet&suspendisse=ut&potenti=rhoncus&in=aliquet&eleifend=pulvinar&quam=sed&a=nisl&odio=nunc&in=rhoncus&hac=dui&habitasse=vel&platea=sem&dictumst=sed&maecenas=sagittis&ut=nam&massa=congue&quis=risus&augue=semper&luctus=porta&tincidunt=volutpat&nulla=quam&mollis=pede&molestie=lobortis&lorem=ligula"
    },
    {
      headline: "Mr",
      author: "Bone Dechelette",
      publish_date: "12/16/2022",
      content: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros",
      category: "Entertainment",
      source: "Linktype",
      views: 683008,
      comments: 1888,
      tags: "Analysis",
      image_url: "http://nymag.com/donec/ut/dolor.js?magna=ut&vulputate=massa&luctus=volutpat&cum=convallis&sociis=morbi&natoque=odio&penatibus=odio&et=elementum&magnis=eu"
    },
    {
      headline: "Ms",
      author: "Vivie Hayne",
      publish_date: "1/24/2022",
      content: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      category: "Technology",
      source: "Fivechat",
      views: 746702,
      comments: 4420,
      tags: "Opinion",
      image_url: "https://cnet.com/nisl/duis/bibendum/felis/sed/interdum.aspx?orci=augue&luctus=luctus&et=tincidunt&ultrices=nulla&posuere=mollis&cubilia=molestie&curae=lorem&donec=quisque&pharetra=ut&magna=erat&vestibulum=curabitur&aliquet=gravida&ultrices=nisi&erat=at&tortor=nibh&sollicitudin=in&mi=hac&sit=habitasse&amet=platea&lobortis=dictumst&sapien=aliquam&sapien=augue&non=quam&mi=sollicitudin&integer=vitae&ac=consectetuer&neque=eget&duis=rutrum&bibendum=at&morbi=lorem&non=integer&quam=tincidunt&nec=ante&dui=vel&luctus=ipsum&rutrum=praesent&nulla=blandit&tellus=lacinia&in=erat&sagittis=vestibulum&dui=sed&vel=magna&nisl=at&duis=nunc&ac=commodo&nibh=placerat&fusce=praesent&lacus=blandit&purus=nam&aliquet=nulla&at=integer&feugiat=pede&non=justo&pretium=lacinia&quis=eget&lectus=tincidunt&suspendisse=eget&potenti=tempus&in=vel&eleifend=pede&quam=morbi&a=porttitor&odio=lorem&in=id"
    },
    {
      headline: "Rev",
      author: "Felicle Moggle",
      publish_date: "2/21/2022",
      content: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      category: "Health",
      source: "Livepath",
      views: 67747,
      comments: 3587,
      tags: "Opinion",
      image_url: "https://google.co.jp/a/suscipit/nulla/elit/ac/nulla.html?ante=eget&vivamus=rutrum&tortor=at&duis=lorem&mattis=integer&egestas=tincidunt&metus=ante&aenean=vel&fermentum=ipsum&donec=praesent&ut=blandit&mauris=lacinia&eget=erat&massa=vestibulum&tempor=sed&convallis=magna&nulla=at"
    },
    {
      headline: "Rev",
      author: "Karen Baythorp",
      publish_date: "7/2/2022",
      content: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      category: "Entertainment",
      source: "Feednation",
      views: 652988,
      comments: 2047,
      tags: "Opinion",
      image_url: "http://cloudflare.com/phasellus/sit/amet.js?at=luctus&ipsum=et&ac=ultrices&tellus=posuere&semper=cubilia&interdum=curae&mauris=duis&ullamcorper=faucibus"
    },
    {
      headline: "Mr",
      author: "Ignacio Avrahamov",
      publish_date: "2/16/2022",
      content: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      category: "Politics",
      source: "Thoughtworks",
      views: 31289,
      comments: 7820,
      tags: "Breaking News",
      image_url: "https://tinypic.com/praesent.png?vel=nam&est=dui&donec=proin&odio=leo&justo=odio&sollicitudin=porttitor&ut=id&suscipit=consequat&a=in&feugiat=consequat&et=ut&eros=nulla&vestibulum=sed&ac=accumsan&est=felis&lacinia=ut&nisi=at&venenatis=dolor&tristique=quis&fusce=odio&congue=consequat&diam=varius&id=integer&ornare=ac&imperdiet=leo&sapien=pellentesque&urna=ultrices&pretium=mattis&nisl=odio&ut=donec&volutpat=vitae&sapien=nisi&arcu=nam&sed=ultrices&augue=libero&aliquam=non&erat=mattis&volutpat=pulvinar&in=nulla&congue=pede"
    },
    {
      headline: "Ms",
      author: "Gil Lashley",
      publish_date: "10/11/2022",
      content: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      category: "Politics",
      source: "Dynabox",
      views: 802056,
      comments: 49,
      tags: "Exclusive",
      image_url: "https://stanford.edu/justo/morbi/ut/odio/cras/mi/pede.xml?in=auctor&ante=sed&vestibulum=tristique&ante=in&ipsum=tempus&primis=sit&in=amet&faucibus=sem&orci=fusce&luctus=consequat&et=nulla&ultrices=nisl&posuere=nunc&cubilia=nisl&curae=duis&duis=bibendum&faucibus=felis&accumsan=sed&odio=interdum&curabitur=venenatis&convallis=turpis&duis=enim&consequat=blandit&dui=mi&nec=in"
    },
    {
      headline: "Honorable",
      author: "Julius Smitham",
      publish_date: "7/18/2022",
      content: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      category: "Politics",
      source: "Camimbo",
      views: 543864,
      comments: 8386,
      tags: "Exclusive",
      image_url: "http://redcross.org/blandit.xml?iaculis=in&justo=faucibus&in=orci&hac=luctus&habitasse=et&platea=ultrices&dictumst=posuere&etiam=cubilia&faucibus=curae&cursus=mauris&urna=viverra&ut=diam&tellus=vitae&nulla=quam&ut=suspendisse&erat=potenti&id=nullam&mauris=porttitor&vulputate=lacus&elementum=at&nullam=turpis&varius=donec&nulla=posuere&facilisi=metus&cras=vitae&non=ipsum&velit=aliquam&nec=non&nisi=mauris&vulputate=morbi&nonummy=non&maecenas=lectus&tincidunt=aliquam&lacus=sit&at=amet&velit=diam&vivamus=in&vel=magna&nulla=bibendum&eget=imperdiet&eros=nullam&elementum=orci&pellentesque=pede&quisque=venenatis&porta=non&volutpat=sodales&erat=sed&quisque=tincidunt&erat=eu&eros=felis&viverra=fusce&eget=posuere&congue=felis&eget=sed&semper=lacus&rutrum=morbi&nulla=sem&nunc=mauris&purus=laoreet&phasellus=ut&in=rhoncus&felis=aliquet&donec=pulvinar&semper=sed&sapien=nisl&a=nunc&libero=rhoncus&nam=dui&dui=vel&proin=sem&leo=sed&odio=sagittis&porttitor=nam&id=congue&consequat=risus&in=semper&consequat=porta&ut=volutpat&nulla=quam&sed=pede&accumsan=lobortis&felis=ligula&ut=sit&at=amet&dolor=eleifend&quis=pede&odio=libero&consequat=quis&varius=orci&integer=nullam&ac=molestie&leo=nibh&pellentesque=in&ultrices=lectus&mattis=pellentesque&odio=at&donec=nulla&vitae=suspendisse&nisi=potenti&nam=cras"
    }
  ]
  return (
    <Main >
      <div className="flex flex-col md:flex-row h-full items-center gap-4 p-4 justify-center">
        <NewsHeroCard News={News} data={data} />
        <ul className="flex flex-wrap md:flex-row flex-none w-6/12 md:w-5/12 gap-4 overflow-y-scroll max-h-screen">
          <NewsCard News={News} data={data} />
          <NewsCard News={News} data={data} />
          <NewsCard News={News} data={data} />

        </ul>
      </div>
    </Main>
  );
}
