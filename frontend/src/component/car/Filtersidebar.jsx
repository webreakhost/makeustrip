import React from 'react'

const Filtersidebar = () => {
  return (
    <div class="col-xl-3 col-lg-4 col-md-12">
						<div class="filter-searchBar bg-white rounded-3">
							<div class="filter-searchBar-head border-bottom">
								<div class="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
									<div class="searchBar-headerfirst">
										<h6 class="fw-bold fs-5 m-0">Filters</h6>
										<p class="text-md text-muted m-0">Showing 180 Flights</p>
									</div>
									<div class="searchBar-headerlast text-end">
										<a href="#" class="text-md fw-medium text-primary active">Clear All</a>
									</div>
								</div>
							</div>

							<div class="filter-searchBar-body">

								{/* <!-- Supplier & Seats --> */}
								<div class="searchBar-single px-3 py-3 border-bottom">
									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Supplier</h6>
									</div>
									<div class="searchBar-single-wrap mb-4">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2">
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="easirent"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width"
													for="easirent">Easirent</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="hertz"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="hertz">Hertz</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="national"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width"
													for="national">National</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="greenmotion"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="greenmotion">Green
													Motion</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="sixt"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="sixt">SIXT</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="almo"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="almo">ALAMO</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="avis"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="avis">Avis</label>
											</li>
										</ul>
									</div>

									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Seats</h6>
									</div>
									<div class="searchBar-single-wrap">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="5seats"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="5seats">4-5
													Seats</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="7seats"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="7seats">5-7
													Seats</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="others"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width"
													for="others">Others</label>
											</li>
										</ul>
									</div>

								</div>

								{/* <!-- Supplier Policy --> */}
								<div class="searchBar-single px-3 py-3 border-bottom">
									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Supplier Policy</h6>
									</div>
									<div class="searchBar-single-wrap">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2">
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="intantconfirm"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width"
													for="intantconfirm">Instant Confirmation</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="freecancel"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="freecancel">Free
													Cancellation</label>
											</li>
										</ul>
									</div>

									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Car Accessories</h6>
									</div>
									<div class="searchBar-single-wrap">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="aircondition"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="aircondition">Air
													Conditioning</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="fulltofull"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="fulltofull">Full to
													Full</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="sametosame"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="sametosame">Same To
													Same</label>
											</li>
										</ul>
									</div>

								</div>

								{/* <!-- Pricing --> */}
								<div class="searchBar-single px-3 py-3 border-bottom">
									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Pricing Range in US$</h6>
									</div>
									<div class="searchBar-single-wrap">
										<input type="text" class="js-range-slider" name="my_range" value="" data-skin="round"
											data-type="double" data-min="0" data-max="1000" data-grid="false"/>
									</div>
								</div>

								{/* <!-- Rating --> */}
								<div class="searchBar-single px-3 py-3 border-bottom">
									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Rating</h6>
									</div>
									<div class="searchBar-single-wrap">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="fourplus"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="fourplus">4.5 or
													Higher</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="fourhigher"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="fourhigher">4 or
													Higher</label>
											</li>
										</ul>
									</div>

								</div>

								{/* <!-- Payment Method --> */}
								<div class="searchBar-single px-3 py-3 border-bottom">
									<div class="searchBar-single-title d-flex mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Payment Method</h6>
									</div>
									<div class="searchBar-single-wrap">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="pickup"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="pickup">Pay at
													pick-up</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="prepay"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="prepay">Prepay
													Online</label>
											</li>
											<li class="col-6">
												<input type="checkbox" class="btn-check" id="prepaid"/>
												<label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="prepaid">Prepaid
													Deposit</label>
											</li>
										</ul>
									</div>

								</div>

								{/* <!-- Car Modal --> */}
								<div class="searchBar-single px-3 py-3">
									<div class="searchBar-single-title d-flex align-items-center justify-content-between mb-3">
										<h6 class="sidebar-subTitle fs-6 fw-medium m-0">Car Modal</h6>
										<a href="#" class="text-md fw-medium text-muted active">Reset</a>
									</div>
									<div class="searchBar-single-wrap">
										<ul class="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
											<li class="col-12">
												<div class="form-check lg">
													<div class="frm-slicing d-flex align-items-center">
														<div class="frm-slicing-first">
															<input class="form-check-input" type="checkbox" id="hyundai"/>
															<label class="form-check-label" for="hyundai"></label>
														</div>
														<div
															class="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
															<div class="frms-flex d-flex align-items-center">
																<div class="frm-slicing-img"><img src="/assets/img/air-1.png" class="img-fluid" width="25"
																		alt=""/></div>
																<div class="frm-slicing-title ps-2"><span class="text-muted-2">Hyundai</span></div>
															</div>
															<div class="text-end"><span class="text-md text-muted-2 opacity-75">$390.00</span></div>
														</div>
													</div>

												</div>
											</li>
											<li class="col-12">
												<div class="form-check lg">
													<div class="frm-slicing d-flex align-items-center">
														<div class="frm-slicing-first">
															<input class="form-check-input" type="checkbox" id="marutis"/>
															<label class="form-check-label" for="marutis"></label>
														</div>
														<div
															class="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
															<div class="frms-flex d-flex align-items-center">
																<div class="frm-slicing-img"><img src="/assets/img/air-2.png" class="img-fluid" width="25"
																		alt=""/></div>
																<div class="frm-slicing-title ps-2"><span class="text-muted-2">Maruti Suzuki</span>
																</div>
															</div>
															<div class="text-end"><span class="text-md text-muted-2 opacity-75">$310.00</span></div>
														</div>
													</div>

												</div>
											</li>
											<li class="col-12">
												<div class="form-check lg">
													<div class="frm-slicing d-flex align-items-center">
														<div class="frm-slicing-first">
															<input class="form-check-input" type="checkbox" id="tata"/>
															<label class="form-check-label" for="tata"></label>
														</div>
														<div
															class="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
															<div class="frms-flex d-flex align-items-center">
																<div class="frm-slicing-img"><img src="/assets/img/air-3.png" class="img-fluid" width="25"
																		alt=""/></div>
																<div class="frm-slicing-title ps-2"><span class="text-muted-2">Tata</span></div>
															</div>
															<div class="text-end"><span class="text-md text-muted-2 opacity-75">$390.00</span></div>
														</div>
													</div>

												</div>
											</li>
											<li class="col-12">
												<div class="form-check lg">
													<div class="frm-slicing d-flex align-items-center">
														<div class="frm-slicing-first">
															<input class="form-check-input" type="checkbox" id="mahindra"/>
															<label class="form-check-label" for="mahindra"></label>
														</div>
														<div
															class="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
															<div class="frms-flex d-flex align-items-center">
																<div class="frm-slicing-img"><img src="/assets/img/air-4.png" class="img-fluid" width="25"
																		alt=""/></div>
																<div class="frm-slicing-title ps-2"><span class="text-muted-2">Mahindra</span></div>
															</div>
															<div class="text-end"><span class="text-md text-muted-2 opacity-75">$410.00</span></div>
														</div>
													</div>

												</div>
											</li>
											<li class="col-12">
												<div class="form-check lg">
													<div class="frm-slicing d-flex align-items-center">
														<div class="frm-slicing-first">
															<input class="form-check-input" type="checkbox" id="kia"/>
															<label class="form-check-label" for="kia"></label>
														</div>
														<div
															class="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
															<div class="frms-flex d-flex align-items-center">
																<div class="frm-slicing-img"><img src="/assets/img/air-5.png" class="img-fluid" width="25"
																		alt=""/></div>
																<div class="frm-slicing-title ps-2"><span class="text-muted-2">Kia</span></div>
															</div>
															<div class="text-end"><span class="text-md text-muted-2 opacity-75">$370.00</span></div>
														</div>
													</div>

												</div>
											</li>
										</ul>
									</div>

								</div>

							</div>
						</div>
					</div>
  )
}

export default Filtersidebar
