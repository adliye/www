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
				<div class="col-12">
					<div class="row row-deck row-cards">
						<div class="col-lg-12">
							<div class="card">
							  <div class="card-header">
								<h3 class="card-title">Tanık Asgari Ücret Tarifesi</h3>
							  </div>
							  <div class="card-body">
								<div class="embed-responsive embed-responsive-16by9">								 
								  <?php
									$sayfa = 'https://www.resmigazete.gov.tr/eskiler/2022/09/20220930-4.htm';
									$content = file_get_contents($sayfa);
									$son =  mb_convert_encoding($content, 'UTF-8', mb_detect_encoding($content, 'UTF-8, ISO-8859-9', true));
																	
									echo $son;
									?>
								</div>
								<small class="form-hint text-red">Kaynak : https://www.resmigazete.gov.tr/eskiler/2022/09/20220930-4.htm</small>
								</div>		
							  </div>
						  </div>
					</div>
                    
				</div>				
            </div>
          </div>
        </div>
  