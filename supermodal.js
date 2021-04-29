/**
 * SuperModal (https://github.com/GianlucaChiarani/SuperModal)
 * @version 0.90
 * @author Gianluca Chiarani
 * @license The MIT License (MIT)
 */

(function ($) {
    
    $.supermodal = function( options ) {
 
        var settings = $.extend({
            backButton: true,
            maxWidth: '1024px',
            maxHeight: '100%',
            background: '#fff',
            color: '',
            shadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
            containerBackground: 'rgba(0,0,0,0.2)',
            containerClass: '',
            containerZIndex: '1000',
            showTitle: true,
            title: '',
            titleColor: '#fff',
            titleBackground: '#212529',
            closeButton: true,
            closeButtonIcon: 'fa fa-times',
            lazyLoading: false
        }, options );
 
        var selector = '[data-modal]';

        $(selector).click(function() {
            initSuperModal(this,settings);
        });
 
    };

    $(window).on('hashchange', function() {
        if (window.location.hash=='') {
            closeModal($('.supermodal-container'));
        } else {
            var hash = window.location.hash.replace('#','').split('_');
            $('.supermodal-container').each(function() {
                var level = $(this).attr('data-modal-level');
                if (level>hash[0]) {
                    closeModal($(this));
                }
            });
        }	
    });

    $(document).ready(function() {
        if (window.location.hash!='') {
            var hash = window.location.hash.replace('#','').split('_');
            $('[data-modal="'+hash[1]+'"').click();
        }
    });

    function initSuperModal(selector,settings) {

        var id = $(selector).attr('data-modal');
        var modalDiv = $('#'+id);
        var title;
        var localSettings = Object.assign({}, settings);

        for ([key, value] of Object.entries(settings)) {
            if ($(selector).attr('data-modal-'+key)) {
                var val = $(selector).attr('data-modal-'+key);
                if (val=='true') val=true;
                if (val=='false') val=false;
                localSettings[key] = val;
            } 
        }

        if (modalDiv.length) {

            var modalHtml = modalDiv.html();
            var modalSelector = '.supermodal-container[id="modal_'+id+'"]';
            var level = 1;

            if ($('.supermodal-container').length) 
                level = $('.supermodal-container').length+1;

            $('body').append('<div id="modal_'+id+'" data-modal-level="'+level+'" class="supermodal-container"><div class="supermodal-window"><div class="supermodal-body">'+modalHtml+'</div></div></div>');

            if (localSettings.showTitle) {
                if (localSettings.title)
                    title = localSettings.title;
                else
                    title = id;
                
                $(modalSelector+' .supermodal-window').prepend('<div class="supermodal-title">'+title+'</div>');
            }

            if (localSettings.closeButton) {
                $(modalSelector+' .supermodal-window .supermodal-title').prepend('<div class="supermodal-close"><i class="'+localSettings.closeButtonIcon+'"></i></div>');
            }
                
            $(modalSelector+' .supermodal-window').css('max-height',localSettings.maxHeight);
            $(modalSelector+' .supermodal-window').css('max-width',localSettings.maxWidth);
            $(modalSelector+' .supermodal-window').css('background',localSettings.background);
            $(modalSelector+' .supermodal-window').css('color',localSettings.color);
            $(modalSelector+' .supermodal-window').css('box-shadow',localSettings.shadow);
            $(modalSelector).css('background',localSettings.containerBackground);
            $(modalSelector).css('z-index',localSettings.containerZIndex);
            $(modalSelector+' .supermodal-window .supermodal-title').css('background',localSettings.titleBackground);
            $(modalSelector+' .supermodal-window .supermodal-title').css('color',localSettings.titleColor);

            if (localSettings.containerClass!='') {
                $(modalSelector).addClass(localSettings.containerClass);
            }

            $(modalSelector+' .supermodal-window').addClass('show');
            
            if (localSettings.backButton)
                window.location.hash = level+'_'+id;

            $(modalSelector+' .supermodal-window .supermodal-close, '+modalSelector+' [data-modal-close]').click(function() {
                closeButton($(modalSelector),localSettings);
            });

            $('html').css('overflow','hidden');

            $(modalSelector+' [data-modal]').click(function() {
                initSuperModal(this,localSettings)
            });

            if (localSettings.lazyLoading) {
                $(modalSelector+' img[data-src]').each(function() {
                    $(this).attr('src',$(this).attr('data-src'));
                });
            }
        } else {
            console.log('SuperModal: invalid id');
        }
    }
    
    function closeButton(obj, settings = Array()) {
        if (settings.backButton)
            window.history.back();
        else
            closeModal(obj);
    }

    function closeModal(obj) {
        var window = false;
        var container = false;
    
        if (obj.find('.supermodal-window').length) {
            window = obj.find('.supermodal-window');
            container = obj;
        } else if (obj.parents('.supermodal-window:first').length) {
            window = obj.parents('.supermodal-window:first');
            container = obj.parents('.supermodal-container:first');
        }      
        
        if (window) {
            window.removeClass('show').addClass('hide');
            setTimeout(function() {
                container.remove();
                if (!$('.supermodal-container').length) {
                    $('html').css('overflow','auto');
                }
            }, 300);
        }
    }

}(jQuery));
