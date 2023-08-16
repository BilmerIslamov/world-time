import moment from "moment"
import Image from "next/image";
import Link from "next/link";
import Button from '@mui/material/Button';
import { FaPlay } from 'react-icons/fa'
export default async function Api() {
    const API = "http://sobit2204.pythonanywhere.com/api/v1/"
    const economyNews = await fetch(`${API}category/7/`, {
        headers: {
            'Cache-Control': 'no-cache',
        },
    })
    
    
    const economy = await economyNews.json()
    const economy_api = economy.news_items
    const php = economy_api.slice(-1)
    const economy_category = php.map((item) => {
        const truncateString = (string = '', maxLength = 100) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        const itemTitle = truncateString(item.title, 55)

        const itemData = moment(item.created_at).startOf('minute').fromNow();
        return (
            <Link key={item.id} href="/" data-aos="fade-up" data-aos-duration="1200" className="home-content-grid-item-one content-wrapper-header">
                <Image priority src={item.image_url} fill sizes="100%" className='content-wrapper-logo' alt="" />
                <div className="content-wrapper-card-article-data">
                    <span className='content-wrapper-card-article-data-text'>{itemData}</span>
                </div>
                <div className="content-wrapper-logo-back"></div>
                <div className="content-wrapper-header-content">
                    <h2 className="content-wrapper-header-title">{itemTitle}</h2>
                </div>
            </Link>
        )
    })
    const uz_news = economy_api.map((item, index) => {
        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}`
                : string
        const truncateTime = truncateString(item.created_at, 16)
        const dataNews = moment(truncateTime).startOf('minute').fromNow();

        const TruncateData = (strung = "", maxLength = 50) =>
            strung.length > maxLength
                ? `${strung.substring(0, maxLength)}…`
                : strung
        const itemTitle = TruncateData(item.title, 60)
        return (
            <>
                <Link href="/" className="home-content-grid-item-two-blog-title">
                    <h4 className="home-content-grid-item-two-title">{itemTitle}</h4>
                    <p className="home-content-grid-item-two-data">{dataNews}</p>
                </Link>
            </>
        )
    })
    const uz_items = uz_news.slice(-5)
    if (uz_items.length < 5) uz_items
    else uz_items.pop()
    const news_uz_Party = economy_api.map((item, index) => {
        // string index
        const truncateString = (string = '', maxLength = 100) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        const itemTitle = truncateString(item.title, 25)
        const itemText = truncateString(item.text, 105)
        // data object index
        const truncateData = (string = "", maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}`
                : string
        const itemData = truncateData(item.created_at, 16)
        const dataNews = moment(itemData).startOf('minute').fromNow();

        return (
            <div key={index} className="home-layout-page-scroll-component">
                <div className="home-layout-page-scroll-component-logo_blog">
                    <Image src={item.image_url} alt="logo" fill sizes="100%" priority className="home-layout-page-scroll-component-image" />
                </div>
                <div className="home-layout-page-scroll-component-title_blog">
                    <h4 className="home-layout-page-scroll-component-title">{itemTitle}</h4>
                    <p className="home-layout-page-scroll-component-content">
                        {itemText}
                    </p>
                    <div className="home-layout-page-scroll-component-li">
                        <Link href={`${item.category}/${item.id}`}>
                            <Button variant="contained" className="material-ui-button home-layout-page-scroll-component-btn">Link News</Button>
                        </Link>
                        <div className="home-layout-page-scroll-component-data">{dataNews}</div>
                    </div>
                </div>
            </div>
        )
    })
    const content_uz = news_uz_Party.slice(0, 3)
    const dataVideoNews = economy_api.map((item, index) => {
        const truncateString = (string = '', maxLength = 100) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        const itemTitle = truncateString(item.title, 20)

        if (item.video != "") return <div className="home-video-content-blog" key={item.id}>
            <Image src={item.image_url} alt="logo" fill sizes="100%" priority className="home-video-content-blog-image" />
            <Link href={item.video} className="home-video-content-blog-link">
                <Button className="home-video-content-blog-btn" variant="contained" aria-label="play">
                    <FaPlay />
                </Button>
            </Link>
            <div className="home-video-content-blog-window"></div>
            <h4 className="home-video-content-blog-title">{itemTitle}</h4>
        </div>
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // main code for the menu
    
    if (economy_api != "") return (
        <>
            <section className='home'>
                <div className='container'>
                    <div className="home-content">
                        <div className="home-content-grid">
                            {economy_category}
                            <div className="home-content-grid-item-two" data-aos="fade-up" data-aos-duration="1200">
                                <h4 className="home-content-grid-item-two-laster-title">Latest news</h4>
                                <div className="home-content-grid-item-two-blog">
                                    {uz_items}
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className="home-layout-page" data-aos="fade-up" data-aos-duration="1200">
                        <div className="home-layout-page-scroll" >
                            <span>
                                {content_uz}
                            </span>
                        </div>
                    </main>
                    <div className="home-video-content" data-aos="fade-up" data-aos-duration="1200">
                        <h4 className="home-video-content-title">Video News</h4>
                        <div className="home-video-content-group">
                            {dataVideoNews}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    if (economy_api == "")  return (
        <section className='notFoundArticle'>
            <h2 className="notFoundArticle-title">There are currently no articles for this category, so you may enjoy the articles on the main page</h2>
            <Link className='notFoundArticle-link' href="/">Main</Link>
        </section>
    )
    
    // main code for the menu
    
}