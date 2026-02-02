import React, { useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import TourDetailLayout from '../components/TourDetailLayout';
import { toursData } from '../data/toursData';

const TourDetail = () => {
    const { slug } = useParams();
    const location = useLocation();

    // Fallback for cases where slug might be empty but we have a direct route
    const currentSlug = slug || location.pathname.split('/').pop();

    const tour = toursData[currentSlug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentSlug]);

    if (!tour) {
        return <Navigate to="/tour-packages" replace />;
    }

    return <TourDetailLayout {...tour} />;
};

export default TourDetail;
