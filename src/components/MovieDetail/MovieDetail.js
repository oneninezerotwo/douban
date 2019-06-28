import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'dva'
import './MovieDetail.css'
export default connect(
    (state) => {
        return state
    }
)(class MovieDetail extends Component {
    constructor(props) {
        console.log('-----------constructor-------------')
        super(props)
        this.state = {
            movieIfo: []
        }

    }
    render() {
        const movieId = (this.props.location.search).split('=').splice(1, 1).toString()
        console.log(movieId)
        return (
            <div className="page">
                {
                    this.state.movieIfo.map((item, index) => {
                        if (item.id == movieId) {
                            console.log(item)
                            return (
                                <div className="card" key={index}>
                                    <h1 className="title">{item.title}</h1>
                                    <section className="subject-info">
                                        <div className="right">
                                            <a rel="nofollow" onclick="ga('send', 'event', 'ios', 'click', 'card more link')">
                                                <img src={item.images.large} alt={item.title} className="cover" />
                                            </a>
                                        </div>
                                        <div className="left">
                                            <p className="rating">
                                                <span className="rating-stars" rating={93.0}><span className="rating-star rating-star-medium-full" /><span className="rating-star rating-star-medium-full" /><span className="rating-star rating-star-medium-full" /><span className="rating-star rating-star-medium-full" /><span className="rating-star rating-star-medium-full" /></span>
                                                <strong>{item.rating.average}</strong>
                                                <span>{item.ratings_count}人评价</span>
                                            </p>
                                            <p className="meta">
                                                {item.durations[0]} / {item.genres[0]} / {item.genres[1]}/ {item.genres[2]} / {item.writers[0].name}(导演) / {item.casts[0].name} / {item.casts[1].name}/ {item.casts[2].name} / {item.pubdates[1]} 上映
        </p>
                                        </div>
                                    </section>
                                    <section className="subject-mark" type="movie" id={1291561}>
                                        <div className="mark-item">
                                            <a href="javascript:;" rel="nofollow" name="pbtn-1291561-wish" className>
                                                <span>想看</span>
                                            </a>
                                            <a href="javascript:;" rel="nofollow" name="pbtn-1291561-collect">
                                                <span>看过</span>
                                            </a>
                                        </div>
                                    </section>
                                    <input id="user" type="hidden" defaultValue />
                                    <section id="channel_tags" />
                                    <section className="subject-intro">
                                        <h2>{item.title}的剧情简介</h2>
                                        <div className="bd" style={{ position: 'static' }}>
                                            <p className="zhou" clamp={3} content={item.summary}>{item.summary}<a className="expand" href="javascript:;" style={{ float: 'right' }}>(展开)</a></p>
                                        </div>
                                    </section>
                                    <section className id="celebrities">
                                        <header>
                                            <h2>影人</h2>
                                        </header>
                                        <div className="section-content">
                                            <ul className="row items">
                                                <li className="item item__celebrity">
                                                    <a >
                                                        <div className="item-poster" style={{ backgroundImage: `url(${item.writers[0].avatars.large})` }}>
                                                        </div>
                                                        <span className="item-title name">{item.writers[0].name}</span>
                                                        <span className="item-title role">导演</span>
                                                    </a>
                                                </li>
                                                <li className="item item__celebrity">
                                                    <a >
                                                        <div className="item-poster" style={{ backgroundImage: `url(${item.casts[0].avatars.large})` }}>
                                                        </div>
                                                        <span className="item-title name">{item.casts[0].name}</span>
                                                        <span className="item-title role">演员</span>
                                                    </a>
                                                </li>
                                                <li className="item item__celebrity">
                                                    <a >
                                                        <div className="item-poster" style={{ backgroundImage: `url(${item.casts[1].avatars.large})` }}>
                                                        </div>
                                                        <span className="item-title name">{item.casts[1].name}</span>
                                                        <span className="item-title role">演员</span>
                                                    </a>
                                                </li>
                                                <li className="item item__celebrity">
                                                    <a >
                                                        <div className="item-poster" style={{ backgroundImage: `url(${item.casts[2].avatars.large})` }}>
                                                        </div>
                                                        <span className="item-title name">{item.casts[2].name}</span>
                                                        <span className="item-title role">演员</span>
                                                    </a>
                                                </li>
                                                <li className="item item__celebrity">
                                                    <a >
                                                        <div className="item-poster" style={{ backgroundImage: `url(${item.casts[3].avatars.small})` }}>
                                                        </div>
                                                        <span className="item-title name">{item.casts[3].name}</span>
                                                        <span className="item-title role">演员</span>
                                                    </a>
                                                </li>
                                            </ul>


                                        </div>
                                    </section>
                                    <div className="center">
                                        <div />
                                    </div>
                                    <section className="subject-pics">
                                        <h2>
                                            <span>{item.title}</span>
                                            <span>预告片({item.trailers.length})</span>
                                            <span>和</span>
                                            <span>图片({item.photos_count})</span>
                                        </h2>
                                        <div className="bd photo-list">
                                            <ul className="wx-preview">
                                                <li className="video video-trailer" type="cover" style={{ backgroundImage: `url(${item.trailers[0].medium})` }}>
                                                    <a href="/movie/trailer/248761"><span><img src="https://img3.doubanio.com/f/talion/b6df390a5411896e81ad9be86a97121c17d4c805/pics/card/play-button.png" alt="千与千寻的预告片" /></span></a>
                                                    <div className="time">01:51</div>
                                                </li>
                                                <li className="pic">
                                                    <a href="/photos/photo/2181503501?type=S&pos=0">
                                                        <img alt="千与千寻的剧照_1" src={item.trailers[3] ? item.trailers[3].medium : item.trailers[2].medium} />
                                                    </a>
                                                </li>
                                                <li className="pic">
                                                    <a href="/photos/photo/2512318945?type=S&pos=1">
                                                        <img alt="千与千寻的剧照_2" src={item.trailers[1].medium} />
                                                    </a>
                                                </li>
                                                <li className="pic">
                                                    <a href="/photos/photo/2181503450?type=S&pos=2">
                                                        <img alt="千与千寻的剧照_3" src={item.trailers[2].medium} />
                                                    </a>
                                                </li>

                                                <div className="movie_gallery">
                                                    <a href="/movie/subject/1291561/all_photos">
                                                        <li><span>查看全部剧照/海报/壁纸</span></li>
                                                    </a>
                                                </div>
                                            </ul>
                                        </div>
                                    </section>
                                    <section className="subject-comments">
                                        <h2>{item.title}的短评({item.ratings_count})</h2>
                                        <div className="bd" id="comment-list"><ul reactroot className="list comment-list">
                                            {
                                                item.comments ? item.comments.map((list, lis) => {

                                                    if (lis < 5) {
                                                        console.log(list)
                                                        return (
                                                            <li className><div className="desc">
                                                                <a href="/people/2029148/">
                                                                    <img src={list.author.avatar} alt={list.author.name} />
                                                                </a>
                                                                <div className="user-info">
                                                                    <strong>zing</strong>
                                                                    <span className="rating-stars" rating={5}>
                                                                        <span className={list.rating.value >= 1 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                        <span className={list.rating.value >= 2 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                        <span className={list.rating.value >= 3 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                        <span className={list.rating.value >= 4 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                        <span className={list.rating.value >= 5 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                    </span>
                                                                    <div className="date">11年前</div>
                                                                </div></div>
                                                                <p>{list.content}</p>
                                                                <div className="btn-info">
                                                                    <div className="ic-btn ic-btn-like  left ">
                                                                        <span className="text">{item.useful_count}</span>
                                                                    </div>
                                                                    <div className="ic-btn ic-btn-more   right" /></div>
                                                            </li>
                                                        )
                                                    } else {

                                                    }
                                                }) : ''

                                            }
                                        </ul></div>
                                    </section>
                                    <div className="center">
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ padding: 4, fontSize: 12, right: 0, bottom: 3, color: '#fff', position: 'absolute', lineHeight: 1, backgroundColor: 'rgba(0,0,0,.3)', textAlign: 'center' }}>广告</div></div>
                                    </div>
                                    <section className="subject-rec">
                                        <h2>喜欢{item.title}的人也喜欢</h2>
                                        <div className="bd">
                                            <ul>
                                                <li>
                                                    <a href="/movie/subject/1291583?from=rec" rel>
                                                        <div className="wp">
                                                            <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1446261379.webp" alt="天空之城" type="cover" />
                                                            <h3>天空之城</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1308807?from=rec" rel>
                                                        <div className="wp">
                                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2174346180.webp" alt="哈尔的移动城堡" type="cover" />
                                                            <h3>哈尔的移动城堡</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1297359?from=rec" rel>
                                                        <div className="wp">
                                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1613191025.webp" alt="幽灵公主" type="cover" />
                                                            <h3>幽灵公主</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1291585?from=rec" rel>
                                                        <div className="wp">
                                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1917567652.webp" alt="风之谷" type="cover" />
                                                            <h3>风之谷</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1307811?from=rec" rel>
                                                        <div className="wp">
                                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456676352.webp" alt="魔女宅急便" type="cover" />
                                                            <h3>魔女宅急便</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1959877?from=rec" rel="nofollow">
                                                        <div className="wp">
                                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p454118602.webp" alt="悬崖上的金鱼姬" type="cover" />
                                                            <h3>悬崖上的金鱼姬</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1418019?from=rec" rel="nofollow">
                                                        <div className="wp">
                                                            <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2184505167.webp" alt="大闹天宫" type="cover" />
                                                            <h3>大闹天宫</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1291560?from=rec" rel="nofollow">
                                                        <div className="wp">
                                                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.webp" alt="龙猫" type="cover" />
                                                            <h3>龙猫</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1291579?from=rec" rel="nofollow">
                                                        <div className="wp">
                                                            <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513247938.webp" alt="怪兽电力公司" type="cover" />
                                                            <h3>怪兽电力公司</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/movie/subject/1304970?from=rec" rel="nofollow">
                                                        <div className="wp">
                                                            <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453858009.webp" alt="猫的报恩" type="cover" />
                                                            <h3>猫的报恩</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                    <section className="subject-reviews">
                                        <h2>{item.title}的影评({item.reviews_count})</h2>
                                        <div className="bd">
                                            <ul className="list">
                                                {
                                                    item.popular_reviews.map((num, nums) => {
                                                        console.log(num)
                                                        if (nums < 5) {
                                                            return (
                                                                <li data-id={num.author.id}>
                                                                    <a href="/movie/review/1005608/">
                                                                        <h3>{num.title}</h3>
                                                                        <div>
                                                                            <span className="username">{num.author.name}</span>
                                                                            <span className="rating-stars" rating={5}>
                                                                                <span className={num.rating.value >= 1 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                                <span className={num.rating.value >= 2 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                                <span className={num.rating.value >= 3 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                                <span className={num.rating.value >= 4 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                                <span className={num.rating.value >= 5 ? "rating-star rating-star-medium-full" : "rating-star rating-star-medium-gray"} />
                                                                            </span>
                                                                             </div>
                                                                        <p className="abstract">
                                                                            {num.summary}
                                                                        </p>
                                                                        
                                                                    </a>
                                                                </li>

                                                            )
                                                        }
                                                    })
                                                }

                                                <li className="go-review-list"><a href="/movie/subject/1291561/reviews?from=subject">查看全部影评</a></li>
                                            </ul>
                                        </div>
                                    </section>
                                    <div className="center">
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ padding: 4, fontSize: 12, right: 0, bottom: 3, color: '#fff', position: 'absolute', lineHeight: 1, backgroundColor: 'rgba(0,0,0,.3)', textAlign: 'center' }}>广告</div></div>
                                    </div>
                                    <section className="interests">
                                        <header>
                                            <h2>推荐{item.title}的豆列</h2>
                                        </header>
                                        <div className="section-content">
                                            <ul>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/968362/">同时入选IMDB250和豆瓣电影250的电影</a>
                                                </li>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/223781/">【豆瓣高分动画长片】</a>
                                                </li>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/13712178/">评价人数超过十万的电影（按人数排序）</a>
                                                </li>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/4250734/">灵魂的深处是...【人性题材佳作集·收藏必备】</a>
                                                </li>
                                                <li className="line" />
                                                <li>
                                                    <a href="https://m.douban.com/doulist/855500/">治愈系动画推荐</a>
                                                </li>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/121136/">【大爱の日剧♂电影♀动画全收录】</a>
                                                </li>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/110522/">有生之年非看不可的1001部电影</a>
                                                </li>
                                                <li>
                                                    <a href="https://m.douban.com/doulist/13369/">【爱看动画】</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                    <section className="types">
                                        <header>
                                            <h2>了解更多电影信息</h2>
                                        </header>
                                        <div className="section-content">
                                            <ul className="type-list">
                                                <li>
                                                    <a href="/movie/?from=bottom">返回电影首页<span /></a>
                                                </li>
                                                <li>
                                                    <a href="/movie/doubantop?from=bottom">豆瓣高分<span /></a>
                                                </li>
                                                <li>
                                                    <a href="/movie/latest?from=bottom">新片速递<span /></a>
                                                </li>
                                                <li>
                                                    <a href="/movie/?from=bottom#cate">更多电影分类<span /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                    {/* 
  



<section id="TopicSelectionsWidget">
    <h2>豆瓣正在热议</h2>
    <div class="s-content" id="TopicSelections"></div>
</section> */}
                                    <div className="center">
                                        <div id="dale_talion_subject_movie_bottom" className="Advertisement" />
                                    </div>
                                </div>

                            )
                        }
                    })
                }



            </div>

        )
    }

    componentDidMount() {
        console.log('-----------componentWillMount-------------')
        this.loadMore()
    }
    async loadMore() {
        const movieIfo = (await axios.get('https://www.easy-mock.com/mock/5cfdf75599e00207ba7da021/example/movieIfo', {
            params: {
                start: 0,
                count: 5

            }
        })).data.data

        this.setState({
            movieIfo
        })
    }
})