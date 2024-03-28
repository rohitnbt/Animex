import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ContentWrapper } from '../../components/contentWrapper/ContentWrapper';
import { fetchDataFromApi } from '../../utils/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../../components/spinner/Spinner';
import { useSelector } from 'react-redux';

export const Explore = () => {
    const { mediaType} = useParams();
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const isMobile = useSelector((state) => state.mobile.isMobile);
    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/${mediaType}?&page=${pageNum}`).then(
            (res) => {
                setData(res);
                setPageNum((prev) => prev + 1);
                setLoading(false);
            }
        );
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(`/${mediaType}?&page=${pageNum}`).then(
            (res) => {
                if (data?.data) {
                    setData({
                        ...data,
                        data: [...data?.data, ...res.data],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [mediaType]);
  return (
    <ContentWrapper>
    <div className='search-result'>
        <div className="header">
            <h2>{mediaType}</h2>
        </div>
        {
            !loading ? (
                <InfiniteScroll className="slides"
                              dataLength={data?.data?.length || []}
                              next={fetchNextPageData}
                              hasMore={pageNum <= data?.pagination.last_visible_page}
                              loader={<Spinner />}
                        >
            {
                data?.data.map((item)=>
                    <div className="slide" key={item.mal_id} onClick={()=>{navigate(`/anime/${item.mal_id}`)}}>
                        <div className="image-overlay"></div>
                        <img src={item.images.jpg.image_url} alt="" />
                        <h3>{item.title || item.given_name || item.name}</h3>
                    </div>
                )
            }
        </InfiniteScroll>
            ) :
            (
                <div className='skeleton-item'>
                    <div className="skeleton slide"></div>
                    <div className="skeleton slide"></div>
                    {
                        !isMobile && (
                            <>
                                <div className="skeleton slide"></div>
                                <div className="skeleton slide"></div>
                                <div className="skeleton slide"></div>
                            </>
                        )
                    }
                </div>
            )
        }
        
    </div>
</ContentWrapper>
  )
}
