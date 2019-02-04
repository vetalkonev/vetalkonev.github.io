$(".element-item").hover(function() {

    let portfolioInfo = $(this).attr("data-info");
    portfolioInfo = portfolioInfo.split("; ");
    $(this).prepend(`<div class="portfolio-item-info">
          <div class="portfolio-info-icons">
              <a href="#" class="portfolio-info-icon"><i class="fas fa-link"></i></a>
              <a href="#" class="portfolio-info-icon"><i class="fas fa-search"></i></a>
          </div>
          <h3 class="portfolio-info-title">${portfolioInfo[0]}</h3>
          <p class="portfolio-info-description">${portfolioInfo[1]}</p>
      </div>`);

}, function() {
    $(this).find(".portfolio-item-info").remove();
});
