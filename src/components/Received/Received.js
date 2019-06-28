import React, { Component } from 'react';
import { connect } from 'dva'
import axios from 'axios'
import './Received.css';
import { Link } from 'dva/router'
export default connect((state) => {
    return state
})(class Content extends Component {
    constructor(props) {
        console.log('-----------constructor-------------')
        super(props)
        this.state = {
            news: []
        }

    }
    render() {
        return (
            <div>
                <h1>影院热映</h1>
                <section id="list" className="grid" >
                    {
                        this.state.news.map((item, index) => {
                            return (
                                <Link   to={{
                                    pathname: '/moviedetail',
                                    search: `?tab=${item.movie_id}`
                                }}  key={index} className="item">
                                    <div className="cover">
                                        <div className="wp ratio3_4">
                                            <img src={item.img} alt={item.nm} data-x={1080} data-y={1560} className="img-show" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h4 />
                                        <h3>{item.nm}</h3>
                                        <p className="rank">
                                           { (item.sc > 0)?(<div><span className="rating-stars" data-rating="4.7"><span className={item.sc<1?"rating-star rating-star-small-gray":'rating-star rating-star-small-full'} /><span className={item.sc<3?"rating-star rating-star-small-gray":'rating-star rating-star-small-full'} /><span className={item.sc<5?"rating-star rating-star-small-gray":'rating-star rating-star-small-full'} /><span className={item.sc<8?"rating-star rating-star-small-gray":'rating-star rating-star-small-full'} /><span className={item.sc<9?"rating-star rating-star-small-gray":'rating-star rating-star-small-full'} /></span> <span>{item.sc}</span></div>):(<div>暂无评价</div>)} 
                                            
                                        </p>
                                        <p className="meta">{item.star}</p>
                                        <cite />
                                    </div>
                                </Link>

                            )
                        })
                    }

                </section>

            </div>
        )
    }
    // changeData(){
    //     this.props.dispatch({
    //         type: 'Movie/GetMovie',
    //         payload: {
    //            movieId:'123'
    //         }
    //     })
    // }
    componentDidMount() {
        this.loadMore()
    }
    async loadMore() {
        const news = (await axios.get('https://www.easy-mock.com/mock/5cfdf75599e00207ba7da021/example/douban', {
            params: {
                start: 0,
                count: 5

            }
        })).data

        this.setState({
            news
        })
    }

})
