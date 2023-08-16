import moment from "moment"
import Image from "next/image";
import Link from "next/link";
import Button from '@mui/material/Button';
import { FaPlay } from 'react-icons/fa'
export default async function Api() {
    const API = "http://sobit2204.pythonanywhere.com/api/v1/"
    const api = await fetch(`${API}get_category/`)
    const response = await api.json()
    const apiNews = await fetch(`${API}get_all_news/`)
    const apiNew = await apiNews.json()
    // random elements from apiNews start
    const maxLengthAPI = apiNew.map((item) => {
        return item.id
    })
    // const maxLengthNews = apiNew.length
    // const randomItem = maxLengthAPI[Math.floor(Math.random() * maxLengthNews)]
    // random elements from apiNews end
    
    
    
    const itemsSSh = maxLengthAPI.slice(-1);
    const apiCategory = await fetch(`${API}news/${itemsSSh}`)
    const jsonCategory = await apiCategory.json()
    const random_news = jsonCategory.news_detail_serializer
    const std = response.map((item, key) => {
        return (
            <ul key={key}>
                <li className="">
                    {item.id}
                    <br />
                    {item.name}
                </li>
            </ul>
        )
    })
    
    
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    const urlCategory_one = await fetch(`${API}get_all_news/`)
    const urlCategory_two = await urlCategory_one.json()
    
    const letter_one = urlCategory_two.slice(-4)
    
    const letter_two = letter_one.map((item) => {
        return item.category
    })
    console.log(letter_two)
    
    
    const urlNews = await fetch(`http://sobit2204.pythonanywhere.com/api/v1/category/1`)
    const url = await urlNews.json()
    
    
    
    
    
    
    
    
    
    
    const category = apiNew.map((item, index) => {
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
                <Link href="/article/" className="home-content-grid-item-two-blog-title">
                    <h4 className="home-content-grid-item-two-title">{itemTitle}</h4>
                    <p className="home-content-grid-item-two-data">{dataNews}</p>
                </Link>
            </>
        )
    })
    
    
    

    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    
    
    
    const items = category.slice(-5)
    if (items.length < 5) items
    else items.pop()
    const truncateString = (string = '', maxLength = 100) =>
        string.length > maxLength
            ? `${string.substring(0, maxLength)}…`
            : string
    const itemTitle = truncateString(random_news.title, 55)
    const itemData = moment(random_news.created_at).startOf('minute').fromNow()

    const category_url = "category/"
    const url_category = await fetch(`${API}${category_url}${random_news.category}`)
    const response_url = await url_category.json()

    const page_url = response_url.category.name

    // console.log(page_url);



    const navigation = response.map((item, index) => {
        return <li key={index} className="content-wrapper-category-item">
            <Link href={`/`} className="content-wrapper-category-link">{item.name}</Link>
        </li>
    })
    const newsParty = apiNew.map((item, index) => {
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
    const content = newsParty.slice(0, 3)
    const dataVideoNews = apiNew.map((item) => {
        const truncateString = (string = '', maxLength = 100) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        const itemTitle = truncateString(item.title, 20)

        if (item.video == "") return null;
        else if (item.video != undefined) return (
            <div className="home-video-content-blog" key={item.id}>
                <Image src={item.image_url} alt="logo" fill sizes="100%" priority className="home-video-content-blog-image" />
                <Link href={item.video} className="home-video-content-blog-link">
                    <Button className="home-video-content-blog-btn" variant="contained" aria-label="play">
                        <FaPlay />
                    </Button>
                </Link>
                <div className="home-video-content-blog-window"></div>
                <h4 className="home-video-content-blog-title">{itemTitle}</h4>
            </div>
        )
    })
    if (dataVideoNews != undefined) dataVideoNews.slice(-7)
    if (dataVideoNews.length < 4) dataVideo
    else dataVideoNews.pop()
    return (
        <>
            <section className='home'>
                <title>World Title</title>
                <div className='container'>
                    <div className="home-content">
                        <div className="home-content-grid">
                            <Link href={`article/${page_url}/${random_news.id}`} data-aos="fade-up" data-aos-duration="1200" className="home-content-grid-item-one content-wrapper-header">
                                <Image priority src={random_news.image_url} fill sizes="100%" className='content-wrapper-logo' alt="" />
                                <div className="content-wrapper-card-article-data">
                                    <span className='content-wrapper-card-article-data-text'>{itemData}</span>
                                </div>
                                <div className="content-wrapper-logo-back"></div>
                                <div className="content-wrapper-header-content">
                                    <h2 className="content-wrapper-header-title">{itemTitle}</h2>
                                </div>
                            </Link>
                            <div className="home-content-grid-item-two" data-aos="fade-up" data-aos-duration="1200">
                                <h4 className="home-content-grid-item-two-laster-title">Latest news</h4>
                                <div className="home-content-grid-item-two-blog">
                                    {items}
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className="home-layout-page" data-aos="fade-up" data-aos-duration="1200">
                        <div className="home-layout-page-scroll" >
                            <span>
                                {content}
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
}