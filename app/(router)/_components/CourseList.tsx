// File: src/app/(router)/_components/CourseList.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { getAllCourseList } from '@/app/_utils/GlobalApi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from '@/app/(router)/_components/CourseItem';

interface Banner {
  url?: string;
}

interface Course {
  banner?: Banner;
}

const CourseList: React.FC = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const resp = await getAllCourseList();
        console.log('Response:', resp);
        setCourseList(resp.courseLists || []); // Ensure it's an array
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='p-5 bg-white rounded-lg mt-5'>
      {/* title and filter */}
      <div className='flex items-center justify-between'>
        <h2 className='text-[20px] font-bold'>
          All Courses
        </h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* display course list */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {courseList.map((item, index) => (
          <div key={index}>
            <CourseItem course={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
