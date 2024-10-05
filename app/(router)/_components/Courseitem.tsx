// File: src/app/(router)/_components/CourseItem.tsx

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Course {
  banner?: {
    url?: string;
  };
  name: string;
  author: string;
  free: string;
}

interface CourseItemProps {
  course: Course;
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to show skeleton loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const bannerUrl = course.banner?.url;

  return (
    <div className="course-item border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-200">
      {loading ? (
        <Skeleton height={300} width={500} className='rounded-t-xl' />
      ) : (
        bannerUrl ? (
          <Image src={bannerUrl} width={500} height={300} alt="Course Banner" className='rounded-t-xl' />
        ) : (
          <div style={{ width: 500, height: 300, backgroundColor: '#e0e0e0' }}>
            <span>No Banner Available</span>
          </div>
        )
      )}
      <div className='flex flex-col gap-1 p-2'>
        {loading ? (
          <>
            <Skeleton height={20} width={`60%`} />
            <Skeleton height={15} width={`40%`} />
            <Skeleton height={15} width={`30%`} />
          </>
        ) : (
          <>
            <h2 className='font-semibold'>{course.name}</h2>
            <h2 className='text-[12px] text-gray-400'>{course.author}</h2>
            <div className='flex gap-2'>
              <Image src='/youtube.png' width={20} height={20} alt='youtube icon'/>
              <h2 className='text-[12px] text-gray-400'>Watch on youtube</h2>
            </div>
            <h2>
              {course?.free ? 'Free' : 'Paid'}
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseItem;
