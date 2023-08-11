import "bootstrap/dist/css/bootstrap.min.css";
import NameSection from '../NameSection';
import React, { useState } from 'react';
import PopularpostSection from '../PopularPostSection';
import TagSection from '../TagSection';
import FooterSection from '../FooterSection';
import BlogSection from "../BlogSection";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import "../assets/css/Home.css";

const Home = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const tags = [
    'Travel', 'New York', 'London', 'IKEA', 'NORWAY',
    'DIY Ideas', 'Baby', 'Family', 'News', 'Clothing',
    'Shopping', 'Sports', 'Games'
  ];

  const getTwoPostsPerCategory = (category) => {
    return posts.filter(post => post.category === category).slice(0, 2);
  };
const postsData = [
  {
    id: 1,
    title: 'Popular Post 1',
    description: 'Description for Popular Post 1',
    imageUrl:post1,
   
  },
  {
    id: 2,
    title: 'Popular Post 2',
    description: 'Description for Popular Post 2',
    imageUrl:post2,
   
  },
  {
    id: 3,
    title: 'Popular Post 2',
    description: 'Description for Popular Post 2',
    imageUrl:post2,
   
  },
  
  // Add more popular post data
];
const posts = [
  {
    id: 1,
    title: 'Traveling to New York',
    description: 'Exploring the Big Apple Ea aute occaecat qui commodo...',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-11',
    category: 'Travel'
  },
  {
    id: 2,
    title: 'Traveling to London',
    description: 'Discovering the charm of London,In magna nisi sit deserunt amet...',
    imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
    date: '2023-08-10',
    category: 'Travel'
  },
  {
    id: 3,
    title: 'New York City Life',
    description: 'Diving into the city that never sleeps,Esse laboris laboris proident...',
    imageUrl: 'https://www.w3schools.com/w3images/nature.jpg',
    date: '2023-08-09',
    category: 'New York'
  },
  {
    id: 4,
    title: 'The Best of London',
    description: 'Experiencing the highlights of London,Incididunt cupidatat culpa...',
    imageUrl: 'https://www.w3schools.com/w3images/nature.jpg',
    date: '2023-08-08',
    category: 'London'
  },
  {
    id: 5,
    title: 'IKEA Furniture Guide',
    description: 'Navigating the world of IKEA furniture,Fugiat id velit laboris eu enim...',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-07',
    category: 'IKEA'
  },
  {
    id: 6,
    title: 'DIY Home Decor Ideas',
    description: 'Getting creative with DIY home decor ideas,Duis labore nostrud proident...',
    imageUrl: 'https://www.w3schools.com/w3images/nature.jpg',
    date: '2023-08-06',
    category: 'DIY Ideas'
  },
  // Add more posts for other categories
    {
      id: 7,
      title: 'Baby First Steps',
      description: 'Documenting the joy of a baby taking their first steps,Nulla in incididunt officia...',
      imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
      date: '2023-08-05',
      category: 'Baby'
    },
    {
      id: 8,
      title: 'Family Vacation Memories',
      description: 'Creating lasting memories on a family vacation,Exercitation ullamco in...',
      imageUrl: 'https://www.w3schools.com/w3images/rocks.jpg',
      date: '2023-08-04',
      category: 'Family'
    },
    {
      id: 9,
      title: 'Latest News Roundup',
      description: 'Staying informed with the latest news headlines,Adipisicing occaecat...',
      imageUrl: 'https://www.w3schools.com/w3images/nature.jpg',
      date: '2023-08-03',
      category: 'News'
    },
    {
      id: 10,
      title: 'Summer Clothing Trends',
      description: 'Exploring the latest trends in summer clothing,Elit minim veniam ex...',
      imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
      date: '2023-08-02',
      category: 'Clothing'
    },
    {
      id: 11,
      title: 'Tech Gadgets Review',
      description: 'Reviewing the coolest tech gadgets of the year,Labore sunt sint irure...',
      imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
      date: '2023-08-01',
      category: 'Shopping'
    },
    {
      id: 12,
      title: 'Sports Highlights',
      description: 'Recapping the exciting sports moments of the season,Labore adipisicing...',
      imageUrl: 'https://www.w3schools.com/w3images/nature.jpg',
      date: '2023-07-31',
      category: 'Sports'
    },
    {
      id: 13,
      title: 'Board Games Night',
      description: 'Enjoying a night of board games with friends,Non adipisicing...',
      imageUrl: 'https://www.w3schools.com/w3images/rocks.jpg',
      date: '2023-07-30',
      category: 'Games'
    },
    // Add more posts for other categories
    
  // Sample post data, replace with your actual data
  {
    id: 1,
    title: 'Traveling to New York',
    description: 'Exploring the Big Apple Ea aute occaecat qui commodo. Id velit eu ut consequat dolore laborum mollit aliqua deserunt non magna. Do magna veniam eiusmod dolore eu. Ex ut deserunt fugiat elit qui. Duis ad labore proident et proident ipsum mollit sunt magna.',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-11'
  },
  {
    id: 2,
    title: 'Traveling to New York',
    description: 'Exploring the Big Apple Ea aute occaecat qui commodo. Id velit eu ut consequat dolore laborum mollit aliqua deserunt non magna. Do magna veniam eiusmod dolore eu. Ex ut deserunt fugiat elit qui. Duis ad labore proident et proident ipsum mollit sunt magna.',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-11'
  },
  {
    id: 3,
    title: 'Traveling to New York',
    description: 'Exploring the Big Apple Ea aute occaecat qui commodo. Id velit eu ut consequat dolore laborum mollit aliqua deserunt non magna. Do magna veniam eiusmod dolore eu. Ex ut deserunt fugiat elit qui. Duis ad labore proident et proident ipsum mollit sunt magna.',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-11'
  },
  {
    id: 4,
    title: 'Traveling to New York',
    description: 'Exploring the Big Apple Ea aute occaecat qui commodo. Id velit eu ut consequat dolore laborum mollit aliqua deserunt non magna. Do magna veniam eiusmod dolore eu. Ex ut deserunt fugiat elit qui. Duis ad labore proident et proident ipsum mollit sunt magna.',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-11'
  },
  {
    id: 5,
    title: 'Traveling to New York',
    description: 'Exploring the Big Apple Ea aute occaecat qui commodo. Id velit eu ut consequat dolore laborum mollit aliqua deserunt non magna. Do magna veniam eiusmod dolore eu. Ex ut deserunt fugiat elit qui. Duis ad labore proident et proident ipsum mollit sunt magna.',
    imageUrl: 'https://www.w3schools.com/w3images/woods.jpg',
    date: '2023-08-11'
  },
  {
    id: 6,
    title: 'London Adventures',
    description: 'Discovering the charm of London,In magna nisi sit deserunt amet excepteur cupidatat veniam officia. Culpa ex qui Lorem officia id sunt elit aliquip sunt commodo ad. Incididunt eu ullamco veniam eu ad sunt labore anim magna amet. Id exercitation nisi excepteur est. Fugiat id velit laboris eu enim quis aliqua laborum do voluptate exercitation. Pariatur labore est tempor aliqua incididunt ea nulla sunt esse sit sint deserunt fugiat incididunt.',
    imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
    date: '2023-08-10'
  },
  {
    id: 7,
    title: 'London Adventures',
    description: 'Discovering the charm of London,In magna nisi sit deserunt amet excepteur cupidatat veniam officia. Culpa ex qui Lorem officia id sunt elit aliquip sunt commodo ad. Incididunt eu ullamco veniam eu ad sunt labore anim magna amet. Id exercitation nisi excepteur est. Fugiat id velit laboris eu enim quis aliqua laborum do voluptate exercitation. Pariatur labore est tempor aliqua incididunt ea nulla sunt esse sit sint deserunt fugiat incididunt.',
    imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
    date: '2023-08-10'
  },
  {
    id: 8,
    title: 'London Adventures',
    description: 'Discovering the charm of London,In magna nisi sit deserunt amet excepteur cupidatat veniam officia. Culpa ex qui Lorem officia id sunt elit aliquip sunt commodo ad. Incididunt eu ullamco veniam eu ad sunt labore anim magna amet. Id exercitation nisi excepteur est. Fugiat id velit laboris eu enim quis aliqua laborum do voluptate exercitation. Pariatur labore est tempor aliqua incididunt ea nulla sunt esse sit sint deserunt fugiat incididunt.',
    imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
    date: '2023-08-10'
  },
  {
    id: 9,
    title: 'London Adventures',
    description: 'Discovering the charm of London,In magna nisi sit deserunt amet excepteur cupidatat veniam officia. Culpa ex qui Lorem officia id sunt elit aliquip sunt commodo ad. Incididunt eu ullamco veniam eu ad sunt labore anim magna amet. Id exercitation nisi excepteur est. Fugiat id velit laboris eu enim quis aliqua laborum do voluptate exercitation. Pariatur labore est tempor aliqua incididunt ea nulla sunt esse sit sint deserunt fugiat incididunt.',
    imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
    date: '2023-08-10'
  },
  {
    id: 10,
    title: 'London Adventures',
    description: 'Discovering the charm of London,In magna nisi sit deserunt amet excepteur cupidatat veniam officia. Culpa ex qui Lorem officia id sunt elit aliquip sunt commodo ad. Incididunt eu ullamco veniam eu ad sunt labore anim magna amet. Id exercitation nisi excepteur est. Fugiat id velit laboris eu enim quis aliqua laborum do voluptate exercitation. Pariatur labore est tempor aliqua incididunt ea nulla sunt esse sit sint deserunt fugiat incididunt.',
    imageUrl: 'https://www.w3schools.com/w3images/bridge.jpg',
    date: '2023-08-10'
  },
  // Add more posts
];
const filteredPosts = selectedTag
    ? getTwoPostsPerCategory(selectedTag)
    : posts.slice(0, 2);

  return (
    <>
      <div className='container-main'>
        <div className="top">
          <h1>
            <b>
              MY BLOG
            </b>
          </h1>
          <p>Welcome to the blog of<span className="unknown">unknown</span> </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 l8">
              <BlogSection posts={filteredPosts} />
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-14">
                  <NameSection />
                </div>
                <div className="col-md-12">
                  <PopularpostSection postsData={postsData} />
                </div>
                <div className="col-md-12">
                  <TagSection
                    tags={tags}
                    selectedTag={selectedTag}
                    onTagClick={tag => setSelectedTag(tag)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection/>
    </>
  );
};

export default Home;
