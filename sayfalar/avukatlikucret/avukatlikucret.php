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
								<h3 class="card-title">Avukatlık Asgari Ücret Tarifesi</h3>
							  </div>
							  <div class="card-body">
								<div id="table-default" class="table-responsive">
								  <table class="table" id="avukatlikucret" name="avukatlikucret">
									<thead>
									  <tr>
										<th><button class="table-sort" data-sort="sort-yil">Yıl</button></th>
										<th><button class="table-sort" data-sort="sort-mahkeme">Mahkeme / Dava</button></th>
										<th><button class="table-sort" data-sort="sort-ucret">Ücret</button></th>										
									  </tr>
									</thead>
									<tbody class="table-tbody">
									<?php 
										$veri = json_decode(file_get_contents('./dist/avukatlikasgari.json'), true);
										$count = 0;
										foreach($veri as $item) {																	
											echo '<tr><td class="sort-yil">' . $item['yil'] . '<td class="sort-mahkeme">' . $item['birim'] . '<td class="sort-ucret">' . $item['ucret'] . '</td></tr>' ;
											
										}?>											
									</tbody>
								  </table>
								</div>		
							  </div>
							</div>
						  </div>
					</div>
                    
				</div>				
            </div>
          </div>
        </div>
  