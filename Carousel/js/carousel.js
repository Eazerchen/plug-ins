var Carousel = (function(){
  function _Carousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
    this.autoPlay();
  }
  
  _Carousel.prototype = {
    init: function(){
      var $imgCt = this.$imgCt = this.$ct.find('.img-ct');
      var $btnPre = this.$btnPre = this.$ct.find('.btn-pre');
      var $btnNext = this.$btnNext = this.$ct.find('.btn-next');
      var $bullet = this.$bullet = this.$ct.find('.bullet');
      var $firstImg = this.$firstImg = $imgCt.find('li').first();
      var $lastImg = this.$lastImg = $imgCt.find('li').last();
      var imgLength = this.imgLength = $imgCt.children().length;
      var curPageIndex = this.curPageIndex = 0;
      var isAnimate = this.isAnimate = false;

      $imgCt.prepend($lastImg.clone());
      $imgCt.append($firstImg.clone());
      $imgCt.width($firstImg.width()*$imgCt.children().length);
      $imgCt.css('left',0-$firstImg.width());
    },
    
    bind: function(){
      var _this = this;
      this.$btnPre.on('click',function(e){
        e.preventDefault();
        _this.playPre();

      });
      this.$btnNext.on('click',function(e){
        e.preventDefault();
        _this.playNext();

      });
      this.$bullet.find('li').on('click',function(){
        var index = $(this).index();
        _this.play(index);
        _this.setBullet();
        // console.log(index)
      });
    },
    
    playPre: function(){
      var _this = this;
      if (this.isAnimate)return;
      this.isAnimate = true;
      this.$imgCt.animate({
        left: '+='+this.$firstImg.width()
      },function(){
        _this.curPageIndex--;
        if (_this.curPageIndex < 0) {
          _this.$imgCt.css('left',0-(_this.imgLength*_this.$firstImg.width()));
          _this.curPageIndex = _this.imgLength-1;
        }
        _this.isAnimate = false;
        _this.setBullet();
      });
    },
    

    
    playNext: function(){
      var _this = this;
      if (this.isAnimate)return;
      this.isAnimate = true;
      this.$imgCt.animate({
        left: '-='+this.$firstImg.width()
      },function(){
        _this.curPageIndex++;
        if (_this.curPageIndex === _this.imgLength) {
          _this.$imgCt.css('left',0-_this.$firstImg.width());
          _this.curPageIndex = 0;
        }
        _this.isAnimate = false;
        _this.setBullet();
      });
    },
    
    play: function(idx){
      var _this = this;
      if (this.isAnimate)return;
      this.isAnimate = true;
      this.$imgCt.animate({
        left: '+='+this.$firstImg.width()*(this.curPageIndex-idx)
      },function(){
        _this.curPageIndex = idx;
        _this.isAnimate = false;
        _this.setBullet();
      });
    },
    
    setBullet: function(){
      this.$bullet.children()
             .removeClass('active')
             .eq(this.curPageIndex)
             .addClass('active');
    },
    
    autoPlay: function(){
    var _this=this;
    clock = setInterval(function(){
      _this.playNext();
    },2000);
  },
    
  };
  
  
  return {
    init: function($ct){
      $ct.each(function(idx,node){
        new _Carousel($(node));
      });
    }
  };
})();

Carousel.init($('.carousel'));