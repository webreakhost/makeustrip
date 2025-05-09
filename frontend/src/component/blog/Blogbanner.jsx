import React from 'react'

const Blogbanner = () => {
  return (
    <div>
        {/* <section className="bg-cover position-relative" style="background:url(assets/img/bg-title.jpg)no-repeat;" data-overlay="5"> */}
        <section 
  className="bg-cover position-relative" 
  style={{ background: "url('assets/img/bg-title.jpg') no-repeat" }} 
  data-overlay="5"
>
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-xl-7 col-lg-9 col-md-12">

						<div className="fpc-capstion text-center my-4">
							<div className="fpc-captions">
								<h1 className="xl-heading text-light">Trending News</h1>
								<p className="text-light">Welcome to our travel blog, where every journey tells a story! From breathtaking landscapes to hidden gems, we bring you the best travel tips, destination guides, and unforgettable experiences. Whether you're seeking adventure, relaxation, or cultural exploration, we’ve got you covered. Let’s wander the world together—one destination at a time!</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
      
    </div>
  )
}

export default Blogbanner
