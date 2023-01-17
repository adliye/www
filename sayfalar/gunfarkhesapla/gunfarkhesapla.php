
      <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
                <!-- Page pre-title -->
                <div class="page-pretitle">
                  Gün Farkı Hesaplama
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
				<div class="col-6">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card">
							  <div class="card-header">
								<h3 class="card-title">Günleri Seçiniz</h3>
							  </div>
							  <div class="card-body">
								<div class="mb-3">
									<label class="form-label required">Başlangıç Tarihi</label>
									<div>
									  <input type="text" name="tarih-baslama" class="form-control" data-mask="00/00/0000" data-mask-visible="true" placeholder="00/00/0000" autocomplete="off">
									  <small class="form-hint"></small>
									</div>
								  </div>
								<div class="mb-3">
									<label class="form-label required">Bitiş Tarihi</label>
									<div>
									  <input type="text" name="tarih-bitis" class="form-control" data-mask="00/00/0000" data-mask-visible="true" placeholder="00/00/0000" autocomplete="off">
									  <small class="form-hint"></small>
									</div>
								</div>
								<div class="mb-3">
									<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
										<a href="#" class="btn btn-green active w-100" id ="gunhesapla" name="gunhesapla">
										  Hesapla
										</a>
									</div>
									<small class="form-hint"></small>
									
								</div>
							  </div>
							</div>
						  </div>
					</div>
                    
				</div>
				
				<div class="col-6">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card">
							  <div class="card-stamp">
								<div class="card-stamp-icon bg-purple">
								 <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								   <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
								   <circle cx="18" cy="18" r="4"></circle>
								   <path d="M15 3v4"></path>
								   <path d="M7 3v4"></path>
								   <path d="M3 11h16"></path>
								   <path d="M18 16.496v1.504l1 1"></path>
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
				
				
				<div class="col-12">
					<div class="row row-deck row-cards">
						<div class="col-6">
							<div class="row row-deck row-cards">
								<div class="col-lg-12">
									<div class="card">
									  <div class="card-header">
										<h3 class="card-title">İzin/Tatil Gün Ekleme</h3>
									  </div>
									  <div class="card-body">
										<div class="mb-3">
											<label class="form-label required">Başlangıç Tarihi</label>
											<div>
											  <input type="text" name="izin-baslama" class="form-control" data-mask="00/00/0000" data-mask-visible="true" placeholder="00/00/0000" autocomplete="off">
											  <small class="form-hint"></small>
											</div>
										  </div>
										<div class="mb-3">
											<label class="form-label required">Bitiş Tarihi</label>
											<div>
											  <input type="text" name="izin-bitis" class="form-control" data-mask="00/00/0000" data-mask-visible="true" placeholder="00/00/0000" autocomplete="off">
											  <small class="form-hint"></small>
											</div>
										</div>
										<div class="mb-3">
											<div class="col-6 col-sm-4 col-md-2 col-xl py-3">
												<a href="#" class="btn btn-primary active w-100" id ="gunekle" name="gunekle">
												  Ekle
												</a>
											</div>
											<small class="form-hint">İzin veya Tatil günlerinin eklenmesi halinde fark günden düşümünü yapacaktır.</small>
											
										</div>
										
									  </div>
									</div>
								  </div>
							</div>
							
							
						</div>
						<div class="col-lg-6">
							<div class="card">
							  <div class="card-header">
								<div>
								  <h3 class="card-title">
									İzin/Tatil Günleri Listesi
								  </h3>
								  <p class="card-subtitle">
									Listeye elle ekleme, çıkartma, kopyalama yada yapıştırma yapabilirsiniz. Güncellemeyi unutmayınız.
								  </p>
								</div>
							  </div>
							  <div class="card-body">
								<textarea id="tinymce-mytextarea"></textarea>
							  </div>
							  <div class="card-footer">
								<a href="#" class="btn btn-yellow active w-100" id ="guncelle" name="guncelle">
												  Güncelle
												</a>
							  </div>
							  
							</div>
						  </div>
					</div>
                    
				</div>
				
				
					
            </div>
          </div>
        </div>
  