import { NextResponse } from "next/server"

export const blogs=[
    {
        "id": "8",
        "title": "Understanding Blockchain Technology",
        "description": "An introduction to blockchain technology and its applications beyond cryptocurrencies.",
        "date": "2023-11-01",
        "author": "Fiona Clark",
        "tags": ["blockchain", "technology", "cryptocurrency", "innovation"],
        "image": "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
        "total_likes": "1100"
    },
    {
        "id": "9",
        "title": "Responsive Design Best Practices",
        "description": "Tips and techniques for creating responsive web designs that work on all devices.",
        "date": "2023-11-05",
        "author": "George Walker",
        "tags": ["responsive design", "web design", "CSS", "frontend"],
        "image": "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
        "total_likes": "900"
    }
]


export const GET = async()=>{
return NextResponse.json(blogs);
}
export const POST = async(request:Request)=>{

const blog = await request.json();
const newBlog ={
    ...blog,
    id:blogs.length+1
}
blogs.push(newBlog);

return new NextResponse(JSON.stringify(newBlog),{
    status:201,
    headers:{
        "Content-type":"application/json",
    }
})
}