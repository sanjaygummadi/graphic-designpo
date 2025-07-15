import React, { useState } from 'react';
import '../styles/Work.css';


const Work = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'lemon Drink',
      category: 'posters',
      image: './images/poster1.png',
      fullImage: './images/poster1.png',
      description: 'Promotion Poster for lemon Drink'
    },
    {
      id: 2,
      title: 'Coffee Offer',
      category: 'posters',
      image: './images/poster2.jpg',
      fullImage: './images/poster2.jpg',
      description: 'Promotion Poster for Coffee Offer'
    },
    {
      id: 3,
      title: 'Food Offer',
      category: 'posters',
      image: './images/poster3.png',
      fullImage: './images/poster3.png',
      description: 'Promotion Poster for Food Offer'
    },
    {
      id: 4,
      title: 'Cycle',
      category: 'posters',
      image: './images/poster4.jpg',
      fullImage: './images/poster4.jpg',
      description: 'Promotion Poster for Cycle'
    },
    {
      id: 5,
      title: 'Audi Car',
      category: 'posters',
      image: './images/poster5.png',
      fullImage: './images/poster5.png',
      description: 'Promotion Poster for Audi Car'
    },
    {
      id: 6,
      title: 'Samosa Offer',
      category: 'posters',
      image: './images/poster6.png',
      fullImage: './images/poster6.png',
      description: 'Promotion Poster for Samosa Offer'
    },
    {
      id: 7,
      title: 'Mango Drink',
      category: 'posters',
      image: './images/poster7.png',
      fullImage: './images/poster7.png',
      description: 'Promotion Poster for Mango Drink'
    },
    {
      id: 8,
      title: 'Porche Car',
      category: 'posters',
      image: './images/poster8.png',
      fullImage: './images/poster8.png',
      description: 'Promotion Poster for Porche Car '
    },
    {
      id: 9,
      title: 'Staberry Drink',
      category: 'posters',
      image: './images/poster9.png',
      fullImage: './images/poster9.png',
      description: 'Promotion Poster for Staberry Drink'
    },
    {
      id: 10,
      title: 'Poster',
      category: 'posters',
      image: './images/poster10.png',
      fullImage: './images/poster10.png',
      description: 'Multi Image Poster'
    },
    {
      id: 11,
      title: 'Money earning',
      category: 'thumbnails',
      image: './images/thumb1.jpg',
      fullImage: './images/thumb1.jpg',
      description: 'Money earning Thumbnail Design'
    },
    {
      id: 12,
      title: 'Food',
      category: 'thumbnails',
      image: './images/thumb2.jpg',
      fullImage: './images/thumb2.jpg',
      description: 'Food Thumbnail Design'
    },
    {
      id: 13,
      title: 'Tour',
      category: 'thumbnails',
      image: './images/thumb3.jpg',
      fullImage: './images/thumb3.jpg',
      description: 'Travel Thumbnail Design'
    },
    {
      id: 14,
      title: 'Focused',
      category: 'thumbnails',
      image: './images/thumb4.jpg',
      fullImage: './images/thumb4.jpg',
      description: 'Focused Thumbnail Design'
    },
    {
      id: 15,
      title: 'Birthday',
      category: 'thumbnails',
      image: './images/thumb5.jpg',
      fullImage: './images/thumb5.jpg',
      description: 'Birthday Thumbnail Design'
    },
    {
      id: 16,
      title: 'Interview',
      category: 'thumbnails',
      image: './images/thumb6.jpg',
      fullImage: './images/thumb6.jpg',
      description: 'Podcast Thumbnail Design'
    },
    {
      id: 17,
      title: 'Haldi',
      category: 'thumbnails',
      image: './images/thumb7.jpg',
      fullImage: './images/thumb7.jpg',
      description: 'Family Thumbnail Design'
    },
    {
      id: 18,
      title: 'Festival',
      category: 'thumbnails',
      image: './images/thumb8.jpg',
      fullImage: './images/thumb8.jpg',
      description: 'Celebrations Thumbnail Design'
    },
    {
      id: 19,
      title: 'Pooja',
      category: 'thumbnails',
      image: './images/thumb9.jpg',
      fullImage: './images/thumb9.jpg',
      description: 'God celebrations Thumbnail Design'
    },
    {
      id: 20,
      title: 'Demo',
      category: 'thumbnails',
      image: './images/thumb10.jpg',
      fullImage: './images/thumb10.jpg',
      description: 'Demo Thumbnail Design'
    },
    {
      id: 21,
      title: 'Bride',
      category: 'photos',
      image: './images/photo1.jpg',
      fullImage: './images/photo1.jpg',
      description: 'Marriage Bride Photo'
    },
    {
      id: 22,
      title: 'Birthday',
      category: 'photos',
      image: './images/photo2.jpg',
      fullImage: './images/photo2.jpg',
      description: 'Baby Birthday Photo'
    },
    {
      id: 23,
      title: 'Wedding',
      category: 'photos',
      image: './images/photo3.jpg',
      fullImage: './images/photo3.jpg',
      description: 'Marriage Shoot Photo'
    },
    {
      id: 24,
      title: 'Birthday',
      category: 'photos',
      image: './images/photo4.jpg',
      fullImage: './images/photo4.jpg',
      description: 'Baby Birthday Photo'
    },
    {
      id: 25,
      title: 'Kohli',
      category: 'photos',
      image: './images/photo5.jpg',
      fullImage: './images/photo5.jpg',
      description: 'Kohli Name Photo'
    },
    {
      id: 26,
      title: 'Birthday',
      category: 'photos',
      image: './images/photo6.jpg',
      fullImage: './images/photo6.jpg',
      description: 'Baby Birthday Photo'
    },
    {
      id: 27,
      title: 'Doble Photo',
      category: 'photos',
      image: './images/photo7.jpg',
      fullImage: './images/photo7.jpg',
      description: 'Double Photo Editing'
    },
    {
      id: 28,
      title: 'Name',
      category: 'photos',
      image: './images/photo8.jpg',
      fullImage: './images/photo8.jpg',
      description: 'Title Highlite Photo Editing'
    },
    {
      id: 29,
      title: 'Wedding',
      category: 'photos',
      image: './images/photo9.jpg',
      fullImage: './images/photo9.jpg',
      description: 'Couple Photo Editing'
    },
    {
      id: 30,
      title: 'Announcement',
      category: 'photos',
      image: './images/photo10.jpg',
      fullImage: './images/photo10.jpg',
      description: 'Marriage Annoucement Photo Editing'
    },
    {
      id: 31,
      title: 'Couple',
      category: 'photos',
      image: './images/photo11.jpg',
      fullImage: './images/photo11.jpg',
      description: 'Couple shoot Photo Editing'
    },
    {
      id: 32,
      title: 'Card',
      category: 'print',
      image: './images/print1.png',
      fullImage: './images/print1.png',
      description: 'Profesional Visiting Card'
    },
    {
      id: 33,
      title: 'Promotion',
      category: 'print',
      image: './images/print2.png',
      fullImage: './images/print2.png',
      description: 'Sports promotional design'
    },
    {
      id: 34,
      title: 'Service',
      category: 'print',
      image: './images/print3.png',
      fullImage: './images/print3.png',
      description: 'Service promotional design'
    },
    {
      id: 35,
      title: 'School',
      category: 'print',
      image: './images/print4.png',
      fullImage: './images/print4.png',
      description: 'Acadamics promotional design'
    },
    {
      id: 36,
      title: 'Watch',
      category: 'print',
      image: './images/print5.png',
      fullImage: './images/print5.png',
      description: 'Product promotional design'
    },
    {
      id: 37,
      title: 'Food',
      category: 'print',
      image: './images/print6.png',
      fullImage: './images/print6.png',
      description: 'Food promotional design'
    },
    {
      id: 38,
      title: 'Apartment',
      category: 'print',
      image: './images/print7.png',
      fullImage: './images/print7.png',
      description: 'construction promotional design'
    },
    
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'posters', label: 'Posters' },
    { id: 'thumbnails', label: 'Thumbnails' },
    { id: 'photos', label: 'Photos' },
    { id: 'print', label: 'Print' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="section-header">
          <h2 className="section-title">My Work</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A showcase of my recent projects and creative solutions
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button 
                      className="view-project-btn"
                      onClick={() => setSelectedImage(project.fullImage)}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* <button className="close-modal" onClick={() => setSelectedImage(null)}>Back</button> */}
              <div className="modal-image-wrapper">
                <img src={selectedImage} alt="Full View" />
                <p className="modal-caption">
                  {projects.find(p => p.fullImage === selectedImage)?.title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
