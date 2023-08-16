
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Article_Id({ params }) {
    const API = "https://sobit2204.pythonanywhere.com/api/v1/"
    const article_new = "news/"
    const news_id = params.article_id

    const res = await fetch(`${API}${article_new}${news_id}`)



    if (!res.ok) redirect('/')
    const data = await res.json()
    const dada_title = data.news_detail_serializer.title
    const dada_image = data.news_detail_serializer.image_url
    const dada_text = data.news_detail_serializer.text
    const dada_video = data.news_detail_serializer.video

    const letters = dada_video.replace('https://www.youtube.com/watch?v=', '')
    const replace = dada_text.split(".")
    console.log(replace);



    return (
        <section className='article'>
            <title>{dada_title}</title>
            <div className="container">
                <div className="article-content">
                    <h2 className="article-content-title">{dada_title}</h2>
                    <div className="article-content-image">
                        <Image src={dada_image} alt="logo" fill={true} sizes={450} priority />
                    </div>
                    <p className="article-content-text">{dada_text}</p>
                    {replace}
                    <iframe
                        className='article-content-iframe'

                        width={787}
                        height={400}
                        src={`https://www.youtube.com/embed/${letters}`}
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
