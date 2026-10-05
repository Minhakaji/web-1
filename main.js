(function(){
  var CO_SO = {
    '1': {q: '148 Đinh Tiên Hoàng, Buôn Ma Thuột', ten: 'Cơ sở 1'},
    '2': {q: '235 Nguyễn Văn Cừ, Buôn Ma Thuột', ten: 'Cơ sở 2'}
  };
  var tabs = document.querySelectorAll('.sat-tab');
  var frame = document.getElementById('sat-iframe');
  if(!tabs.length || !frame) return;
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      var cs = CO_SO[tab.getAttribute('data-co-so')];
      var q = encodeURIComponent(cs.q);
      tabs.forEach(function(t){ t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
      frame.src = 'https://www.google.com/maps?q=' + q + '&z=17&hl=vi&output=embed';
      document.getElementById('sat-big').href = 'https://www.google.com/maps/search/?api=1&query=' + q;
      document.getElementById('sat-open').href = 'https://www.google.com/maps?q=' + q + '&t=k';
      document.getElementById('sat-route').href = 'https://www.google.com/maps/dir/?api=1&destination=' + q;
      document.getElementById('sat-caption').textContent = 'Vị trí ' + cs.ten + ' — kéo, phóng to/thu nhỏ; bấm ô nhỏ ở góc trái dưới để xem ảnh vệ tinh.';
    });
  });
})();

function guiViTriKhanCap(){
  var el = document.getElementById('loc-status');
  el.classList.add('is-active');
  if(!('geolocation' in navigator)){
    el.innerHTML = 'Trình duyệt không hỗ trợ định vị. Vui lòng gọi hotline <a href="tel:0362258360">036 225 8360</a> và mô tả vị trí.';
    return;
  }
  el.textContent = 'Đang lấy vị trí của bạn...';
  navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude.toFixed(6);
    var lng = pos.coords.longitude.toFixed(6);
    var mapsUrl = 'https://www.google.com/maps?q=' + lat + ',' + lng;
    var text = 'Tôi cần cứu hộ - vị trí của tôi: ' + mapsUrl;

    function fallbackCopy(){
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(function(){
          el.innerHTML = 'Đã sao chép vị trí. Dán vào Zalo/Messenger gửi cho Lê Tú, hoặc <a href="' + mapsUrl + '" target="_blank" rel="noopener">mở trên Google Maps</a>.';
        }).catch(function(){
          el.innerHTML = 'Vị trí của bạn: <a href="' + mapsUrl + '" target="_blank" rel="noopener">' + mapsUrl + '</a> — gửi link này cho Lê Tú.';
        });
      } else {
        el.innerHTML = 'Vị trí của bạn: <a href="' + mapsUrl + '" target="_blank" rel="noopener">' + mapsUrl + '</a> — gửi link này cho Lê Tú.';
      }
    }

    if(navigator.share){
      navigator.share({title:'Vị trí khẩn cấp - Cứu hộ Lê Tú', text: text, url: mapsUrl})
        .then(function(){ el.textContent = 'Đã mở hộp thoại chia sẻ vị trí.'; })
        .catch(function(){ fallbackCopy(); });
    } else {
      fallbackCopy();
    }
  }, function(err){
    var msg = 'Không lấy được vị trí.';
    if(err.code === err.PERMISSION_DENIED){
      msg = 'Bạn đã từ chối chia sẻ vị trí.';
    }
    el.innerHTML = msg + ' Vui lòng gọi hotline <a href="tel:0362258360">036 225 8360</a> và mô tả địa điểm.';
  }, {enableHighAccuracy:true, timeout:10000});
}
