// File: src/app/_utils/GlobalApi.ts

import { gql, request } from 'graphql-request';

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/clz6smh4h04ap07uz08vnsgj8/master";

export const getAllCourseList = async () => {
    const query = gql`
      query MyQuery {
  courseLists {
    author
    banner {
      url
    }
    name
    description
    id
    sourcecode
    chapter {
      ... on Chpater {
        id
        name
        youtubeUrl
        shortDesc
      }
    }
    free
    totalChapters
  }
}
    `;
    // 

    try {
        const response = await request(MASTER_URL, query);
        
        return response;
    } catch (error) {
        console.error('Error fetching course list:', error);
        throw error;
    }
};
