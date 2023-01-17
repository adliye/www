		<?php	setlocale(LC_MONETARY, 'tr_TR');
				$JSON = json_decode(file_get_contents('https://api.genelpara.com/embed/doviz.json'), true);
		?>
		<div class="card">		
            <div class="card-body">
				<div class="row">
					<div class="col-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
						   <path d="M12 3v3m0 12v3"></path>
						</svg>
						<label>Dolar : </label>
						<label id="dolar"><span>
						<?php
							if ($JSON['USD']['d_oran'] > 0) { 
								echo'<div class="text-green"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <line x1="17" y1="7" x2="7" y2="17"></line>
							   <polyline points="8 7 17 7 17 16"></polyline>
							</svg>';
							echo '<label>' . $JSON['USD']['satis'] . '  ₺</label></div>';
							} else if ($JSON['USD']['d_oran'] < 0) { 
								echo'<div class="text-red"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <line x1="7" y1="7" x2="17" y2="17"></line>
								   <polyline points="17 8 17 17 8 17"></polyline>
								</svg>';
							echo '<label>' . $JSON['USD']['satis'] . ' ₺</label></div>';	
							} else { 
								echo $JSON['USD']['satis'] . '  ₺';
							}
						 ?></span></label>
					</div>	
					<div class="col-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-euro" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M17.2 7a6 7 0 1 0 0 10"></path>
						   <path d="M13 10h-8m0 4h8"></path>
						</svg>
						<label>Euro : </label>
						<label id="euro"><span>
						<?php
							if ($JSON['EUR']['d_oran'] > 0) { 
								echo'<div class="text-green"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <line x1="17" y1="7" x2="7" y2="17"></line>
							   <polyline points="8 7 17 7 17 16"></polyline>
							</svg>';
							echo '<label>' . $JSON['EUR']['satis'] . '  ₺</label></div>';
							} else if ($JSON['EUR']['d_oran'] < 0) { 
								echo'<div class="text-red"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <line x1="7" y1="7" x2="17" y2="17"></line>
								   <polyline points="17 8 17 17 8 17"></polyline>
								</svg>';
							echo '<label>' . $JSON['EUR']['satis'] . '  ₺</label></div>';	
							} else { 
								echo $JSON['EUR']['satis'] . '  ₺' ;
							}
						 ?></span></label>
					</div>
					<div class="col-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coins" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"></path>
						   <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"></path>
						   <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z"></path>
						   <path d="M3 6v10c0 .888 .772 1.45 2 2"></path>
						   <path d="M3 11c0 .888 .772 1.45 2 2"></path>
						</svg>
						<label>Altın : </label>
						<label id="altın"><span>
						<?php
							if ($JSON['GA']['d_oran'] > 0) { 
								echo'<div class="text-green"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <line x1="17" y1="7" x2="7" y2="17"></line>
							   <polyline points="8 7 17 7 17 16"></polyline>
							</svg>';
							echo '<label>' . $JSON['GA']['satis'] . '  ₺</label></div>';
							} else if ($JSON['GA']['d_oran'] < 0) { 
								echo'<div class="text-red"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <line x1="7" y1="7" x2="17" y2="17"></line>
								   <polyline points="17 8 17 17 8 17"></polyline>
								</svg>';
							echo '<label>' . $JSON['GA']['satis'] . '  ₺</label></div>';	
							} else { 
								echo $JSON['GA']['satis'] . '  ₺';
							}
						 ?></span></label>
					</div>	
					<div class="col-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-bank" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <line x1="3" y1="21" x2="21" y2="21"></line>
						   <line x1="3" y1="10" x2="21" y2="10"></line>
						   <polyline points="5 6 12 3 19 6"></polyline>
						   <line x1="4" y1="10" x2="4" y2="21"></line>
						   <line x1="20" y1="10" x2="20" y2="21"></line>
						   <line x1="8" y1="14" x2="8" y2="17"></line>
						   <line x1="12" y1="14" x2="12" y2="17"></line>
						   <line x1="16" y1="14" x2="16" y2="17"></line>
						</svg>
						<label>BIST : </label>
						<label id="bist"><span>
						<?php
							if ($JSON['XU100']['degisim'] > 0) { 
								echo'<div class="text-green"><svg color="text-red" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <line x1="17" y1="7" x2="7" y2="17"></line>
							   <polyline points="8 7 17 7 17 16"></polyline>
							</svg>';
							echo '<label>' . $JSON['XU100']['satis'] . ' ₺</label></div>';
							} else if ($JSON['XU100']['degisim'] < 0) { 
								echo'<div class="text-red"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <line x1="7" y1="7" x2="17" y2="17"></line>
								   <polyline points="17 8 17 17 8 17"></polyline>
								</svg>';
							echo '<label>' . $JSON['XU100']['satis'] . '  ₺</label></div>';		
							} else { 
								echo $JSON['XU100']['satis'] . '  ₺';
							}
						 ?></span></label>
					</div>
					<div class="col-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-bitcoin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"></path>
						   <line x1="8" y1="6" x2="8" y2="18"></line>
						   <line x1="8" y1="12" x2="14" y2="12"></line>
						   <line x1="9" y1="3" x2="9" y2="6"></line>
						   <line x1="13" y1="3" x2="13" y2="6"></line>
						   <line x1="9" y1="18" x2="9" y2="21"></line>
						   <line x1="13" y1="18" x2="13" y2="21"></line>
						</svg>
						<label>BTC : </label>
						<label id="btc"><span>
						<?php
							if ($JSON['BTC']['d_oran'] > 0) { 
								echo'<div class="text-green"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <line x1="17" y1="7" x2="7" y2="17"></line>
							   <polyline points="8 7 17 7 17 16"></polyline>
							</svg>';
							echo '<label>' . $JSON['BTC']['satis'] . ' $</label></div>';
							} else if ($JSON['BTC']['d_oran'] < 0) { 
								echo'<div class="text-red"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <line x1="7" y1="7" x2="17" y2="17"></line>
								   <polyline points="17 8 17 17 8 17"></polyline>
								</svg>';
							echo '<label>' . $JSON['BTC']['satis'] . ' $</label></div>';	
							} else { 
								echo $JSON['BTC']['satis']. ' $';
							}
						 ?></span></label>
					</div>
					<div class="col-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-ethereum" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						   <path d="M6 12l6 -9l6 9l-6 9z"></path>
						   <path d="M6 12l6 -3l6 3l-6 2z"></path>
						</svg>
						<label>ETH : </label>
						<label id="eth"><span>
						<?php
							if ($JSON['ETH']['d_oran'] > 0) { 
								echo'<div class="text-green"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <line x1="17" y1="7" x2="7" y2="17"></line>
							   <polyline points="8 7 17 7 17 16"></polyline>
							</svg>';
							echo '<label>' . $JSON['ETH']['satis'] . ' $</label></div>';
							} else if ($JSON['ETH']['d_oran'] < 0) { 
								echo'<div class="text-red"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <line x1="7" y1="7" x2="17" y2="17"></line>
								   <polyline points="17 8 17 17 8 17"></polyline>
								</svg>';
							echo '<label>' . $JSON['ETH']['satis'] . ' $</label></div>';	
							} else { 
								echo $JSON['ETH']['satis'] . ' $';
							}
						 ?></span></label>
					</div>	
					
				</div>			
			</div>
		</div>
	  
	  <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
                <!-- Page pre-title -->
                <div class="page-pretitle">
                  Anasayfa
                </div>
                <h2 class="page-title">
                   
                </h2>
              </div>
              <!-- Page title actions -->             
            </div>
          </div>
        </div>
		
		
        <!-- Page body -->
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-deck row-cards">
				<div class="col-9">
                    <div class="card">
						<div class="ribbon ribbon-top bg-primary"><!-- Download SVG icon from http://tabler-icons.io/i/star -->
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							   <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
							   <line x1="8" y1="8" x2="12" y2="8"></line>
							   <line x1="8" y1="12" x2="12" y2="12"></line>
							   <line x1="8" y1="16" x2="12" y2="16"></line>
							</svg>
						  </div>
						
						
                      <div class="card-header">
                        <h3 class="card-title">Haberler</h3>
                      </div> 
						<div class="card-body">
							<div class="card" style="height: 20rem">
							  <div class="card-body card-body-scrollable card-body-scrollable-shadow">
								<div class="divide-y">
									<div id="habericerikleri">
									</div>
									
								</div>
							  </div>
							</div>
							<div class="card-footer text-center">
									<ul id="pagination-demo" class="pagination-sm"></ul>
							</div>
						</div>	
					</div>
				</div>
				
				<div class="col-3">
					<div class="row row-deck row-cards">						
						<div class="col-12">
							<div class="card">
								<div class="ribbon ribbon-top bg-youtube"><!-- Download SVG icon from http://tabler-icons.io/i/star -->
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
													   <line x1="8" y1="21" x2="16" y2="21"></line>
													   <line x1="12" y1="17" x2="12" y2="21"></line>
													   <line x1="7" y1="4" x2="17" y2="4"></line>
													   <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
													   <circle cx="5" cy="9" r="2"></circle>
													   <circle cx="19" cy="9" r="2"></circle>
													</svg>
								  </div>								
									  <div class="card-header">
										<h3 class="card-title">Günün En Hızlı 5 Klavyesi</h3>
									  </div>
									  <div class="list-group list-group-flush" id="ranklist">
										<ul id="ranklistu"class="list-group">
										
										</ul>
										
									  </div>
									  
							</div>
						</div>						
						
					</div>
                    
				</div>
				<div class="col-12 mt-5">
					<div class="card  h-100">	
						<div class="card-body">						
							<div class="owl-carousel owl-theme" align="center" id="althaber">
									<?php 
										$althaberjs = json_decode(file_get_contents('./dist/althaber.json'), true);
										foreach($althaberjs as $item) { //foreach element in $arr
											echo '<div class="item" align="center" style="width:25%"> <a href=' . $item['link'] . ' target="_blank"><img width="50" height="50" src=' . $item['img'] . '><br><span>' . $item['isim'].'</a></span></div>';
										}										
									
									?>									
							</div>	
						</div>						
					</div>
				
			
				</div>
			
				</div>
			
          </div>
        </div>
        