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
				<div class="col-lg-12">
                <div class="row row-cards">                  
                  <div class="col-12">
                    <div class="card" style="height: 50rem">
						<div class="card-header">
								<h3 class="card-title" id="haberbaslik"><?php 
								$id = 0;
								$baslik = '';
								$icerik = '';
								if (isset($_GET['id'])) { 
									$id = $_GET['id'];
									$duyurular = json_decode(file_get_contents('./dist/haberler.json'), true);
									
									foreach($duyurular as $item) {
										if ($id == $item['id']) { 
											$baslik = $item['baslik'];
											$icerik = $item['metin'];
										}
									}
								}
								
								echo $baslik;
								?>	</h3>
						</div>
						<div class="card-body card-body-scrollable">
								<div class="row">
								  <?php 
										echo $icerik;
										?>
								</div>
						</div>
						<div class="card-footer">
								<div class="float-end">
								  <?php 
									$JSON = json_decode(file_get_contents('https://api.countapi.xyz/hit/adliyeci_oku' . $id), true);
									echo 'Okunma sayısı : ' . $JSON['value'] ;
									?>
								</div>	
						</div>
                    </div>
                  </div>
                </div>
              </div>
			  
			
				
			</div>				
            </div>
          </div>
        </div>
  