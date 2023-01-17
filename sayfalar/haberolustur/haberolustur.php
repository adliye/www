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
				
			
			
				<div class="col-6" style="height: 40rem;">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card">							 
							  <div class="card-body card-body-scrollable card-body-scrollable-shadow">
								<div class="mb-3">
									<label class="form-label required">Haber ID:</label>
									<div>
									  <input type="text" name="haberid" class="form-control" placeholder="haber id" autocomplete="off">
									</div>
								</div>
								<div class="mb-3">
									<label class="form-label required">Haber Başlık:</label>
									<div>
									  <input type="text" name="haberbaslik" class="form-control" placeholder="haber başlığı" autocomplete="off">
									</div>
								</div>
								<div class="mb-3">
									<label class="form-label required">Haber Açıklaması:</label>
									<div>
									  <input type="text" name="haberaciklama" class="form-control" placeholder="haber açıklaması" autocomplete="off">
									</div>
								</div>
								<div class="mb-3">
									<textarea id="tinymce-mytextarea"></textarea>
								</div>
								<a href="#" class="btn btn-green active w-100" id ="haberolustur" name="haberolustur">
										  Oluştur
										</a>	
							  </div>							  
							</div>
						  </div>
					</div>
                    
				</div>	
				<div class="col-6" style="height: 40rem;">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card h-100">							  
							  
								<span id="haberjson" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></span>	
							  							  
							</div>
						  </div>
					</div>
                    
				</div>	
            </div>
          </div>
        </div>
  