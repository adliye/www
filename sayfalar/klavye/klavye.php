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
								<h3 class="card-title">Klavye Testi</h3>
							  </div>
							  <div class="card-body">
								<div class="col-lg-12">
									<div id="command-center" class="">													
									  <div class="bar">
										<label></label>
										  
										</div>
										<div id="right-wing">Dakika Başı Kelime: 0 / Toplam Harf: 0</div>
									  </div>
									  <div id="typing-area">
										<h2><div id="text-display"></div></h2>
										<div>
										  <input id="input-field" name="input-field" class="form-control" type="text" spellcheck="false" autocomplete="on" autocorrect="off" autocapitalize="off" tabindex="1"/>
										  <button id="redo-button" class="btn btn-green active w-20" onclick="setText(event)" tabindex="2">baştan</button>
										</div>
									  </div>
									</div>
							</div>	
							  </div>
							</div>
						  </div>
						  <div class="col-lg-4">
							<div class="card">
								<div class="card-header">
									<h3 class="card-title">Ayarlar</h3>
								</div>
								<div class="card-body">
									<div class="col-lg-12">
									<div class="form-selectgroup d-none d-sm-flex flex-column">
									  <label class="form-selectgroup-item">
										<input type="radio" name="icons" value="home" class="form-selectgroup-input" checked="" onclick="setTypingMode('time')">
										<span class="form-selectgroup-label"><!-- Download SVG icon from http://tabler-icons.io/i/square -->
										  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										   <path d="M6.5 7h11"></path>
										   <path d="M6.5 17h11"></path>
										   <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z"></path>
										   <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z"></path>
										</svg>
										  Süre</span>
									  </label>
									  <label class="form-selectgroup-item">
										<input type="radio" name="icons" value="square" class="form-selectgroup-input" onclick="setTypingMode('wordcount')">
										<span class="form-selectgroup-label"><!-- Download SVG icon from http://tabler-icons.io/i/square -->
										  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										   <path d="M3 16v-6a2 2 0 1 1 4 0v6"></path>
										   <path d="M3 13h4"></path>
										   <path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1"></path>
										   <path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01"></path>
										</svg>
										  Kelime</span>
									  </label>
									</div>
									<div id="left-wing">

										  <span id="word-count">
											<div class="list-group">
												<ul id="word-c"class="list-group">
												
													<li class="list-group-item" aria-current="true" id="wc-30" name="a" onclick="setWordCount(30)">30 kelime</li>
													<li class="list-group-item" aria-current="true" id="wc-60" name="a" onclick="setWordCount(60)">60 kelime</li>
													<li class="list-group-item" aria-current="true" id="wc-90" name="a" onclick="setWordCount(90)">90 kelime</li>
												</ul>
											</div>	
										  </span>
										  <span id="time-count">
											<div class="progress" style="height: 20px;">
											  <div class="progress-bar progress-bar-striped" id="timer" role="progressbar" style="width: 100%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
											<div class="list-group">
													<ul id="word-t" class="list-group">
													  <li class="list-group-item" aria-current="true" id="tc-60" onclick="setTimeCount(60)">1 dakika</li>
													  <li class="list-group-item" aria-current="true" id="tc-120" onclick="setTimeCount(120)">2 dakika</li>
													  <li class="list-group-item" aria-current="true" id="tc-180" onclick="setTimeCount(180)"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
													   <line x1="8" y1="21" x2="16" y2="21"></line>
													   <line x1="12" y1="17" x2="12" y2="21"></line>
													   <line x1="7" y1="4" x2="17" y2="4"></line>
													   <path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path>
													   <circle cx="5" cy="9" r="2"></circle>
													   <circle cx="19" cy="9" r="2"></circle>
													</svg>  3 dakika</li>
													  <li class="list-group-item" aria-current="true" id="tc-300" onclick="setTimeCount(300)">5 dakika</li>
													</ul>
											</div>
										  </span>
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
		
	
  <div class="modal modal-blur fade" id="modal-team" tabindex="-1" style="display: none;" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Sonucu Gönder</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
			<div class="row mb-3 align-items-center">
			  <div class="col align-items-center">
                <label class="form-label text-align-center"><h2>Toplam Doğru Kelime : </h2><h2 id="score">0</h2></label>
              </div>			              
            </div>
            <div class="row mb-3 align-items-end">
			  	
              <div class="col">
                <label class="form-label" >İsim</label>
                <input type="text" class="form-control" id="isim" name="isim">
              </div>
            </div>
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn me-auto" data-bs-dismiss="modal">Kapat</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="gonder" name="gonder">Gönder</button>
          </div>
        </div>
      </div>
    </div>