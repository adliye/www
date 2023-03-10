      <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
                <!-- Page pre-title -->
                <div class="page-pretitle">
                  
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
          <div class="container-xxl">
            <div class="row row-deck row-cards">
				<div class="col-9">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card">
							  <div class="card-header">
								<h3 class="card-title">Vekalet Ücreti Hesaplama İşlemleri</h3>
							  </div>
							  <div class="card-body">
								<div class="mb-3">
									<label class="form-label required">Hükmedilen Değer</label>
									<div>
									  <input type="number" class="form-control" data-type="currency" placeholder="Kabul edilen değeri giriniz" name="vekaletmiktar">
									  <small class="form-hint">Kira veya nafaka arttırım davalarında arttırılan/tespit edilen bedelin 12 aylık değeri yazılmalıdır. 
									</a></small>
									</div>
								</div>
								
								<div class="mb-3">
									<label class="form-label"></label>
									<div>
									  <label class="form-check">
										<input class="form-check-input" type="checkbox" name="kiranafaka">
										<span class="form-check-label required">Kira veya Nafaka Arttırım Davası</span>
									  </label>									  
									</div>
								  </div>
								
								<div class="mb-3">
									<label class="form-label">Mahkeme Seçiniz</label>
									<select type="text" class="form-select" placeholder="Seçiniz" id="mahkeme-maktu" value="">
										<option value="0" disabled>Seçiniz</option>
									  <option value="9200" selected>Asliye Hukuk Mahkemesi</option>
									  <option value="1800">İcra Dairesi - Takipler</option>
									  <option value="2100">İcra Mahkemesi - Takipler</option>
									  <option value="3400">İcra Mahkemesi - Duruşmalı</option>
									  <option value="3700">Tahliyeye İlişkin Takipler</option>
									  <option value="5500">Sulh Hukuk Mahkemesi</option>
									  <option value="4600">Tüketici Mahkemesi</option>
									  <option value="15000">Fikri ve Sınai Haklar Mahkemesi</option>
									  <option value="17400">Ağır Ceza Mahkemesi - Tazminat Davaları</option>
									</select>
								</div>
									
							  </div>
							</div>
						  </div>
					</div>
                    
				</div>
				<div class="col-3">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card">
							  <div class="card-stamp">
								<div class="card-stamp-icon bg-cyan">
								 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-percentage" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <circle cx="17" cy="17" r="1"></circle>
								   <circle cx="7" cy="7" r="1"></circle>
								   <line x1="6" y1="18" x2="18" y2="6"></line>
								</svg>
								</div>
							  </div>
							  <div class="card-body d-flex align-items-center justify-content-center h-100">
								<label id="hesapsonuc" name="hesapsonuc" class="text-justify mh-25"><h1 class="m-0"></h1></label>
							  </div>
							</div>
						  </div>
					</div>
                    
				</div>
            </div>
          </div>
        </div>
  