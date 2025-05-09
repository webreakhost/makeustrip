import React from 'react';

const Trending = () => {
  const articles = [
    {
      imgSrc: "/assets/img/blog-1.jpg",
      category: "Destination",
      title: "Make Your Next Journey Delhi To Paris in Comfortable And Best Price",
      description: "Think of a news blog that's filled with content hourly. Besides, random text risks being unintentionally humorous or offensive on the day of going live.",
      link: "#"
    },
    {
      imgSrc: "/assets/img/blog-2.jpg",
      category: "Journey",
      title: "Make Your Next Journey Delhi To Paris in Comfortable And Best Price",
      description: "Think of a news blog that's filled with content hourly. Besides, random text risks being unintentionally humorous or offensive on the day of going live.",
      link: "#"
    },
    {
      imgSrc: "/assets/img/blog-3.jpg",
      category: "Business",
      title: "Make Your Next Journey Delhi To Paris in Comfortable And Best Price",
      description: "Think of a news blog that's filled with content hourly. Besides, random text risks being unintentionally humorous or offensive on the day of going live.",
      link: "#"
    }
  ];

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
              <div className="secHeading-wrap text-center mb-5">
                <h2>Trending & Popular Articles</h2>
                <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {articles.map((article, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12" key={index}>
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <a href={article.link} className="d-block">
                      <img src={article.imgSrc} className="img-fluid rounded" alt="Blog image" />
                    </a>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1">
                      <span className="label text-success bg-light-success">{article.category}</span>
                    </div>
                    <h4 className="fw-bold fs-6 lh-base">
                      <a href={article.link} className="text-dark">
                        {article.title}
                      </a>
                    </h4>
                    <p className="mb-3">{article.description}</p>
                    <a className="text-primary fw-medium" href={article.link}>
                      Read More
                      <i className="fa-solid fa-arrow-trend-up ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;