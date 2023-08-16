import Image from "next/image";
import Link from 'next/link';
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
export default async function Footer() {
    const API = "http://sobit2204.pythonanywhere.com/api/v1/"
    const categories = "get_all_news/"
    const category_item = "category/"


    const api = await fetch(`${API}${categories}`)
    const response = await api.json()
    const articles_id = response.map((item, index) => {
        
        const truncateString = (string = '', maxLength = 50) =>
            string.length > maxLength
                ? `${string.substring(0, maxLength)}…`
                : string
        const truncateTitle = truncateString(item.title, 40)
        
        return (
            <li key={index} className="footer-blog-two-item">
                <div className="footer-blog-two-item-logo">
                    <Image src={item.image_url} alt="logo" fill sizes="100%" priority className="footer-blog-two-item-image" />
                </div>
                <h4 className="footer-blog-two-pass-title">{truncateTitle}</h4>
            </li>
        )
    })

    const article_last_news = articles_id.slice(-4)




    // category name and id // number 1
    const article_1 = await fetch(`${API}${category_item}1`)
    const res_category_1 = await article_1.json()
    // category name and id // number 2
    const article_2 = await fetch(`${API}${category_item}2`)
    const res_category_2 = await article_2.json()
    // category name and id // number 3
    const article_3 = await fetch(`${API}${category_item}3`)
    const res_category_3 = await article_3.json()
    // category name and id // number 4
    const article_4 = await fetch(`${API}${category_item}4`)
    const res_category_4 = await article_4.json()
    // category name and id // number 5
    const article_5 = await fetch(`${API}${category_item}5`)
    const res_category_5 = await article_5.json()
    // category name and id // number 6
    const article_6 = await fetch(`${API}${category_item}6`)
    const res_category_6 = await article_6.json()
    // category name and id // number 7
    const article_7 = await fetch(`${API}${category_item}7`)
    const res_category_7 = await article_7.json()

    let res_1 = { "article_length": res_category_1.news_items.length, "name": res_category_1.category.name };
    let res_2 = { "article_length": res_category_2.news_items.length, "name": res_category_2.category.name };
    let res_3 = { "article_length": res_category_3.news_items.length, "name": res_category_3.category.name };
    let res_4 = { "article_length": res_category_4.news_items.length, "name": res_category_4.category.name };
    let res_5 = { "article_length": res_category_5.news_items.length, "name": res_category_5.category.name };
    let res_6 = { "article_length": res_category_6.news_items.length, "name": res_category_6.category.name };
    let res_7 = { "article_length": res_category_7.news_items.length, "name": res_category_7.category.name };
    const result_id = [res_1, res_2, res_3, res_4, res_5, res_6, res_7]
    const articles = result_id.map((item, index) => {
        if (item.article_length >= 99) {
            return (
                <li key={index} className="footer-blog-three-item">
                    <h6 className="footer-blog-three-item-title">{item.name}</h6>
                    <span className="footer-blog-three-item-span">99+</span>
                </li>
            )
        }
        else {
            return (
                <li key={index} className="footer-blog-three-item">
                    <h6 className="footer-blog-three-item-title">{item.name}</h6>
                    <span className="footer-blog-three-item-span">{item.article_length}</span>
                </li>
            )
        }
    })

    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-blog-one footer-blog">
                            <h4 className="footer-blog-title footer-blog-main-title">WorldTime</h4>
                            <p className="footer-blog-one-text">Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.</p>
                            <ul className="footer-blog-one-list">
                                <a href="#!" className="footer-blog-one-item">
                                    <FaFacebookF />
                                </a>
                                <a href="#!" className="footer-blog-one-item">
                                    <BsYoutube />
                                </a>
                                <a href="#!" className="footer-blog-one-item">
                                    <FaTwitter />
                                </a>
                            </ul>
                        </div>
                        <div className="footer-blog-two footer-blog">
                            <h4 className="footer-blog-title footer-blog-secondary-title">RECENT POSTS</h4>
                            <ul className="footer-blog-two-list">
                                {article_last_news}
                            </ul>
                        </div>
                        <div className="footer-blog-three footer-blog">
                            <h4 className="footer-blog-title footer-blog-secondary-title">CATEGORIES</h4>
                            <ul className="footer-blog-three-list">
                                {articles}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='bottom-footer'>

            </footer>
        </>
    )
}
